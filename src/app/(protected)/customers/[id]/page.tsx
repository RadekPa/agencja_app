 'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, Th, Td } from '../../../../components/ui/Table'
import { Pagination } from '../../../../components/ui/Pagination'
import { ClientUpdateSchema } from '../../../../validation/client'

type Client = { 
  id: number
  name: string
  email?: string | null
  phone?: string | null
  address?: string | null
  city?: string | null
  postalCode?: string | null
  country?: string | null
  nip?: string | null
  regon?: string | null
  legalForm?: string | null
  bankAccount?: string | null
  notes?: string | null
  createdAt: string
  updatedAt: string
}


type Author = { 
  id: number
  firstName: string
  middleName?: string | null
  lastName: string
  workEmail?: string | null
  personalEmail?: string | null
  description?: string | null
}

type Meta = { page: number; pageSize: number; total: number; pages: number }

type ListResponse<T> = { data: T[]; meta: Meta }

export default function ClientDetailPage() {
  const params = useParams()
  const id = Number(params.id)
  const [client, setClient] = useState<Client | null>(null)
  const [activeTab, setActiveTab] = useState<'invoices' | 'authors'>('invoices')

  const [docs, setDocs] = useState<Document[]>([])
  const [meta, setMeta] = useState<Meta>({ page: 1, pageSize: 10, total: 0, pages: 1 })
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState<''|'DRAFT'|'SIGNED'>('')
  const [sortBy, setSortBy] = useState<'id'|'title'|'status'|'createdAt'>('createdAt')
  const [sortOrder, setSortOrder] = useState<'asc'|'desc'>('desc')
  const [pageSize, setPageSize] = useState(10)

  const [formClientErrors, setFormClientErrors] = useState<string[]>([])
  const [formDocErrors, setFormDocErrors] = useState<string[]>([])
  const [formDoc, setFormDoc] = useState({ title: '', description: '', status: 'DRAFT' as 'DRAFT'|'SIGNED' })
  const [editMode, setEditMode] = useState(false)
  
  // invoices
  const [invoicesType, setInvoicesType] = useState<'issued'|'planned'>('issued')
  const [invoices, setInvoices] = useState<any[]>([])
  
  // authors
  const [authors, setAuthors] = useState<Author[]>([])
  const [availableAuthors, setAvailableAuthors] = useState<Author[]>([])
  const [filteredAuthors, setFilteredAuthors] = useState<Author[]>([])
  const [selectedAuthorId, setSelectedAuthorId] = useState<number | null>(null)
  const [authorSearchQuery, setAuthorSearchQuery] = useState('')
  const [authorsLoading, setAuthorsLoading] = useState(false)
  
  const loadInvoices = async (type: 'issued'|'planned' = invoicesType) => {
    const res = await fetch(`/api/customers/${id}/invoices?type=${type}`)
    if (!res.ok) { setInvoices([]); return }
    const json = await res.json()
    setInvoices(Array.isArray(json?.data) ? json.data : (json?.data ?? []))
  }
  
  const loadAuthors = async () => {
    setAuthorsLoading(true)
    try {
      const res = await fetch(`/api/customers/${id}/authors`)
      if (res.ok) {
        const json = await res.json()
        setAuthors(Array.isArray(json?.data) ? json.data : [])
      }
    } finally {
      setAuthorsLoading(false)
    }
  }
  
  const loadAvailableAuthors = async () => {
    try {
      const res = await fetch('/api/contacts?pageSize=1000')
      if (res.ok) {
        const json = await res.json()
        const allAuthors = Array.isArray(json?.data) ? json.data : []
        // Pokaż tylko kontakty, które nie są przypisane do żadnego klienta
        setAvailableAuthors(allAuthors.filter((a: any) => !a.client))
      }
    } catch (error) {
      console.error('Error loading available authors:', error)
    }
  }
  
  const assignAuthor = async () => {
    if (!selectedAuthorId) return
    
    try {
      const res = await fetch(`/api/customers/${id}/authors`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ authorId: selectedAuthorId })
      })
      
      if (res.ok) {
        await loadAuthors()
        await loadAvailableAuthors()
        setSelectedAuthorId(null)
        setAuthorSearchQuery('')
      } else {
        const error = await res.json()
        alert(error.error || 'Nie udało się przypisać kontaktu')
      }
    } catch (error) {
      console.error('Error assigning author:', error)
      alert('Wystąpił błąd podczas przypisywania kontaktu')
    }
  }
  
  const unassignAuthor = async (authorId: number) => {
    if (!confirm('Czy na pewno chcesz odpiąć ten kontakt od klienta?')) return
    
    try {
      const res = await fetch(`/api/customers/${id}/authors?authorId=${authorId}`, {
        method: 'DELETE'
      })
      
      if (res.ok) {
        await loadAuthors()
        await loadAvailableAuthors()
      }
    } catch (error) {
      console.error('Error unassigning author:', error)
    }
  }


  const loadClient = async () => {
    const resClient = await fetch(`/api/customers/${id}`)
    const c = await resClient.json()
    setClient(c)
  }

  const loadDocs = async (page = meta.page) => {
    setLoading(true)
    const qs = new URLSearchParams({
      search,
      status,
      page: String(page),
      pageSize: String(pageSize),
      sortBy,
      sortOrder
    })
    const resDocs = await fetch(`/api/customers/${id}/documents?${qs.toString()}`)
    const d = await resDocs.json()
    console.debug('[ClientDocs] fetch response:', { type: Array.isArray(d) ? 'array' : typeof d, d })
    if (Array.isArray(d)) {
      setDocs(d)
      const total = d.length
      setMeta({ page, pageSize, total, pages: Math.max(1, Math.ceil(total / pageSize)) })
    } else {
      const arr = Array.isArray(d?.data) ? d.data : []
      setDocs(arr)
      const metaFromServer = d?.meta
      const total = metaFromServer?.total ?? arr.length
      const pages = metaFromServer?.pages ?? Math.max(1, Math.ceil(total / pageSize))
      setMeta(metaFromServer ?? { page, pageSize, total, pages })
    }
    setLoading(false)
  }

  useEffect(() => { if (id) { loadClient(); loadDocs(1); loadAuthors(); loadAvailableAuthors() } }, [id])
  useEffect(()=>{ if (id) loadInvoices(invoicesType) }, [id, invoicesType])
  useEffect(() => { loadDocs(1) }, [search, status, sortBy, sortOrder, pageSize])
  
  // Filtruj dostępne kontakty na podstawie wyszukiwania
  useEffect(() => {
    if (!authorSearchQuery.trim()) {
      setFilteredAuthors(availableAuthors)
    } else {
      const query = authorSearchQuery.toLowerCase()
      const filtered = availableAuthors.filter(author => {
        const fullName = `${author.firstName} ${author.middleName || ''} ${author.lastName}`.toLowerCase()
        const email = `${author.workEmail || ''} ${author.personalEmail || ''}`.toLowerCase()
        return fullName.includes(query) || email.includes(query)
      })
      setFilteredAuthors(filtered)
    }
  }, [authorSearchQuery, availableAuthors])

  const addDoc = async () => {
    if (!parsed.success) {
      setFormDocErrors(parsed.error.errors.map(e=>e.message))
      return
    }
    setFormDocErrors([])
    await fetch(`/api/customers/${id}/documents`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(parsed.data) })
    setFormDoc({ title: '', description: '', status: 'DRAFT' })
    await loadDocs(1)
  }

  const removeDoc = async (docId: number) => {
    await fetch(`/api/documents/${docId}`, { method: 'DELETE' })
    await loadDocs(meta.page)
  }

  const updateClient = async () => {
    if (!client) return
    const parsed = ClientUpdateSchema.safeParse({ 
      name: client.name, 
      email: client.email ?? '', 
      phone: client.phone ?? '',
      address: client.address ?? '',
      city: client.city ?? '',
      postalCode: client.postalCode ?? '',
      country: client.country ?? '',
      nip: client.nip ?? '',
      regon: client.regon ?? '',
      legalForm: client.legalForm ?? '',
      bankAccount: client.bankAccount ?? '',
      notes: client.notes ?? ''
    })
    if (!parsed.success) {
      setFormClientErrors(parsed.error.errors.map(e=>e.message))
      return
    }
    setFormClientErrors([])
    await fetch(`/api/customers/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(parsed.data) })
    await loadClient()
    setEditMode(false)
  }

  const toggleSort = (col: typeof sortBy) => {
    if (sortBy !== col) { setSortBy(col); setSortOrder('asc') } else { setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc') }
  }

  if (!client) return <p className="text-center text-muted-foreground py-8">Ładowanie...</p>

  return (
    <div className="space-y-6">
      {/* Client Details Card - Read Only */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Szczegóły klienta</h1>
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
                <Button variant="secondary" onClick={() => { setEditMode(false); loadClient() }}>
                  Anuluj
                </Button>
                <Button variant="primary" onClick={updateClient}>
                  Zapisz
                </Button>
              </>
            )}
          </div>
        </div>

        {formClientErrors.length > 0 && (
          <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 rounded">
            <ul className="list-disc list-inside text-sm text-red-600 dark:text-red-400">
              {formClientErrors.map((e, i) => (<li key={i}>{e}</li>))}
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
              <label className="label text-xs">Nazwa</label>
              {editMode ? (
                <Input value={client.name} onChange={e => setClient({ ...client, name: e.target.value })} />
              ) : (
                <p className="text-base font-medium">{client.name}</p>
              )}
            </div>
            <div>
              <label className="label text-xs">Email</label>
              {editMode ? (
                <Input value={client.email ?? ''} onChange={e => setClient({ ...client, email: e.target.value })} />
              ) : (
                <p className="text-base">{client.email || '-'}</p>
              )}
            </div>
            <div>
              <label className="label text-xs">Telefon</label>
              {editMode ? (
                <Input value={client.phone ?? ''} onChange={e => setClient({ ...client, phone: e.target.value })} />
              ) : (
                <p className="text-base">{client.phone || '-'}</p>
              )}
            </div>
          </div>

          {/* Adres */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Adres
            </h3>
            <div>
              <label className="label text-xs">Ulica i numer</label>
              {editMode ? (
                <Input value={client.address ?? ''} onChange={e => setClient({ ...client, address: e.target.value })} />
              ) : (
                <p className="text-base">{client.address || '-'}</p>
              )}
            </div>
            <div>
              <label className="label text-xs">Miasto</label>
              {editMode ? (
                <Input value={client.city ?? ''} onChange={e => setClient({ ...client, city: e.target.value })} />
              ) : (
                <p className="text-base">{client.city || '-'}</p>
              )}
            </div>
            <div>
              <label className="label text-xs">Kod pocztowy</label>
              {editMode ? (
                <Input value={client.postalCode ?? ''} onChange={e => setClient({ ...client, postalCode: e.target.value })} />
              ) : (
                <p className="text-base">{client.postalCode || '-'}</p>
              )}
            </div>
            <div>
              <label className="label text-xs">Kraj</label>
              {editMode ? (
                <Input value={client.country ?? ''} onChange={e => setClient({ ...client, country: e.target.value })} />
              ) : (
                <p className="text-base">{client.country || '-'}</p>
              )}
            </div>
          </div>

          {/* Dane firmowe */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Dane firmowe
            </h3>
            <div>
              <label className="label text-xs">NIP</label>
              {editMode ? (
                <Input value={client.nip ?? ''} onChange={e => setClient({ ...client, nip: e.target.value })} />
              ) : (
                <p className="text-base">{client.nip || '-'}</p>
              )}
            </div>
            <div>
              <label className="label text-xs">REGON</label>
              {editMode ? (
                <Input value={client.regon ?? ''} onChange={e => setClient({ ...client, regon: e.target.value })} />
              ) : (
                <p className="text-base">{client.regon || '-'}</p>
              )}
            </div>
            <div>
              <label className="label text-xs">Forma prawna</label>
              {editMode ? (
                <Input value={client.legalForm ?? ''} onChange={e => setClient({ ...client, legalForm: e.target.value })} />
              ) : (
                <p className="text-base">{client.legalForm || '-'}</p>
              )}
            </div>
            <div>
              <label className="label text-xs">Konto bankowe</label>
              {editMode ? (
                <Input value={client.bankAccount ?? ''} onChange={e => setClient({ ...client, bankAccount: e.target.value })} />
              ) : (
                <p className="text-sm font-mono">{client.bankAccount || '-'}</p>
              )}
            </div>
          </div>
        </div>

        {/* Notatki - full width */}
        <div className="mt-6 pt-6 border-t border-border">
          <div>
            <label className="label text-xs">Notatki</label>
            {editMode ? (
              <textarea 
                className="input w-full min-h-[80px]" 
                value={client.notes ?? ''} 
                onChange={e => setClient({ ...client, notes: e.target.value })}
              />
            ) : (
              <p className="text-base whitespace-pre-wrap">{client.notes || '-'}</p>
            )}
          </div>
        </div>

        {/* Metadata */}
        <div className="mt-6 pt-6 border-t border-border grid grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div>
            <span className="font-medium">Utworzono:</span> {client.createdAt ? new Intl.DateTimeFormat('pl-PL', { 
              year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' 
            }).format(new Date(client.createdAt)) : '-'}
          </div>
        </div>
      </Card>

      {/* Tabs */}
      <Card className="p-6">
        <div className="border-b border-gray-200 dark:border-gray-700 -mx-6 px-6">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('documents')}
              className={`px-6 py-3 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'documents'
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                  : 'border-transparent text-muted-foreground hover:text-card-foreground hover:border-border'
              }`}
            >
              Dokumenty
            </button>
            <button
              onClick={() => setActiveTab('invoices')}
              className={`px-6 py-3 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'invoices'
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                  : 'border-transparent text-muted-foreground hover:text-card-foreground hover:border-border'
              }`}
            >
              Faktury
            </button>
          </nav>
        </div>

        <div className="mt-6">
          {activeTab === 'documents' && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Dokumenty klienta</h2>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="label">Szukaj</label>
                  <Input value={search} onChange={e => setSearch(e.target.value)} placeholder="Tytuł/Opis" />
                </div>
                <div>
                  <label className="label">Status</label>
                  <select className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" value={status} onChange={e => setStatus(e.target.value as any)}>
                    <option value="">Wszystkie</option>
                    <option value="DRAFT">DRAFT</option>
                    <option value="SIGNED">SIGNED</option>
                  </select>
                </div>
                <div>
                  <label className="label">Sortuj wg</label>
                  <select className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" value={sortBy} onChange={e => setSortBy(e.target.value as any)}>
                    <option value="createdAt">Utworzono</option>
                    <option value="title">Tytuł</option>
                    <option value="status">Status</option>
                    <option value="id">ID</option>
                  </select>
                </div>
                <div>
                  <label className="label">Kierunek</label>
                  <select className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" value={sortOrder} onChange={e => setSortOrder(e.target.value as any)}>
                    <option value="asc">Rosnąco</option>
                    <option value="desc">Malejąco</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="label">Tytuł</label>
                  <Input value={formDoc.title} onChange={e => setFormDoc(prev => ({ ...prev, title: e.target.value }))} />
                </div>
                <div>
                  <label className="label">Opis</label>
                  <Input value={formDoc.description} onChange={e => setFormDoc(prev => ({ ...prev, description: e.target.value }))} />
                </div>
                <div>
                  <label className="label">Status</label>
                  <select className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" value={formDoc.status} onChange={e => setFormDoc(prev => ({ ...prev, status: e.target.value as any }))}>
                    <option value="DRAFT">DRAFT</option>
                    <option value="SIGNED">SIGNED</option>
                  </select>
                </div>
              </div>
              {formDocErrors.length > 0 && (
                <ul className="mt-2 list-disc list-inside text-sm text-red-600">
                  {formDocErrors.map((e, i) => (<li key={i}>{e}</li>))}
                </ul>
              )}
              <Button variant="primary" onClick={addDoc}>Dodaj dokument</Button>

              <div className="mt-4 space-y-3">
                {loading ? (
                  <p>Ładowanie...</p>
                ) : (
                  <>
                    <Table>
                      <thead>
                        <tr>
                          <Th onClick={() => toggleSort('id')} active={sortBy === 'id'} order={sortOrder}>ID</Th>
                          <Th onClick={() => toggleSort('title')} active={sortBy === 'title'} order={sortOrder}>Tytuł</Th>
                          <Th onClick={() => toggleSort('status')} active={sortBy === 'status'} order={sortOrder}>Status</Th>
                          <Th onClick={() => toggleSort('createdAt')} active={sortBy === 'createdAt'} order={sortOrder}>Data</Th>
                          <th className="px-4 py-2"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {(Array.isArray(docs) ? docs : []).map(doc => (
                          <tr key={doc.id}>
                            <Td>{doc.id}</Td>
                            <Td>{doc.title}</Td>
                            <Td>{doc.status}</Td>
                            <Td>{new Intl.DateTimeFormat('pl-PL', { timeZone: 'UTC', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).format(new Date(doc.createdAt))}</Td>
                            <Td>
                              <Button onClick={() => removeDoc(doc.id)}>Usuń</Button>
                            </Td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                    <Pagination page={meta.page} pages={meta.pages} onPage={(p) => loadDocs(p)} />
                  </>
                )}
              </div>
            </div>
          )}

          {activeTab === 'invoices' && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Faktury</h2>
              <div className="flex gap-2">
                <button 
                  className={`px-4 py-2 rounded transition-colors ${
                    invoicesType === 'issued' 
                      ? 'bg-primary-500 text-white' 
                      : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`} 
                  onClick={() => setInvoicesType('issued')}
                >
                  Wystawione
                </button>
                <button 
                  className={`px-4 py-2 rounded transition-colors ${
                    invoicesType === 'planned' 
                      ? 'bg-primary-500 text-white' 
                      : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`} 
                  onClick={() => setInvoicesType('planned')}
                >
                  Planowane
                </button>
              </div>
              <div className="mt-3">
                <Table>
                  <thead>
                    <tr>
                      <Th>ID</Th>
                      <Th>Data wystawienia</Th>
                      <Th>Data zapłaty</Th>
                      <Th>Tytuł</Th>
                      <Th>Netto</Th>
                      <Th>VAT</Th>
                      <Th>Brutto</Th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoices.map(inv => (
                      <tr key={inv.id}>
                        <Td><Link className="text-primary-600 hover:underline" href={`/invoices/${inv.id}`}>{inv.id}</Link></Td>
                        <Td>{new Intl.DateTimeFormat('pl-PL').format(new Date(inv.issueDate))}</Td>
                        <Td>{new Intl.DateTimeFormat('pl-PL').format(new Date(inv.paymentDate))}</Td>
                        <Td><Link className="text-primary-600 hover:underline" href={`/invoices/${inv.id}`}>{inv.title}</Link></Td>
                        <Td>{inv.net.toFixed(2)} zł</Td>
                        <Td>{inv.vatPerc}% ({inv.vat.toFixed(2)} zł)</Td>
                        <Td className="font-semibold">{inv.gross.toFixed(2)} zł</Td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}
