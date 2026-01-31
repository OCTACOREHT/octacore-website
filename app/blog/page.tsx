import Link from 'next/link'
import { supabaseClient } from '@/lib/supabaseClient'

const supabaseStorageUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/`
  : ''

type PostSummary = {
  id: string
  title: string
  slug: string
  excerpt: string | null
  published_at: string | null
  cover_image_path: string | null
  cover_image_alt: string | null
}

const formatDate = (value: string | null) =>
  value
    ? new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date(value))
    : 'Coming soon'

const imageUrlFromPath = (path: string | null) =>
  path && supabaseStorageUrl ? `${supabaseStorageUrl}${path}` : null

async function fetchPublishedPosts(): Promise<PostSummary[]> {
  const { data, error } = await supabaseClient
    .from('posts')
    .select('id,title,slug,excerpt,published_at,cover_image_path,cover_image_alt')
    .eq('status', 'published')
    .order('published_at', { ascending: false })

  if (error) {
    console.error('[blog] failed to load posts', error.message)
    return []
  }

  return data ?? []
}

export const revalidate = 120

export default async function BlogPage() {
  const posts = await fetchPublishedPosts()

  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">Octacore Insights</p>
            <h1 className="text-4xl font-semibold text-white md:text-5xl">Blog</h1>
            <p className="max-w-3xl text-white/70">
              Articles published by the Octacore team: architecture, security, productivity and experience feedback.
            </p>
          </div>
        </header>

        {posts.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-10 text-center text-white/80 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            No articles published yet. Come back soon!
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const cover = imageUrlFromPath(post.cover_image_path)
              return (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 via-white/5 to-transparent p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:border-core-electric/70"
                >
                  <div className="flex flex-col gap-4">
                    <div className="relative h-56 md:h-64 overflow-hidden rounded-xl border border-white/10 bg-white/3">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 transition group-hover:opacity-80" />
                      {cover ? (
                        <img
                          src={cover}
                          alt={post.cover_image_alt ?? post.title}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-white/60 p-4">
                          <div className="text-center">
                            <div className="mb-2 text-sm uppercase">Image not provided</div>
                            <div className="text-xs">{post.cover_image_alt ?? post.title}</div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-[0.18em] text-white/60">{formatDate(post.published_at)}</p>
                      <h2 className="text-xl font-semibold text-white transition group-hover:text-core-electric">{post.title}</h2>
                      {post.excerpt && <p className="text-sm text-white/70">{post.excerpt}</p>}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-core-electric">
                      <span className="h-px w-6 bg-core-electric/60" />
                      Read article
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
