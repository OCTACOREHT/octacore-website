import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabaseAdmin'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const ADMIN_SECRET = process.env.ADMIN_SECRET
const bucket = 'cms'

export async function POST(req: NextRequest) {
  if (!ADMIN_SECRET) {
    return NextResponse.json({ error: 'ADMIN_SECRET not set on server.' }, { status: 500 })
  }

  const formData = await req.formData()
  const adminSecret = formData.get('adminSecret')?.toString()
  if (!adminSecret || adminSecret !== ADMIN_SECRET) {
    return NextResponse.json({ error: 'Not authorized' }, { status: 401 })
  }

  const file = formData.get('file') as File | null
  if (!file) {
    return NextResponse.json({ error: 'Missing file' }, { status: 400 })
  }

  const arrayBuffer = await file.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)

  const objectKey = `covers/${Date.now()}-${file.name}`

  const { error } = await supabaseAdmin.storage.from(bucket).upload(objectKey, buffer, {
    cacheControl: '3600',
    upsert: false,
    contentType: file.type,
  })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  // Path stored in DB includes the bucket prefix so public URL works with frontend helper
  const path = `${bucket}/${objectKey}`
  const publicUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${path}`

  return NextResponse.json({ path, publicUrl })
}
