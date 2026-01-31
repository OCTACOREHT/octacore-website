import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { supabaseClient } from '@/lib/supabaseClient'

type Post = {
  id: string
  title: string
  slug: string
  excerpt: string | null
  content: unknown
  cover_image_path: string | null
  cover_image_alt: string | null
  status: 'draft' | 'published'
  published_at: string | null
  seo_title: string | null
  seo_description: string | null
  canonical_url: string | null
  created_at: string
  updated_at: string
}

const supabaseStorageUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/`
  : ''

const imageUrlFromPath = (path: string | null) =>
  path && supabaseStorageUrl ? `${supabaseStorageUrl}${path}` : null

async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const { data, error } = await supabaseClient
      .from('posts')
      .select(
        'id,title,slug,excerpt,content,cover_image_path,cover_image_alt,status,published_at,seo_title,seo_description,canonical_url,created_at,updated_at'
      )
      .eq('slug', slug)
      .eq('status', 'published')
      .maybeSingle()

    if (error) {
      // Log server-side to help debugging without crashing the SSR worker
      // eslint-disable-next-line no-console
      console.error('getPostBySlug supabase error:', error)
      return null
    }

    if (!data) return null

    return data as Post
  } catch (err) {
    // Unexpected error (network, env, etc.) — don't throw to avoid dev server crash
    // eslint-disable-next-line no-console
    console.error('getPostBySlug unexpected error:', err)
    return null
  }
}

export const revalidate = 120

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const resolvedParams = (await Promise.resolve(params)) as { slug: string }
  const slug = resolvedParams.slug

  let post: Post | null = null
  try {
    post = await getPostBySlug(slug)
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('generateMetadata getPostBySlug error:', err)
    return {
      title: 'Article introuvable',
      description: "Nous n'avons pas pu trouver cet article.",
    }
  }

  if (!post) {
    return {
      title: 'Article introuvable',
      description: "Nous n'avons pas pu trouver cet article.",
    }
  }

  const cover = imageUrlFromPath(post.cover_image_path)
  const title = post.seo_title ?? post.title
  const description = post.seo_description ?? post.excerpt ?? `Article Octacore: ${post.title}`

  return {
    title,
    description,
    alternates: {
      canonical: post.canonical_url ?? `/blog/${post.slug}`,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url: post.canonical_url ?? `/blog/${post.slug}`,
      publishedTime: post.published_at ?? undefined,
      images: cover ? [{ url: cover, alt: post.cover_image_alt ?? post.title }] : undefined,
    },
  }
}

const formatDate = (value: string | null) =>
  value ? new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(value)) : 'Not published'

const renderContent = (content: unknown) => {
  if (!content) {
    return <p className="text-white/70">Pas de contenu fourni.</p>
  }

  // Plain string: render as text, but if it looks like HTML, render as HTML
  if (typeof content === 'string') {
    if (/<[^>]+>/.test(content)) {
      return (
        <div
          className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-white/80 prose-strong:text-white prose-a:text-core-electric"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )
    }
    return <p className="whitespace-pre-line text-lg leading-7 text-white/80">{content}</p>
  }

  if (typeof content === 'object' && content) {
    const obj = content as Record<string, unknown>
    if ('html' in obj) {
      const html = String(obj.html)
      return (
        <div
          className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-white/80 prose-strong:text-white prose-a:text-core-electric"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )
    }
    if ('raw' in obj && typeof obj.raw === 'string') {
      const raw = obj.raw as string
      if (/<[^>]+>/.test(raw)) {
        return (
          <div
            className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-white/80 prose-strong:text-white prose-a:text-core-electric"
            dangerouslySetInnerHTML={{ __html: raw }}
          />
        )
      }
      return <p className="whitespace-pre-line text-lg leading-7 text-white/80">{raw}</p>
    }
  }

  const pretty = JSON.stringify(content, null, 2)
  return (
    <pre className="overflow-x-auto rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
      {pretty}
    </pre>
  )
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const resolvedParams = (await Promise.resolve(params)) as { slug: string }
  const slug = resolvedParams.slug

  let post: Post | null = null
  try {
    post = await getPostBySlug(slug)
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('BlogPostPage getPostBySlug error:', err)
    notFound()
  }

  if (!post) {
    notFound()
  }

  const cover = imageUrlFromPath(post.cover_image_path)

  return (
    <article className="px-6 py-16 md:py-20">
      <div className="mx-auto flex max-w-4xl flex-col gap-10">
        <div className="space-y-4">
          <Link href="/blog" className="text-sm text-core-electric transition hover:text-white">
            ← Back to blog
          </Link>
          <h1 className="text-4xl font-semibold text-white md:text-5xl">{post.title}</h1>
          <p className="text-white/60">{formatDate(post.published_at)}</p>
          {post.excerpt && <p className="text-lg text-white/70">{post.excerpt}</p>}
        </div>

        {cover && (
          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <Image
              src={cover}
              alt={post.cover_image_alt ?? post.title}
              width={1400}
              height={720}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        )}

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
          <div className="space-y-6 text-white/80">{renderContent(post.content)}</div>
        </div>
      </div>
    </article>
  )
}
