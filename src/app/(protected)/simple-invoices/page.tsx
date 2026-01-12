"use client"
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Table, Th, Td } from '@/components/ui/Table'
import { Pagination } from '@/components/ui/Pagination'
import { Modal } from '@/components/ui/Modal'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

const initialFilters = { title: '', currency: '', dateFrom: '', dateTo: '', clientId: '', status: '' }

type SimpleInvoice = {
  id: number
  invType: string
  invDate: string | null
  billToId: number
  clientId: number | null
  clientName: string | null
  currId: string | null
  totalInvNET: number
  vatPerc: number
  balance: number
  status: string
  descr: string
  dateDue: string | null
  remarks: string
}

type Client = { id: number; name: string }

export default function SimpleInvoicesPage() {
  const [invoices, setInvoices] = useState<SimpleInvoice[]>([])
  const [meta, setMeta] = useState({ page: 1, pageSize: 50, total: 0, pages: 1 })
  const [loading, setLoading] = useState(false)
  const [clients, setClients] = useState<Client[]>([])
  const [showForm, setShowForm] = useState(false)

  const [filters, setFilters] = useState<typeof initialFilters>(initialFilters)
  const [statuses, setStatuses] = useState<string[]>([])
  const [currencies, setCurrencies] = useState<string[]>([])
  const [clientSearch, setClientSearch] = useState('')
  const [currencySearch, setCurrencySearch] = useState('')

  const [form, setForm] = useState({
    clientId: '',
    billToId: '',
    descr: '',
    invDate: '',
    dateDue: '',
    totalInvNET: '',
    vatPerc: '',
    status: 'A',
    invType: 'I',
    currId: 'PLN',
    termDD: '14'
  })

  const load = async (page = 1, overrideFilters?: typeof initialFilters) => {
    const activeFilters = overrideFilters ?? filters
    setLoading(true)
    const params = new URLSearchParams({ page: String(page), pageSize: String(meta.pageSize) })
    if (activeFilters.status) params.append('status', activeFilters.status)
    if (activeFilters.clientId) params.append('clientId', activeFilters.clientId)
    if (activeFilters.dateFrom) params.append('dateFrom', activeFilters.dateFrom)
    if (activeFilters.dateTo) params.append('dateTo', activeFilters.dateTo)
    if (activeFilters.title) params.append('descr', activeFilters.title)
    if (activeFilters.currency) params.append('currency', activeFilters.currency)

    const res = await fetch(`/api/simple-invoices?${params.toString()}`)
    if (!res.ok) {
      setInvoices([])
      setLoading(false)
      return
    }
    const json = await res.json()
    setInvoices(json?.data ?? [])
    setMeta(json?.meta ?? { page, pageSize: meta.pageSize, total: 0, pages: 1 })
    setLoading(false)
  }

  useEffect(() => {
    load(1, initialFilters)
    fetchClients()
    fetchFilters()
  }, [])

  useEffect(() => {
    const t = setTimeout(() => fetchClients(clientSearch), 300)
    return () => clearTimeout(t)
  }, [clientSearch])

  useEffect(() => {
    const t = setTimeout(() => fetchFilters(currencySearch), 300)
    return () => clearTimeout(t)
  }, [currencySearch])

  useEffect(() => {
    const timer = setTimeout(() => {
      load(1)
    }, 300)
    return () => clearTimeout(timer)
  }, [filters])

  const fetchClients = async (searchTerm = '') => {
    const params = new URLSearchParams({ pageSize: '10' })
    if (searchTerm) params.set('search', searchTerm)

    const res = await fetch(`/api/customers?${params.toString()}`)
    if (!res.ok) return
    const json = await res.json()
    setClients(Array.isArray(json) ? json : (json?.data ?? []))
  }

  const fetchFilters = async (currencySearch?: string) => {
    const params = currencySearch ? `?currencySearch=${currencySearch}` : ''
    const res = await fetch(`/api/simple-invoices/filters${params}`)
    if (!res.ok) return
    const json = await res.json()
    setStatuses(Array.isArray(json?.statuses) ? json.statuses : [])
    setCurrencies(Array.isArray(json?.currencies) ? json.currencies : [])
  }

  const handleCreate = async (e: any) => {
    e.preventDefault()
    const payload = {
      clientId: Number(form.clientId) || null,
      billToId: Number(form.billToId),
      descr: form.descr,
      invDate: form.invDate || new Date().toISOString(),
      dateDue: form.dateDue || null,
      totalInvNET: Number(form.totalInvNET) || 0,
      vatPerc: Number(form.vatPerc) || 0,
      status: form.status,
      invType: form.invType,
      currId: form.currId,
      termDD: Number(form.termDD) || 0
    }
    const res = await fetch('/api/simple-invoices', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    if (res.ok) {
      setShowForm(false)
      setForm({
        clientId: '',
        billToId: '',
        descr: '',
        invDate: '',
        dateDue: '',
        totalInvNET: '',
        vatPerc: '',
        status: 'A',
        invType: 'I',
        currId: 'PLN',
        termDD: '14'
      })
      load(1)
    } else {
      alert('Błąd tworzenia faktury')
    }
  }

  const updateStatus = async (id: number, status: string) => {
    const res = await fetch(`/api/simple-invoices/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
    })
    if (res.ok) {
      setInvoices(prev => prev.map(inv => (inv.id === id ? { ...inv, status } : inv)))
    } else {
      alert('Błąd aktualizacji statusu')
    }
  }

  const applyFilters = (e: any) => {
    e.preventDefault()
    load(1)
  }

  const handleClientInput = (value: string) => {
    setClientSearch(value)
    
    if (!value) {
      setFilters(prev => ({ ...prev, clientId: '' }))
      return
    }
    
    const selected = clients.find(c => c.name.toLowerCase() === value.toLowerCase())
    if (selected) {
      setFilters(prev => ({ ...prev, clientId: String(selected.id) }))
    } else {
      setFilters(prev => ({ ...prev, clientId: '' }))
    }
  }

  const handleCurrencyInput = (value: string) => {
    setCurrencySearch(value)
    
    if (!value) {
      setFilters(prev => ({ ...prev, currency: '' }))
      return
    }
    
    const selected = currencies.find(c => c.toLowerCase() === value.toLowerCase())
    if (selected) {
      setFilters(prev => ({ ...prev, currency: selected }))
    } else {
      setFilters(prev => ({ ...prev, currency: '' }))
    }
  }

  const resetFilters = () => {
    const cleared = { ...initialFilters }
    setFilters(cleared)
    setClientSearch('')
    setCurrencySearch('')
    load(1, cleared)
  }

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Faktury - lista</h1>
          <Button variant="primary" onClick={() => setShowForm(true)}>
            Nowa faktura
          </Button>
        </div>

        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-muted-foreground">Klient</label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  list="clients-datalist"
                  placeholder="Szukaj i wybierz"
                  value={clientSearch}
                  onChange={e => handleClientInput(e.target.value)}
                  className="pl-9"
                />
                <datalist id="clients-datalist">
                  {(Array.isArray(clients) ? clients : []).map(c => (
                    <option key={c.id} value={c.name || ''} />
                  ))}
                </datalist>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-muted-foreground">Tytuł</label>
              <Input
                placeholder="Wpisz tytuł"
                value={filters.title}
                onChange={e => setFilters({ ...filters, title: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-muted-foreground">Waluta</label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  list="currencies-datalist"
                  placeholder="Szukaj i wybierz"
                  value={currencySearch}
                  onChange={e => handleCurrencyInput(e.target.value)}
                  className="pl-9"
                />
                <datalist id="currencies-datalist">
                  {(Array.isArray(currencies) ? currencies : []).map(c => (
                    <option key={c} value={c || ''} />
                  ))}
                </datalist>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-muted-foreground">Data od</label>
              <input
                type="date"
                value={filters.dateFrom}
                onChange={e => setFilters({ ...filters, dateFrom: e.target.value })}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground h-9"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-muted-foreground">Data do</label>
              <input
                type="date"
                value={filters.dateTo}
                onChange={e => setFilters({ ...filters, dateTo: e.target.value })}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground h-9"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-5 items-end">
            <div className="md:col-start-4">
              <Button type="button" variant="primary" className="w-full h-9" onClick={applyFilters}>Szukaj</Button>
            </div>
            <div>
              <Button type="button" onClick={resetFilters} variant="outline" className="w-full h-9">Wyczyść</Button>
            </div>
          </div>
        </div>

        <Modal isOpen={showForm} onClose={() => setShowForm(false)} title="Dodaj nową fakturę">
          <form onSubmit={handleCreate} className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-muted-foreground">Klient</label>
              <select
                value={form.clientId}
                onChange={e => setForm({ ...form, clientId: e.target.value })}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
              >
                <option value="">Wybierz klienta</option>
                {(Array.isArray(clients) ? clients : []).map(c => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-muted-foreground">Bill To ID</label>
              <input
                type="number"
                placeholder="ID adresu rozliczeniowego"
                value={form.billToId}
                onChange={e => setForm({ ...form, billToId: e.target.value })}
                required
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-muted-foreground">Opis</label>
              <input
                placeholder="Opis faktury"
                value={form.descr}
                onChange={e => setForm({ ...form, descr: e.target.value })}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground">Data wystawienia</label>
                <input
                  type="date"
                  value={form.invDate}
                  onChange={e => setForm({ ...form, invDate: e.target.value })}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground">Termin zapłaty</label>
                <input
                  type="date"
                  value={form.dateDue}
                  onChange={e => setForm({ ...form, dateDue: e.target.value })}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground">Netto</label>
                <input
                  placeholder="0.00"
                  type="number"
                  step="0.01"
                  value={form.totalInvNET}
                  onChange={e => setForm({ ...form, totalInvNET: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground">VAT %</label>
                <input
                  placeholder="0"
                  type="number"
                  value={form.vatPerc}
                  onChange={e => setForm({ ...form, vatPerc: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground">Status</label>
                <select
                  value={form.status}
                  onChange={e => setForm({ ...form, status: e.target.value })}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
                >
                  <option value="A">Aktywna</option>
                  <option value="C">Anulowana</option>
                  <option value="P">Zapłacona</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground">Typ</label>
                <select
                  value={form.invType}
                  onChange={e => setForm({ ...form, invType: e.target.value })}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
                >
                  <option value="I">Invoice</option>
                  <option value="C">Credit Note</option>
                  <option value="P">Proforma</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground">Waluta</label>
                <select
                  value={form.currId}
                  onChange={e => setForm({ ...form, currId: e.target.value })}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
                >
                  <option value="PLN">PLN</option>
                  <option value="EUR">EUR</option>
                  <option value="USD">USD</option>
                </select>
              </div>
            </div>

            <div className="flex gap-2 pt-4 border-t border-border">
              <Button variant="primary" type="submit" className="flex-1">
                Utwórz fakturę
              </Button>
              <Button type="button" onClick={() => setShowForm(false)} className="flex-1">
                Anuluj
              </Button>
            </div>
          </form>
        </Modal>

        {loading ? (
          <p className="text-center text-muted-foreground py-8">Ładowanie...</p>
        ) : (
          <div className="mt-6">
            <Table>
              <thead>
                <tr>
                  <Th>ID</Th>
                  <Th>Klient</Th>
                  <Th>Typ</Th>
                  <Th>Opis</Th>
                  <Th>Data wystawienia</Th>
                  <Th>Termin</Th>
                  <Th className="text-right">Netto</Th>
                  <Th>Status</Th>
                </tr>
              </thead>
              <tbody>
                {invoices.map(i => (
                  <tr key={i.id}>
                    <Td>
                      <Link href={`/simple-invoices/${i.id}`}>{i.id}</Link>
                    </Td>
                    <Td>{i.clientName || '-'}</Td>
                    <Td>{i.invType}</Td>
                    <Td>
                      <Link href={`/simple-invoices/${i.id}`}>{i.descr || '-'}</Link>
                    </Td>
                    <Td>{i.invDate ? new Intl.DateTimeFormat('pl-PL').format(new Date(i.invDate)) : '-'}</Td>
                    <Td>{i.dateDue ? new Intl.DateTimeFormat('pl-PL').format(new Date(i.dateDue)) : '-'}</Td>
                    <Td className="text-right">{i.totalInvNET?.toFixed(2) ?? '0.00'}</Td>
                    <Td>
                      <select value={i.status} onChange={e => updateStatus(i.id, e.target.value)} className="px-2 py-1 border rounded">
                        <option value="A">Aktywna</option>
                        <option value="C">Anulowana</option>
                        <option value="P">Zapłacona</option>
                      </select>
                    </Td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className="mt-6">
              <Pagination page={meta.page} pages={meta.pages} onPage={p => load(p)} />
            </div>
          </div>
        )}
      </Card>
    </div>
  )
}
