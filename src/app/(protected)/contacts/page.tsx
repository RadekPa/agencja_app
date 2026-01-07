'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, Th, Td } from '../../../components/ui/Table'
import { Pagination } from '../../../components/ui/Pagination'
import { ContactCreateSchema, ContactUpdateSchema } from '../../../validation/contact'

type Contact = { 
  id: number
  phoneNumber?: string | null
  firstName: string
  middleName?: string | null
  lastName: string
  informal: number
  fax?: string | null
  email?: string | null
  contactPosition?: string | null
  accountant?: number | null
  client?: {
    id: number
    name: string
  } | null
  createdAt: string
  updatedAt: string
}

type Meta = { page: number; pageSize: number; total: number; pages: number }

export default function ContactsPage() {
  const t = useTranslations('contacts')
  const tCommon = useTranslations('common')
  const [contacts, setContacts] = useState<Contact[]>([])
  const [meta, setMeta] = useState<Meta>({ page: 1, pageSize: 10, total: 0, pages: 1 })
  const [loading, setLoading] = useState(true)

  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState<'id'|'firstName'|'lastName'|'createdAt'|'phoneNumber'|'email'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('contacts_sortBy') as any) || 'id'
    }
    return 'id'
  })
  const [sortOrder, setSortOrder] = useState<'asc'|'desc'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('contacts_sortOrder') as any) || 'asc'
    }
    return 'asc'
  })
  const [pageSize, setPageSize] = useState(() => {
    if (typeof window !== 'undefined') {
      return Number(localStorage.getItem('contacts_pageSize')) || 10
    }
    return 10
  })

  const [showAddModal, setShowAddModal] = useState(false)
  const [editingContact, setEditingContact] = useState<Contact | null>(null)
  const [formErrors, setFormErrors] = useState<string[]>([])
  const [form, setForm] = useState({ 
    phoneNumber: '',
    firstName: '', 
    middleName: '', 
    lastName: '', 
    informal: 0,
    fax: '',
    email: '',
    contactPosition: '',
    accountant: null as number | null
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
    const res = await fetch(`/api/contacts?${qs.toString()}`)
    if (!res.ok) {
      setContacts([])
      setMeta({ page, pageSize, total: 0, pages: 1 })
      setLoading(false)
      return
    }
    const data = await res.json()
    if (Array.isArray(data)) {
      setContacts(data)
      const total = data.length
      setMeta({ page, pageSize, total, pages: Math.max(1, Math.ceil(total / pageSize)) })
    } else {
      const arr = Array.isArray(data?.data) ? data.data : []
      setContacts(arr)
      const metaFromServer = data?.meta
      const total = metaFromServer?.total ?? arr.length
      const pages = metaFromServer?.pages ?? Math.max(1, Math.ceil(total / pageSize))
      setMeta(metaFromServer ?? { page, pageSize, total, pages })
    }
    setLoading(false)
  }

  useEffect(() => { load(1) }, [search, sortBy, sortOrder, pageSize])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('contacts_sortBy', sortBy)
      localStorage.setItem('contacts_sortOrder', sortOrder)
      localStorage.setItem('contacts_pageSize', String(pageSize))
    }
  }, [sortBy, sortOrder, pageSize])

  const addContact = async () => {
    const parsed = ContactCreateSchema.safeParse(form)
    if (!parsed.success) {
      setFormErrors(parsed.error.errors.map(e=>e.message))
      return
    }
    setFormErrors([])
    try {
      const res = await fetch('/api/contacts', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(parsed.data) 
      })
      if (!res.ok) {
        const error = await res.json()
        setFormErrors([error.message || t('createContact')])
        return
      }
      setForm({ phoneNumber: '', firstName: '', middleName: '', lastName: '', informal: 0, fax: '', email: '', contactPosition: '', accountant: null })
      setShowAddModal(false)
      await load(1)
    } catch (error) {
      setFormErrors(['Błąd połączenia z serwerem'])
    }
  }

  const updateContact = async () => {
    if (!editingContact) return
    const parsed = ContactUpdateSchema.safeParse(form)
    if (!parsed.success) {
      setFormErrors(parsed.error.errors.map(e=>e.message))
      return
    }
    setFormErrors([])
    try {
      const res = await fetch(`/api/contacts/${editingContact.id}`, { 
        method: 'PUT', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(parsed.data) 
      })
      if (!res.ok) {
        const error = await res.json()
        setFormErrors([error.message || t('editContact')])
        return
      }
      setEditingContact(null)
      setForm({ phoneNumber: '', firstName: '', middleName: '', lastName: '', informal: 0, fax: '', email: '', contactPosition: '', accountant: null })
      await load(meta.page)
    } catch (error) {
      setFormErrors(['Błąd połączenia z serwerem'])
    }
  }

  const openEditContact = (c: Contact) => {
    setEditingContact(c)
    setForm({
      phoneNumber: c.phoneNumber || '',
      firstName: c.firstName,
      middleName: c.middleName || '',
      lastName: c.lastName,
      informal: c.informal,
      fax: c.fax || '',
      email: c.email || '',
      contactPosition: c.contactPosition || '',
      accountant: c.accountant,
    })
    setFormErrors([])
  }

  const removeContact = async (id: number) => {
    await fetch(`/api/contacts/${id}`, { method: 'DELETE' })
    await load(meta.page)
  }

  const toggleSort = (col: typeof sortBy) => {
    if (sortBy !== col) { setSortBy(col); setSortOrder('asc') } else { setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc') }
  }

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">{t('title')}</h1>
          <Button variant="primary" onClick={() => { 
            setShowAddModal(true); 
            setFormErrors([]); 
            setForm({ phoneNumber: '', firstName: '', middleName: '', lastName: '', informal: 0, fax: '', email: '', contactPosition: '', accountant: null }); 
          }}>
            {t('createContact')}
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="label">{tCommon('search')}</label>
            <Input value={search} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setSearch(e.target.value)} placeholder="Imię/Nazwisko/Email" />
          </div>
          <div>
            <label className="label">{tCommon('sortBy')}</label>
            <select className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" value={sortBy} onChange={e=>setSortBy(e.target.value as any)}>
              <option value="id">ID</option>
              <option value="firstName">{t('firstName')}</option>
              <option value="lastName">{t('lastName')}</option>
              <option value="phoneNumber">Telefon</option>
              <option value="email">Email</option>
              <option value="createdAt">{tCommon('createdAt')}</option>
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
            <label className="label">{tCommon('pageSize')}</label>
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
          <p className="text-center text-muted-foreground py-8">{tCommon('loading')}</p>
        ) : (
          <div className="space-y-4">
            <Table>
              <thead>
                <tr>
                  <Th onClick={()=>toggleSort('id')} active={sortBy==='id'} order={sortOrder}>ID</Th>
                  <Th onClick={()=>toggleSort('firstName')} active={sortBy==='firstName'} order={sortOrder}>{t('firstName')}</Th>
                  <Th>{t('middleName')}</Th>
                  <Th onClick={()=>toggleSort('lastName')} active={sortBy==='lastName'} order={sortOrder}>{t('lastName')}</Th>
                  <Th onClick={()=>toggleSort('phoneNumber')} active={sortBy==='phoneNumber'} order={sortOrder}>Telefon</Th>
                  <Th onClick={()=>toggleSort('email')} active={sortBy==='email'} order={sortOrder}>Email</Th>
                  <Th>Stanowisko</Th>
                  <Th>Klient</Th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>
              <tbody>
                {(Array.isArray(contacts) ? contacts : []).map(c => (
                  <tr key={c.id}>
                    <Td>{c.id}</Td>
                    <Td>
                      <Link className="text-primary-600 hover:underline" href={`/contacts/${c.id}`}>{c.firstName}</Link>
                    </Td>
                    <Td>{c.middleName ?? '-'}</Td>
                    <Td>{c.lastName}</Td>
                    <Td>{c.phoneNumber ?? '-'}</Td>
                    <Td>{c.email ?? '-'}</Td>
                    <Td>{c.contactPosition ?? '-'}</Td>
                    <Td>
                      {c.client ? (
                        <Link className="text-primary-600 hover:underline" href={`/customers/${c.client.id}`}>
                          {c.client.name}
                        </Link>
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </Td>
                    <Td>
                      <div className="flex gap-2">
                        <Button onClick={()=>openEditContact(c)}>{tCommon('edit')}</Button>
                        <Button onClick={()=>removeContact(c.id)}>{tCommon('delete')}</Button>
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

      {/* Add contact modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 overflow-y-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow w-full max-w-2xl my-8 max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold mb-4">{t('createContact')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="label">{t('firstName')} *</label>
                <Input value={form.firstName} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setForm(prev=>({ ...prev, firstName: e.target.value }))} />
              </div>
              <div>
                <label className="label">{t('middleName')}</label>
                <Input value={form.middleName} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setForm(prev=>({ ...prev, middleName: e.target.value }))} />
              </div>
              <div>
                <label className="label">{t('lastName')} *</label>
                <Input value={form.lastName} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setForm(prev=>({ ...prev, lastName: e.target.value }))} />
              </div>
              <div>
                <label className="label">Telefon</label>
                <Input value={form.phoneNumber} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setForm(prev=>({ ...prev, phoneNumber: e.target.value }))} />
              </div>
              <div>
                <label className="label">Email</label>
                <Input type="email" value={form.email} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setForm(prev=>({ ...prev, email: e.target.value }))} />
              </div>
              <div>
                <label className="label">Fax</label>
                <Input value={form.fax} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setForm(prev=>({ ...prev, fax: e.target.value }))} />
              </div>
              <div className="md:col-span-2">
                <label className="label">Stanowisko</label>
                <Input value={form.contactPosition} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setForm(prev=>({ ...prev, contactPosition: e.target.value }))} />
              </div>
            </div>
            {formErrors.length > 0 && (
              <ul className="mt-2 list-disc list-inside text-sm text-red-600">
                {formErrors.map((e, i) => (<li key={i}>{e}</li>))}
              </ul>
            )}
            <div className="mt-4 flex justify-end gap-2">
              <Button onClick={() => { setShowAddModal(false); setFormErrors([]); }}>{tCommon('cancel')}</Button>
              <Button variant="primary" onClick={addContact}>{t('createContact')}</Button>
            </div>
          </div>
        </div>
      )}

      {/* Edit contact modal */}
      {editingContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 overflow-y-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow w-full max-w-2xl my-8 max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold mb-4">{t('editContact')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="label">{t('firstName')} *</label>
                <Input value={form.firstName} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setForm(prev=>({ ...prev, firstName: e.target.value }))} />
              </div>
              <div>
                <label className="label">{t('middleName')}</label>
                <Input value={form.middleName} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setForm(prev=>({ ...prev, middleName: e.target.value }))} />
              </div>
              <div>
                <label className="label">{t('lastName')} *</label>
                <Input value={form.lastName} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setForm(prev=>({ ...prev, lastName: e.target.value }))} />
              </div>
              <div>
                <label className="label">Telefon</label>
                <Input value={form.phoneNumber} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setForm(prev=>({ ...prev, phoneNumber: e.target.value }))} />
              </div>
              <div>
                <label className="label">Email</label>
                <Input type="email" value={form.email} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setForm(prev=>({ ...prev, email: e.target.value }))} />
              </div>
              <div>
                <label className="label">Fax</label>
                <Input value={form.fax} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setForm(prev=>({ ...prev, fax: e.target.value }))} />
              </div>
              <div className="md:col-span-2">
                <label className="label">Stanowisko</label>
                <Input value={form.contactPosition} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setForm(prev=>({ ...prev, contactPosition: e.target.value }))} />
              </div>
            </div>
            {formErrors.length > 0 && (
              <ul className="mt-2 list-disc list-inside text-sm text-red-600">
                {formErrors.map((e, i) => (<li key={i}>{e}</li>))}
              </ul>
            )}
            <div className="mt-4 flex justify-end gap-2">
              <Button onClick={() => { setEditingContact(null); setFormErrors([]); }}>{tCommon('cancel')}</Button>
              <Button variant="primary" onClick={updateContact}>{tCommon('save')}</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
