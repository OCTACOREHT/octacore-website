'use client'

import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react'

type PostStatus = 'draft' | 'published'

type PostRow = {
  id: string
  title: string
  slug: string
  excerpt: string | null
  status: PostStatus
  published_at: string | null
  updated_at: string
  created_at: string
  cover_image_path: string | null
  cover_image_alt: string | null
  content: unknown
}

const inputStyle: CSSProperties = {
  width: '100%',
  padding: '12px 14px',
  borderRadius: 12,
  border: '1px solid rgba(255,255,255,0.12)',
  background: 'rgba(255,255,255,0.04)',
  color: 'white',
  outline: 'none',
}

const textareaStyle: CSSProperties = {
  ...inputStyle,
  minHeight: 140,
  resize: 'vertical',
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: 13,
}

const primaryButton = (enabled: boolean): CSSProperties => ({
  padding: '10px 16px',
  borderRadius: 12,
  background: enabled ? '#0030FF' : 'rgba(0,48,255,0.25)',
  border: 'none',
  color: 'white',
  cursor: enabled ? 'pointer' : 'not-allowed',
  fontWeight: 700,
  boxShadow: enabled ? '0 8px 30px rgba(0,48,255,0.12)' : undefined,
})

const ghostButton: CSSProperties = {
  padding: '10px 14px',
  borderRadius: 12,
  border: '1px solid rgba(255,255,255,0.18)',
  background: 'transparent',
  color: 'white',
  cursor: 'pointer',
}

const dangerButton: CSSProperties = {
  ...ghostButton,
  borderColor: 'rgba(248,113,113,0.5)',
  color: '#fecaca',
}

const toolbarButton: CSSProperties = {
  border: '1px solid rgba(0,0,0,0.08)',
  background: 'white',
  color: '#1f2937',
  padding: '6px 8px',
  borderRadius: 6,
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
  fontSize: 13,
}

function fmt(date?: string | null) {
  if (!date) return ''
  try {
    return new Date(date).toLocaleString()
  } catch {
    return date
  }
}

function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
}) {
  return (
    <div>
      <label style={{ display: 'block', fontSize: 13, opacity: 0.85, marginBottom: 6 }}>{label}</label>
      <input value={value} onChange={(e) => onChange(e.target.value)} style={inputStyle} placeholder={placeholder} />
    </div>
  )
}

export default function AdminPage() {
  const [adminSecret, setAdminSecret] = useState('')
  const [unlocked, setUnlocked] = useState(false)
  const [posts, setPosts] = useState<PostRow[]>([])
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [selected, setSelected] = useState<PostRow | null>(null)

  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [status, setStatus] = useState<PostStatus>('draft')
  const [coverPath, setCoverPath] = useState('')
  const [coverAlt, setCoverAlt] = useState('')
  const [contentText, setContentText] = useState('') // stored as HTML string

  const editorRef = useRef<HTMLDivElement | null>(null)
  const toolbarFileInputRef = useRef<HTMLInputElement | null>(null)

  const apiBase = useMemo(() => '/api/admin/posts', [])
  const canUse = adminSecret.trim().length > 0

  useEffect(() => {
    // Hide global header/footer for this admin workspace
    document.body.classList.add('admin-solo')
    return () => {
      document.body.classList.remove('admin-solo')
    }
  }, [])

  const setEditorHtml = (html: string) => {
    setContentText(html)
    if (editorRef.current) {
      editorRef.current.innerHTML = html
    }
  }

  const resetForm = () => {
    setSelected(null)
    setTitle('')
    setSlug('')
    setExcerpt('')
    setStatus('draft')
    setCoverPath('')
    setCoverAlt('')
    setEditorHtml('')
  }

  const loadIntoForm = (p: PostRow) => {
    setSelected(p)
    setTitle(p.title ?? '')
    setSlug(p.slug ?? '')
    setExcerpt(p.excerpt ?? '')
    setStatus(p.status)
    setCoverPath(p.cover_image_path ?? '')
    setCoverAlt(p.cover_image_alt ?? '')

    const c = p.content
    if (c && typeof c === 'object') {
      const obj = c as Record<string, unknown>
      if ('html' in obj && typeof obj.html === 'string') {
        setEditorHtml(obj.html)
        return
      }
      if ('raw' in obj && typeof obj.raw === 'string') {
        setEditorHtml(obj.raw)
        return
      }
    }
    if (typeof c === 'string') {
      setEditorHtml(c)
    } else {
      setEditorHtml('')
    }
  }

  const refresh = async () => {
    if (!canUse) return
    setLoading(true)
    setMessage(null)
    try {
      const res = await fetch(`${apiBase}?adminSecret=${encodeURIComponent(adminSecret)}`)
      const json = await res.json()
      if (!res.ok) throw new Error(json?.error ?? 'Erreur')
      setPosts(json.data ?? [])
      setMessage('✅ Articles chargés')
      setUnlocked(true)
    } catch (e: any) {
      setMessage(e?.message ?? 'Erreur')
    } finally {
      setLoading(false)
    }
  }

  const supabaseStorageUrl = typeof window !== 'undefined' && process.env.NEXT_PUBLIC_SUPABASE_URL ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/` : (process.env.NEXT_PUBLIC_SUPABASE_URL ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/` : '')

  const autoSlug = (value: string) =>
    value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')

  const exec = (cmd: string, value?: string) => {
    document.execCommand(cmd, false, value)
    setContentText(editorRef.current?.innerHTML ?? '')
  }

  const insertLink = () => {
    const url = window.prompt('URL du lien ?')
    if (!url) return
    exec('createLink', url)
    // after creating the link, ensure it is styled visibly in the editor
    setTimeout(() => {
      styleEditorLinks()
    }, 0)
  }

  function styleEditorLinks() {
    try {
      const root = editorRef.current
      if (!root) return
      const anchors = root.querySelectorAll('a')
      anchors.forEach((a) => {
        ;(a as HTMLAnchorElement).style.color = '#2382FF'
        ;(a as HTMLAnchorElement).style.textDecoration = 'underline'
      })
    } catch (e) {
      // noop
    }
  }

  const insertImageFromUpload = async (file: File) => {
    if (!adminSecret) {
      setMessage('Ajoute le mot de passe avant upload.')
      return
    }
    setLoading(true)
    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('adminSecret', adminSecret)
      const res = await fetch('/api/admin/upload', { method: 'POST', body: formData })
      const json = await res.json()
      if (!res.ok) throw new Error(json?.error ?? 'Upload échoué')
      const url = json.publicUrl as string
      exec('insertImage', url)
      setMessage('✅ Image uploadée')
    } catch (e: any) {
      setMessage(e?.message ?? 'Erreur upload')
    } finally {
      setLoading(false)
    }
  }

  const uploadCoverImage = async (file: File) => {
    if (!adminSecret) {
      setMessage('Ajoute le mot de passe avant upload.')
      return
    }
    setLoading(true)
    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('adminSecret', adminSecret)
      const res = await fetch('/api/admin/upload', { method: 'POST', body: formData })
      const json = await res.json()
      if (!res.ok) throw new Error(json?.error ?? 'Upload échoué')
      const path = json.path as string
      const publicUrl = json.publicUrl as string
      setCoverPath(path)
      // set a sensible default alt if empty
      if (!coverAlt) setCoverAlt(file.name)
      setMessage('✅ Cover uploadée')
      // Optionally show preview by inserting into editor? we just set path
    } catch (e: any) {
      setMessage(e?.message ?? 'Erreur upload')
    } finally {
      setLoading(false)
    }
  }

  const submit = async (mode: 'create' | 'update') => {
    setLoading(true)
    setMessage(null)
    const payload = {
      adminSecret,
      id: selected?.id,
      title,
      slug,
      excerpt,
      status,
      cover_image_path: coverPath,
      cover_image_alt: coverAlt,
      content: contentText, // HTML string
    }
    const method = mode === 'create' ? 'POST' : 'PUT'
    try {
      const res = await fetch(apiBase, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json?.error ?? 'Erreur')
      setMessage(mode === 'create' ? '✅ Article créé' : '✅ Article mis à jour')
      resetForm()
      await refresh()
    } catch (e: any) {
      setMessage(e?.message ?? 'Erreur')
    } finally {
      setLoading(false)
    }
  }

  const deletePost = async () => {
    if (!selected) return
    setLoading(true)
    setMessage(null)
    try {
      const res = await fetch(apiBase, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ adminSecret, id: selected.id }),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json?.error ?? 'Erreur')
      setMessage('🗑️ Article supprimé')
      resetForm()
      await refresh()
    } catch (e: any) {
      setMessage(e?.message ?? 'Erreur')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0b0f19', color: 'white' }}>
      <style jsx global>{`
        body.admin-solo {
          background: #0b0f19;
        }
        body.admin-solo header,
        body.admin-solo footer {
          display: none !important;
        }
        body.admin-solo main {
          padding-top: 0;
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: 28, fontWeight: 700 }}>Octacore Admin</h1>
            <p style={{ opacity: 0.8, marginTop: 6 }}>
              Blog:{' '}
              <a href="/blog" style={{ textDecoration: 'underline', color: '#7dd3fc' }}>
                /blog
              </a>
            </p>
          </div>

          <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
            <input
              type="password"
              placeholder="Admin code"
              value={adminSecret}
              onChange={(e) => setAdminSecret(e.target.value)}
              style={{ ...inputStyle, width: 240 }}
            />
            <button
              onClick={refresh}
              disabled={!canUse || loading}
              style={{
                padding: '10px 14px',
                borderRadius: 12,
                background: canUse ? '#4f46e5' : 'rgba(79,70,229,0.4)',
                border: 'none',
                color: 'white',
                cursor: canUse ? 'pointer' : 'not-allowed',
              }}
            >
              {loading ? '...' : unlocked ? 'Rafraîchir' : 'Déverrouiller'}
            </button>
          </div>
        </div>

        {message ? (
          <div style={{ marginTop: 14, padding: 12, borderRadius: 12, background: 'rgba(255,255,255,0.06)' }}>{message}</div>
        ) : null}

        {!unlocked ? (
          <div style={{ marginTop: 18, padding: 14, borderRadius: 12, border: '1px solid rgba(255,255,255,0.08)' }}>
            Entre le code admin puis clique Déverrouiller.
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 20, marginTop: 22, alignItems: 'start' }}>
            {/* FORM */}
            <div
              style={{
                padding: 20,
                borderRadius: 18,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 10px 30px rgba(2,6,23,0.6)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                <h2 style={{ fontSize: 18, fontWeight: 650 }}>{selected ? 'Modifier un article' : 'Créer un article'}</h2>
                {selected ? (
                  <div style={{ display: 'flex', gap: 10 }}>
                    <button onClick={resetForm} disabled={loading} style={ghostButton}>
                      Nouveau
                    </button>
                    <button onClick={deletePost} disabled={loading} style={dangerButton}>
                      Supprimer
                    </button>
                  </div>
                ) : null}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 12 }}>
                <Field
                  label="Title"
                  value={title}
                  onChange={(v) => {
                    setTitle(v)
                    if (!slug) setSlug(autoSlug(v))
                  }}
                  placeholder="Cybersecurity"
                />
                <Field label="Slug" value={slug} onChange={(v) => setSlug(autoSlug(v))} placeholder="mon-article" />
              </div>

              <div style={{ marginTop: 12 }}>
                <label style={{ display: 'block', fontSize: 13, opacity: 0.85, marginBottom: 6 }}>Excerpt</label>
                <textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} rows={2} style={textareaStyle} placeholder="Résumé pour le SEO" />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 12 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 13, opacity: 0.85, marginBottom: 6 }}>Statut</label>
                  <select value={status} onChange={(e) => setStatus(e.target.value as PostStatus)} style={inputStyle}>
                    <option value="draft">Brouillon</option>
                    <option value="published">Publié</option>
                  </select>
                  <div style={{ fontSize: 12, opacity: 0.75, marginTop: 6 }}>
                    Si publié sans date, l’API ajoute <code>published_at=now()</code>.
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 13, opacity: 0.85, marginBottom: 6 }}>Cover image path</label>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <input value={coverPath} onChange={(e) => setCoverPath(e.target.value)} style={inputStyle} placeholder="cms/covers/mon-image.jpg" />
                    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                      <div style={{ padding: '8px 10px', borderRadius: 10, background: 'rgba(255,255,255,0.08)', color: 'white', border: '1px solid rgba(255,255,255,0.06)' }}>
                        Upload
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={(e) => {
                          const f = e.target.files?.[0]
                          if (f) uploadCoverImage(f)
                        }}
                      />
                    </label>
                  </div>
                  <div style={{ fontSize: 12, opacity: 0.75, marginTop: 6 }}>
                    Tu peux soit coller le chemin (ex: <code>cms/covers/mon-image.jpg</code>), soit uploader une image ici.
                  </div>

                  {coverPath ? (
                    <div style={{ marginTop: 8, display: 'flex', gap: 8, alignItems: 'center' }}>
                      <div style={{ width: 160, height: 90, overflow: 'hidden', borderRadius: 8, border: '1px solid rgba(255,255,255,0.06)' }}>
                        <img
                          src={supabaseStorageUrl ? `${supabaseStorageUrl}${coverPath}` : coverPath}
                          alt={coverAlt || 'cover preview'}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                      </div>
                      <div>
                        <div style={{ fontSize: 13 }}>{coverPath}</div>
                        <div style={{ marginTop: 6 }}>
                          <button
                            type="button"
                            onClick={() => {
                              setCoverPath('')
                              setCoverAlt('')
                            }}
                            style={{ ...ghostButton, padding: '6px 8px' }}
                          >
                            Supprimer
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>

              <div style={{ marginTop: 12 }}>
                <Field label="Cover alt" value={coverAlt} onChange={setCoverAlt} placeholder="Description accessibilité" />
              </div>

              {/* Toolbar + editor */}
              <div style={{ marginTop: 14 }}>
                <p style={{ fontSize: 13, opacity: 0.85, marginBottom: 6 }}>Contenu (éditeur riche)</p>
                <div
                  style={{
                    display: 'flex',
                    gap: 6,
                    flexWrap: 'wrap',
                    padding: 8,
                    background: '#f3f4f6',
                    borderRadius: 10,
                    marginBottom: 8,
                  }}
                >
                  <button style={toolbarButton} type="button" onMouseDown={(e) => { e.preventDefault(); exec('bold') }}>
                    <b>B</b>
                  </button>
                  <button style={toolbarButton} type="button" onMouseDown={(e) => { e.preventDefault(); exec('italic') }}>
                    <i>I</i>
                  </button>
                  <button style={toolbarButton} type="button" onMouseDown={(e) => { e.preventDefault(); exec('underline') }}>
                    <u>U</u>
                  </button>
                  <button style={toolbarButton} type="button" onMouseDown={(e) => { e.preventDefault(); exec('insertUnorderedList') }}>
                    • Liste
                  </button>
                  <button style={toolbarButton} type="button" onMouseDown={(e) => { e.preventDefault(); exec('insertOrderedList') }}>
                    1. Liste
                  </button>
                  <button style={toolbarButton} type="button" onMouseDown={(e) => { e.preventDefault(); exec('justifyLeft') }}>
                    ↤
                  </button>
                  <button style={toolbarButton} type="button" onMouseDown={(e) => { e.preventDefault(); exec('justifyCenter') }}>
                    ↔
                  </button>
                  <button style={toolbarButton} type="button" onMouseDown={(e) => { e.preventDefault(); exec('justifyRight') }}>
                    ↦
                  </button>
                  <button style={toolbarButton} type="button" onMouseDown={(e) => { e.preventDefault(); insertLink() }}>
                    🔗
                  </button>
                  <button
                    type="button"
                    onMouseDown={(e) => { e.preventDefault(); toolbarFileInputRef.current?.click() }}
                    style={{ ...toolbarButton, marginBottom: 0 }}
                    aria-label="Uploader une image"
                  >
                    🖼️
                  </button>
                  <input
                    ref={toolbarFileInputRef}
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={(e) => {
                      const f = e.target.files?.[0]
                      if (f) insertImageFromUpload(f)
                      // reset value so same file can be re-selected later
                      if (toolbarFileInputRef.current) toolbarFileInputRef.current.value = ''
                    }}
                  />
                  <button
                    style={toolbarButton}
                    type="button"
                    onMouseDown={(e) => {
                      e.preventDefault()
                      const url = window.prompt('URL image ?')
                      if (url) exec('insertImage', url)
                    }}
                  >
                    URL 🖼️
                  </button>
                  <button style={toolbarButton} type="button" onMouseDown={(e) => { e.preventDefault(); exec('undo') }}>
                    ↺
                  </button>
                  <button style={toolbarButton} type="button" onMouseDown={(e) => { e.preventDefault(); exec('redo') }}>
                    ↻
                  </button>
                </div>
                <div
                  ref={editorRef}
                  contentEditable
                  suppressContentEditableWarning
                  onInput={(e) => {
                    setContentText((e.target as HTMLDivElement).innerHTML)
                    // style links on any change
                    styleEditorLinks()
                  }}
                  style={{
                    background: 'white',
                    color: '#111827',
                    minHeight: 420,
                    padding: 18,
                    borderRadius: 12,
                    boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.06)',
                    lineHeight: 1.65,
                    fontSize: 15,
                    overflow: 'auto',
                  }}
                />
                <div style={{ fontSize: 12, opacity: 0.7, marginTop: 6 }}>
                  Le HTML est sauvegardé tel quel (gras, listes, liens, images). Rendu public via `dangerouslySetInnerHTML` sur la page article.
                </div>
              </div>

              <div style={{ display: 'flex', gap: 10, marginTop: 14, flexWrap: 'wrap' }}>
                {!selected ? (
                  <button onClick={() => submit('create')} disabled={!canUse || loading} style={primaryButton(canUse && !loading)}>
                    Créer
                  </button>
                ) : (
                  <button onClick={() => submit('update')} disabled={!canUse || loading} style={primaryButton(canUse && !loading)}>
                    Mettre à jour
                  </button>
                )}

                <a
                  href="/blog"
                  style={{
                    padding: '10px 14px',
                    borderRadius: 12,
                    border: '1px solid rgba(255,255,255,0.18)',
                    textDecoration: 'none',
                    color: 'white',
                    display: 'inline-flex',
                    alignItems: 'center',
                  }}
                >
                  Voir le blog
                </a>
              </div>
            </div>

            {/* LIST / SIDEBAR */}
            <aside
              style={{
                padding: 16,
                borderRadius: 16,
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
                maxHeight: 'calc(100vh - 220px)',
                overflowY: 'auto',
                position: 'sticky',
                top: 100,
              }}
            >
              <h2 style={{ fontSize: 18, fontWeight: 650 }}>Articles</h2>
              <p style={{ marginTop: 6, opacity: 0.75, fontSize: 13 }}>Cliquer pour éditer. (Drafts + published)</p>

              <div style={{ marginTop: 12, display: 'grid', gap: 10 }}>
                {posts.length === 0 ? (
                  <div style={{ opacity: 0.8, fontSize: 13 }}>
                    {canUse ? 'Aucun article (ou pas chargé).' : 'Entre le mot de passe admin et clique Déverrouiller.'}
                  </div>
                ) : null}

                {posts.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => loadIntoForm(p)}
                    style={{
                      textAlign: 'left',
                      padding: 12,
                      borderRadius: 12,
                      background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))',
                      border: '1px solid rgba(255,255,255,0.04)',
                      color: 'white',
                      cursor: 'pointer',
                      display: 'block'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
                      <div style={{ fontWeight: 650 }}>{p.title}</div>
                      <div style={{ fontSize: 12, opacity: 0.8 }}>{p.status === 'published' ? '✅ publié' : '📝 draft'}</div>
                    </div>
                    <div style={{ marginTop: 6, fontSize: 12, opacity: 0.75 }}>
                      <code>/blog/{p.slug}</code>
                    </div>
                    <div style={{ marginTop: 6, fontSize: 12, opacity: 0.7 }}>
                      update: {fmt(p.updated_at)} {p.published_at ? `• publish: ${fmt(p.published_at)}` : ''}
                    </div>
                  </button>
                ))}
              </div>
            </aside>
          </div>
        )}

        <div style={{ marginTop: 18, opacity: 0.65, fontSize: 12 }}>
          Lien admin: <code>http://localhost:3000/admin</code> • Blog: <code>http://localhost:3000/blog</code>
        </div>
      </div>
    </div>
  )
}
