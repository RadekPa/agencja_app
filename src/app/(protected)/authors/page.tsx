'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, Th, Td } from '../../../components/ui/Table'
import { Pagination } from '../../../components/ui/Pagination'

type Author = { 
  id: number
  fullName?: string | null
  firstName?: string | null
  middleName?: string | null
  lastName?: string | null
  suffix?: string | null
  penName?: string | null
  remarks?: string | null
  userMod?: string
  dateMod?: string
}

type Meta = { page: number; pageSize: number; total: number; pages: number }

export default function AuthorsPage() {
  const [authors, setAuthors] = useState<Author[]>([])
  const [meta, setMeta] = useState<Meta>({ page: 1, pageSize: 10, total: 0, pages: 1 })
  const [loading, setLoading] = useState(true)

  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState<'id'|'firstName'|'lastName'|'fullName'|'penName'|'dateMod'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('authors_sortBy') as any) || 'id'
    }
    return 'id'
  })
  const [sortOrder, setSortOrder] = useState<'asc'|'desc'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('authors_sortOrder') as any) || 'asc'
    }
    return 'asc'
  })
  const [pageSize, setPageSize] = useState(() => {
    if (typeof window !== 'undefined') {
      return Number(localStorage.getItem('authors_pageSize')) || 10
    }
    return 10
  })

  const [showAddModal, setShowAddModal] = useState(false)
  const [editingAuthor, setEditingAuthor] = useState<Author | null>(null)
  const [formErrors, setFormErrors] = useState<string[]>([])
  const [form, setForm] = useState({ 
    fullName: '',
    firstName: '',
    middleName: '',
    lastName: '',
    suffix: '',
    penName: '',
    remarks: '',
  })

  const load = async (page = meta.page) => {
    setLoading(true)
    const qs = new URLSearchParams({
      search,
      page: String(page),
      pageSize: String(pageSize),
      sortBy,
      sortOrder
    })
    const res = await fetch(`/api/authors?${qs.toString()}`)
    if (!res.ok) {
      setAuthors([])
      setMeta({ page, pageSize, total: 0, pages: 1 })
      setLoading(false)
      return
    }
    const data = await res.json()
    
    if (Array.isArray(data)) {
      setAuthors(data)
      const total = data.length
      setMeta({ page, pageSize, total, pages: Math.max(1, Math.ceil(total / pageSize)) })
    } else {
      const arr = Array.isArray(data?.data) ? data.data : []
      setAuthors(arr)
      const metaFromServer = data?.meta
      const total = metaFromServer?.total ?? arr.length
      const pages = metaFromServer?.pages ?? Math.max(1, Math.ceil(total / pageSize))
      setMeta(metaFromServer ?? { page, pageSize, total, pages })
    }
    setLoading(false)
  }

  useEffect(() => { load(1) }, [search, sortBy, sortOrder, pageSize])

  // Zapisz ustawienia sortowania i rozmiaru strony do localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('authors_sortBy', sortBy)
      localStorage.setItem('authors_sortOrder', sortOrder)
      localStorage.setItem('authors_pageSize', String(pageSize))
    }
  }, [sortBy, sortOrder, pageSize])

  const addAuthor = async () => {
    if (!form.firstName || !form.lastName) {
      setFormErrors(['Imię i nazwisko są wymagane'])
      return
    }
    setFormErrors([])
    await fetch('/api/authors', { 
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify(form) 
    })
    setForm({ 
      fullName: '',
      firstName: '',
      middleName: '',
      lastName: '',
      suffix: '',
      penName: '',
      remarks: '',
    })
    setShowAddModal(false)
    await load(1)
  }

  const updateAuthor = async () => {
    if (!editingAuthor) return
    if (!form.firstName || !form.lastName) {
      setFormErrors(['Imię i nazwisko są wymagane'])
      return
    }
    setFormErrors([])
    await fetch(`/api/authors/${editingAuthor.id}`, { 
      method: 'PUT', 
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify(form) 
    })
    setEditingAuthor(null)
    setForm({ 
      fullName: '',
      firstName: '',
      middleName: '',
      lastName: '',
      suffix: '',
      penName: '',
      remarks: '',
    })
    await load(meta.page)
  }

  const openEditAuthor = (a: Author) => {
    setEditingAuthor(a)
    setForm({
      fullName: a.fullName || '',
      firstName: a.firstName || '',
      middleName: a.middleName || '',
      lastName: a.lastName || '',
      suffix: a.suffix || '',
      penName: a.penName || '',
      remarks: a.remarks || '',
    })
    setFormErrors([])
  }

  const removeAuthor = async (id: number) => {
    if (!confirm('Czy na pewno chcesz usunąć tego autora?')) return
    await fetch(`/api/authors/${id}`, { method: 'DELETE' })
    await load(meta.page)
  }

  const toggleSort = (col: typeof sortBy) => {
    if (sortBy !== col) { setSortBy(col); setSortOrder('asc') } else { setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc') }
  }

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Autorzy</h1>
          <Button variant="primary" onClick={() => { 
            setShowAddModal(true); 
            setFormErrors([]); 
            setForm({ 
              fullName: '',
              firstName: '',
              middleName: '',
              lastName: '',
              suffix: '',
              penName: '',
              remarks: '',
            }); 
          }}>
            Dodaj autora
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="label">Wyszukaj</label>
            <Input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Imię/Nazwisko/Pseudonim" />
          </div>
          <div>
            <label className="label">Sortuj według</label>
            <select className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" value={sortBy} onChange={e=>setSortBy(e.target.value as any)}>
              <option value="id">ID</option>
              <option value="firstName">Imię</option>
              <option value="lastName">Nazwisko</option>
              <option value="fullName">Pełne imię i nazwisko</option>
              <option value="penName">Pseudonim</option>
              <option value="dateMod">Data modyfikacji</option>
            </select>
          </div>
          <div>
            <label className="label">Kierunek</label>
            <select className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" value={sortOrder} onChange={e=>setSortOrder(e.target.value as any)}>
              <option value="asc">Rosnąco</option>
              <option value="desc">Malejąco</option>
            </select>
          </div>
          <div>
            <label className="label">Na stronie</label>
            <select className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" value={String(pageSize)} onChange={e=>setPageSize(Number(e.target.value))}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        {loading ? (
          <p className="text-center text-muted-foreground py-8">Ładowanie...</p>
        ) : (
          <div className="space-y-4">
            <Table>
              <thead>
                <tr>
                  <Th onClick={()=>toggleSort('id')} active={sortBy==='id'} order={sortOrder}>ID</Th>
                  <Th onClick={()=>toggleSort('firstName')} active={sortBy==='firstName'} order={sortOrder}>Imię</Th>
                  <Th onClick={()=>toggleSort('lastName')} active={sortBy==='lastName'} order={sortOrder}>Nazwisko</Th>
                  <Th onClick={()=>toggleSort('fullName')} active={sortBy==='fullName'} order={sortOrder}>Pełne imię i nazwisko</Th>
                  <Th onClick={()=>toggleSort('penName')} active={sortBy==='penName'} order={sortOrder}>Pseudonim</Th>
                  <Th>Uwagi</Th>
                  <Th onClick={()=>toggleSort('dateMod')} active={sortBy==='dateMod'} order={sortOrder}>Data modyfikacji</Th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>
              <tbody>
                {(Array.isArray(authors) ? authors : []).map(a => (
                  <tr key={a.id}>
                    <Td>{a.id}</Td>
                    <Td>
                      <Link className="text-primary-600 hover:underline" href={`/authors/${a.id}`}>
                        {a.firstName}
                      </Link>
                    </Td>
                    <Td>{a.lastName ?? '-'}</Td>
                    <Td>{a.fullName ?? '-'}</Td>
                    <Td>{a.penName ?? '-'}</Td>
                    <Td>{a.remarks ?? '-'}</Td>
                    <Td>{a.dateMod ? new Intl.DateTimeFormat('pl-PL', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).format(new Date(a.dateMod)) : '-'}</Td>
                    <Td>
                      <div className="flex gap-2">
                        <Button onClick={()=>openEditAuthor(a)}>Edytuj</Button>
                        <Button onClick={()=>removeAuthor(a.id)}>Usuń</Button>
                      </div>
                    </Td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Pagination page={meta.page} pages={meta.pages} onPage={(p)=>load(p)} />
          </div>
        )}
      </Card>

      {/* Add author modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 overflow-y-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow w-full max-w-2xl my-8 max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold mb-4">Dodaj autora</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="label">Imię</label>
                <Input value={form.firstName} onChange={e=>setForm(prev=>({ ...prev, firstName: e.target.value }))} />
              </div>
              <div>
                <label className="label">Drugie imię</label>
                <Input value={form.middleName} onChange={e=>setForm(prev=>({ ...prev, middleName: e.target.value }))} />
              </div>
              <div>
                <label className="label">Nazwisko</label>
                <Input value={form.lastName} onChange={e=>setForm(prev=>({ ...prev, lastName: e.target.value }))} />
              </div>
              <div>
                <label className="label">Sufiks</label>
                <Input value={form.suffix} onChange={e=>setForm(prev=>({ ...prev, suffix: e.target.value }))} />
              </div>
              <div className="md:col-span-2">
                <label className="label">Pełne imię i nazwisko</label>
                <Input value={form.fullName} onChange={e=>setForm(prev=>({ ...prev, fullName: e.target.value }))} />
              </div>
              <div className="md:col-span-2">
                <label className="label">Pseudonim</label>
                <Input value={form.penName} onChange={e=>setForm(prev=>({ ...prev, penName: e.target.value }))} />
              </div>
              <div className="md:col-span-2">
                <label className="label">Uwagi</label>
                <Input value={form.remarks} onChange={e=>setForm(prev=>({ ...prev, remarks: e.target.value }))} />
              </div>
            </div>
            {formErrors.length > 0 && (
              <ul className="mt-2 list-disc list-inside text-sm text-red-600">
                {formErrors.map((e, i) => (<li key={i}>{e}</li>))}
              </ul>
            )}
            <div className="mt-4 flex justify-end gap-2">
              <Button onClick={() => { setShowAddModal(false); setFormErrors([]); }}>Anuluj</Button>
              <Button variant="primary" onClick={addAuthor}>Dodaj</Button>
            </div>
          </div>
        </div>
      )}

      {/* Edit author modal */}
      {editingAuthor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 overflow-y-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow w-full max-w-2xl my-8 max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold mb-4">Edytuj autora</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="label">Imię</label>
                <Input value={form.firstName} onChange={e=>setForm(prev=>({ ...prev, firstName: e.target.value }))} />
              </div>
              <div>
                <label className="label">Drugie imię</label>
                <Input value={form.middleName} onChange={e=>setForm(prev=>({ ...prev, middleName: e.target.value }))} />
              </div>
              <div>
                <label className="label">Nazwisko</label>
                <Input value={form.lastName} onChange={e=>setForm(prev=>({ ...prev, lastName: e.target.value }))} />
              </div>
              <div>
                <label className="label">Sufiks</label>
                <Input value={form.suffix} onChange={e=>setForm(prev=>({ ...prev, suffix: e.target.value }))} />
              </div>
              <div className="md:col-span-2">
                <label className="label">Pełne imię i nazwisko</label>
                <Input value={form.fullName} onChange={e=>setForm(prev=>({ ...prev, fullName: e.target.value }))} />
              </div>
              <div className="md:col-span-2">
                <label className="label">Pseudonim</label>
                <Input value={form.penName} onChange={e=>setForm(prev=>({ ...prev, penName: e.target.value }))} />
              </div>
              <div className="md:col-span-2">
                <label className="label">Uwagi</label>
                <Input value={form.remarks} onChange={e=>setForm(prev=>({ ...prev, remarks: e.target.value }))} />
              </div>
            </div>
            {formErrors.length > 0 && (
              <ul className="mt-2 list-disc list-inside text-sm text-red-600">
                {formErrors.map((e, i) => (<li key={i}>{e}</li>))}
              </ul>
            )}
            <div className="mt-4 flex justify-end gap-2">
              <Button onClick={() => { setEditingAuthor(null); setFormErrors([]); }}>Anuluj</Button>
              <Button variant="primary" onClick={updateAuthor}>Zapisz</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
