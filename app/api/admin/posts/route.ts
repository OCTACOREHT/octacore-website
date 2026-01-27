import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabaseAdmin'

type PostStatus = 'draft' | 'published'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const ADMIN_SECRET = process.env.ADMIN_SECRET

const missingSecretResponse = NextResponse.json(
  { error: 'ADMIN_SECRET not set on server.' },
  { status: 500 }
)

const unauthorized = NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

const isValidStatus = (status: unknown): status is PostStatus =>
  status === 'draft' || status === 'published'

function assertAdmin(req: NextRequest, body?: Record<string, unknown>) {
  if (!ADMIN_SECRET) return missingSecretResponse
  const provided =
    (body?.adminSecret as string | undefined) ??
    req.nextUrl.searchParams.get('adminSecret') ??
    req.headers.get('x-admin-secret') ??
    undefined
  if (!provided || provided !== ADMIN_SECRET) return unauthorized
  return null
}

function normalizeContent(raw: unknown) {
  const text = typeof raw === 'string' ? raw : ''
  if (!text) return {}
  try {
    const parsed = JSON.parse(text)
    return parsed
  } catch {
    // If looks like HTML, wrap as html so frontend renders it
    if (/<[^>]+>/.test(text)) {
      return { html: text }
    }
    return { raw: text }
  }
}

const baseSelect =
  'id,title,slug,status,published_at,updated_at,created_at,excerpt,cover_image_path,cover_image_alt,content'

export async function GET(req: NextRequest) {
  const auth = assertAdmin(req)
  if (auth) return auth

  const { data, error } = await supabaseAdmin.from('posts').select(baseSelect).order('updated_at', { ascending: false })
  if (error) return NextResponse.json({ error: error.message }, { status: 400 })
  return NextResponse.json({ data })
}

export async function POST(req: NextRequest) {
  const body = (await req.json()) as Record<string, unknown>
  const auth = assertAdmin(req, body)
  if (auth) return auth

  const title = String(body.title ?? '').trim()
  const slug = String(body.slug ?? '').trim()
  const excerpt = String(body.excerpt ?? '').trim()
  const status: PostStatus = body.status === 'published' ? 'published' : 'draft'
  const cover_image_path = String(body.cover_image_path ?? '').trim() || null
  const cover_image_alt = String(body.cover_image_alt ?? '').trim() || null

  if (!title) return NextResponse.json({ error: 'Title required' }, { status: 400 })
  if (!slug) return NextResponse.json({ error: 'Slug required' }, { status: 400 })

  const content = normalizeContent(body.content)

  const insertPayload = {
    title,
    slug,
    excerpt,
    status,
    cover_image_path,
    cover_image_alt,
    content,
    published_at: status === 'published' ? new Date().toISOString() : null,
  }

  const { data, error } = await supabaseAdmin.from('posts').insert(insertPayload).select().single()
  if (error) return NextResponse.json({ error: error.message }, { status: 400 })
  return NextResponse.json({ data })
}

export async function PUT(req: NextRequest) {
  const body = (await req.json()) as Record<string, unknown>
  const auth = assertAdmin(req, body)
  if (auth) return auth

  const id = String(body.id ?? '').trim()
  if (!id) return NextResponse.json({ error: 'id required' }, { status: 400 })

  const patch: Record<string, unknown> = {}

  if (body.title != null) patch.title = String(body.title).trim()
  if (body.slug != null) patch.slug = String(body.slug).trim()
  if (body.excerpt != null) patch.excerpt = String(body.excerpt).trim()
  if (body.cover_image_path != null) patch.cover_image_path = String(body.cover_image_path).trim() || null
  if (body.cover_image_alt != null) patch.cover_image_alt = String(body.cover_image_alt).trim() || null

  if (body.status != null) {
    const s: PostStatus = body.status === 'published' ? 'published' : 'draft'
    patch.status = s
    if (s === 'published' && !body.published_at) {
      patch.published_at = new Date().toISOString()
    }
  }

  if (body.content != null) patch.content = normalizeContent(body.content)

  const { data, error } = await supabaseAdmin.from('posts').update(patch).eq('id', id).select().single()
  if (error) return NextResponse.json({ error: error.message }, { status: 400 })
  return NextResponse.json({ data })
}

export async function DELETE(req: NextRequest) {
  const body = (await req.json()) as Record<string, unknown>
  const auth = assertAdmin(req, body)
  if (auth) return auth

  const id = String(body.id ?? '').trim()
  if (!id) return NextResponse.json({ error: 'id required' }, { status: 400 })

  const { error } = await supabaseAdmin.from('posts').delete().eq('id', id)
  if (error) return NextResponse.json({ error: error.message }, { status: 400 })
  return NextResponse.json({ success: true })
}
