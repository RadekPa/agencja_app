'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

type Author = { 
  id: number
  firstName?: string | null
  middleName?: string | null
  lastName?: string | null
  fullName?: string | null
  suffix?: string | null
  penName?: string | null
  remarks?: string | null
  dateMod?: string | null
  userMod?: string | null
}

export default function AuthorDetailPage() {
  const params = useParams()
  const id = Number(params.id)
  const [author, setAuthor] = useState<Author | null>(null)
  const [formErrors, setFormErrors] = useState<string[]>([])
  const [editMode, setEditMode] = useState(false)

  const loadAuthor = async () => {
    const res = await fetch(`/api/authors/${id}`)
    const data = await res.json()
    setAuthor(data)
  }

  useEffect(() => { 
    if (id) loadAuthor() 
  }, [id])

  const updateAuthor = async () => {
    if (!author) return
    setFormErrors([])
    await fetch(`/api/authors/${id}`, { 
      method: 'PUT', 
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify({
        firstName: author.firstName,
        middleName: author.middleName,
        lastName: author.lastName,
        fullName: author.fullName,
        suffix: author.suffix,
        penName: author.penName,
        remarks: author.remarks,
      })
    })
    await loadAuthor()
    setEditMode(false)
  }

  if (!author) return <p className="text-center text-muted-foreground py-8">Ładowanie...</p>

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Szczegóły autora</h1>
          <div className="flex gap-2">
            <Button variant="secondary" onClick={() => window.history.back()}>
              Powrót
            </Button>
            {!editMode ? (
              <Button variant="primary" onClick={() => setEditMode(true)}>
                Edytuj
              </Button>
            ) : (
              <>
                <Button variant="secondary" onClick={() => { setEditMode(false); loadAuthor() }}>
                  Anuluj
                </Button>
                <Button variant="primary" onClick={updateAuthor}>
                  Zapisz
                </Button>
              </>
            )}
          </div>
        </div>

        {formErrors.length > 0 && (
          <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 rounded">
            <ul className="list-disc list-inside text-sm text-red-600 dark:text-red-400">
              {formErrors.map((e, i) => (<li key={i}>{e}</li>))}
            </ul>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Podstawowe dane */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Podstawowe dane
            </h3>
            <div>
              <label className="label text-xs">ID</label>
              <div className="text-sm font-medium">{author.id}</div>
            </div>
            <div>
              <label className="label text-xs">Pełne imię i nazwisko</label>
              {editMode ? (
                <Input value={author.fullName || ''} onChange={e => setAuthor({ ...author, fullName: e.target.value })} />
              ) : (
                <div className="text-sm font-medium">{author.fullName || '-'}</div>
              )}
            </div>
            <div>
              <label className="label text-xs">Imię</label>
              {editMode ? (
                <Input value={author.firstName || ''} onChange={e => setAuthor({ ...author, firstName: e.target.value })} />
              ) : (
                <div className="text-sm font-medium">{author.firstName || '-'}</div>
              )}
            </div>
            <div>
              <label className="label text-xs">Drugie imię</label>
              {editMode ? (
                <Input value={author.middleName || ''} onChange={e => setAuthor({ ...author, middleName: e.target.value })} />
              ) : (
                <div className="text-sm font-medium">{author.middleName || '-'}</div>
              )}
            </div>
            <div>
              <label className="label text-xs">Nazwisko</label>
              {editMode ? (
                <Input value={author.lastName || ''} onChange={e => setAuthor({ ...author, lastName: e.target.value })} />
              ) : (
                <div className="text-sm font-medium">{author.lastName || '-'}</div>
              )}
            </div>
            <div>
              <label className="label text-xs">Sufiks</label>
              {editMode ? (
                <Input value={author.suffix || ''} onChange={e => setAuthor({ ...author, suffix: e.target.value })} />
              ) : (
                <div className="text-sm font-medium">{author.suffix || '-'}</div>
              )}
            </div>
          </div>

          {/* Informacje dodatkowe */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Informacje dodatkowe
            </h3>
            <div>
              <label className="label text-xs">Pseudonim</label>
              {editMode ? (
                <Input value={author.penName || ''} onChange={e => setAuthor({ ...author, penName: e.target.value })} />
              ) : (
                <div className="text-sm font-medium">{author.penName || '-'}</div>
              )}
            </div>
            <div>
              <label className="label text-xs">Uwagi</label>
              {editMode ? (
                <Input value={author.remarks || ''} onChange={e => setAuthor({ ...author, remarks: e.target.value })} />
              ) : (
                <div className="text-sm font-medium">{author.remarks || '-'}</div>
              )}
            </div>
          </div>

          {/* Metadane */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Metadane
            </h3>
            <div>
              <label className="label text-xs">Data modyfikacji</label>
              <div className="text-sm font-medium">
                {author.dateMod ? new Intl.DateTimeFormat('pl-PL', { 
                  year: 'numeric', 
                  month: '2-digit', 
                  day: '2-digit', 
                  hour: '2-digit', 
                  minute: '2-digit' 
                }).format(new Date(author.dateMod)) : '-'}
              </div>
            </div>
            <div>
              <label className="label text-xs">Modyfikował</label>
              <div className="text-sm font-medium">{author.userMod || '-'}</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
