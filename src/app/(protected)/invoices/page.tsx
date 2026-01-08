"use client"
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Table, Th, Td } from '../../../components/ui/Table'
import { Pagination } from '../../../components/ui/Pagination'
import { Modal } from '../../../components/ui/Modal'
import { Button } from '@/components/ui/button'

const initialFilters = { title: '', currency: '', dateFrom: '', dateTo: '', clientId: '', status: '' }

type Invoice = { id: number; clientId: number; clientName: string; date: string; payDate: string | null; title: string; currency?: string | null; netAmt: number; vatPerc: number; vatAmt: number; grossAmt: number; status: string; invType: string }
type Client = { id: number; name: string }

export default function InvoicesPage() {
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [meta, setMeta] = useState({ page: 1, pageSize: 50, total: 0, pages: 1 })
  const [loading, setLoading] = useState(false)
  const [clients, setClients] = useState<Client[]>([])
  const [showForm, setShowForm] = useState(false)

  const [filters, setFilters] = useState<typeof initialFilters>(initialFilters)
  const [statuses, setStatuses] = useState<string[]>([])
  const [currencies, setCurrencies] = useState<string[]>([])
  const [clientSearch, setClientSearch] = useState('')

  const [form, setForm] = useState({ clientId: '', title: '', date: '', payDate: '', netAmt: '', vatPerc: '', status: 'ISSUED', invType: 'FV' })

  const load = async (page = 1, overrideFilters?: typeof initialFilters) => {
    const activeFilters = overrideFilters ?? filters
    setLoading(true)
    const params = new URLSearchParams({ page: String(page), pageSize: String(meta.pageSize) })
    if (activeFilters.status) params.append('status', activeFilters.status)
    if (activeFilters.clientId) params.append('clientId', activeFilters.clientId)
    if (activeFilters.dateFrom) params.append('dateFrom', activeFilters.dateFrom)
    if (activeFilters.dateTo) params.append('dateTo', activeFilters.dateTo)
    if (activeFilters.title) params.append('title', activeFilters.title)
    if (activeFilters.currency) params.append('currency', activeFilters.currency)

    const res = await fetch(`/api/invoices?${params.toString()}`)
    if (!res.ok) { setInvoices([]); setLoading(false); return }
    const json = await res.json()
    setInvoices(json?.data ?? [])
    setMeta(json?.meta ?? { page, pageSize: meta.pageSize, total: 0, pages: 1 })
    setLoading(false)
  }

  useEffect(() => { load(1, initialFilters); fetchClients(); fetchFilters() }, [])
  useEffect(() => {
    const t = setTimeout(() => fetchClients(clientSearch), 300)
    return () => clearTimeout(t)
  }, [clientSearch])

  const fetchClients = async (searchTerm = '') => {
    const params = new URLSearchParams({ pageSize: '10' })
    if (searchTerm) params.set('search', searchTerm)

    const res = await fetch(`/api/customers?${params.toString()}`)
    if (!res.ok) return
    const json = await res.json()
    setClients(Array.isArray(json) ? json : (json?.data ?? []))
  }

  const fetchFilters = async () => {
    const res = await fetch('/api/invoices/filters')
    if (!res.ok) return
    const json = await res.json()
    setStatuses(Array.isArray(json?.statuses) ? json.statuses : [])
    setCurrencies(Array.isArray(json?.currencies) ? json.currencies : [])
  }

  const handleCreate = async (e: any) => {
    e.preventDefault()
    const payload = {
      clientId: Number(form.clientId),
      title: form.title,
      date: form.date || new Date().toISOString(),
      payDate: form.payDate || form.date || new Date().toISOString(),
      netAmt: Number(form.netAmt) || 0,
      vatPerc: Number(form.vatPerc) || 0,
      status: form.status,
      invType: form.invType
    }
    const res = await fetch('/api/invoices', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
    if (res.ok) {
      setShowForm(false)
      setForm({ clientId: '', title: '', date: '', payDate: '', netAmt: '', vatPerc: '', status: 'ISSUED', invType: 'FV' })
      load(1)
    } else {
      alert('Błąd tworzenia faktury')
    }
  }

  const updateStatus = async (id: number, status: string) => {
    const res = await fetch(`/api/invoices/${id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ status }) })
    if (res.ok) {
      setInvoices(prev => prev.map(inv => inv.id === id ? { ...inv, status } : inv))
    } else {
      alert('Błąd aktualizacji statusu')
    }
  }

  const applyFilters = (e: any) => {
    e.preventDefault()
    load(1)
  }

  const resetFilters = () => {
    const cleared = { ...initialFilters }
    setFilters(cleared)
    setClientSearch('')
    load(1, cleared)
  }

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Faktury - lista</h1>
          <Button variant="primary" onClick={() => setShowForm(true)}>Nowa faktura</Button>
        </div>

        <form onSubmit={applyFilters} className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 mb-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-muted-foreground">Tytuł</label>
            <input
              placeholder="Wpisz tytuł"
              value={filters.title}
              onChange={e => setFilters({ ...filters, title: e.target.value })}
              className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-muted-foreground">Waluta</label>
            <select
              value={filters.currency}
              onChange={e => setFilters({ ...filters, currency: e.target.value })}
              className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
            >
              <option value="">Wszystkie waluty</option>
              {currencies.map(curr => <option key={curr} value={curr}>{curr}</option>)}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-muted-foreground">Data faktury od</label>
              <input
                type="date"
                value={filters.dateFrom}
                onChange={e => setFilters({ ...filters, dateFrom: e.target.value })}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-muted-foreground">Data faktury do</label>
              <input
                type="date"
                value={filters.dateTo}
                onChange={e => setFilters({ ...filters, dateTo: e.target.value })}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-muted-foreground">Klient</label>
            <input
              placeholder="Szukaj klienta"
              value={clientSearch}
              onChange={e => setClientSearch(e.target.value)}
              className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
            />
            <select
              value={filters.clientId}
              onChange={e => setFilters({ ...filters, clientId: e.target.value })}
              className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
            >
              <option value="">Wszyscy klienci</option>
              {(Array.isArray(clients) ? clients : []).map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-muted-foreground">Status</label>
            <select
              value={filters.status}
              onChange={e => setFilters({ ...filters, status: e.target.value })}
              className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
            >
              <option value="">Wszystkie statusy</option>
              {(statuses.length ? statuses : ['ISSUED', 'DRAFT']).map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div className="flex items-end gap-2">
            <Button type="submit" variant="primary" className="flex-1">Szukaj</Button>
            <Button type="button" onClick={resetFilters} className="flex-1">Wyczyść</Button>
          </div>
        </form>

        <Modal isOpen={showForm} onClose={() => setShowForm(false)} title="Dodaj nową fakturę">
          <form onSubmit={handleCreate} className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-muted-foreground">Klient</label>
              <select
                value={form.clientId}
                onChange={e => setForm({ ...form, clientId: e.target.value })}
                required
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
              >
                <option value="">Wybierz klienta</option>
                {(Array.isArray(clients) ? clients : []).map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-muted-foreground">Tytuł</label>
              <input
                placeholder="Tytuł faktury"
                value={form.title}
                onChange={e => setForm({ ...form, title: e.target.value })}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground">Data wystawienia</label>
                <input
                  type="date"
                  value={form.date}
                  onChange={e => setForm({ ...form, date: e.target.value })}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground">Data zapłaty</label>
                <input
                  type="date"
                  value={form.payDate}
                  onChange={e => setForm({ ...form, payDate: e.target.value })}
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
                  value={form.netAmt}
                  onChange={e => setForm({ ...form, netAmt: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground">VAT %</label>
                <input
                  placeholder="0.00"
                  type="number"
                  step="0.01"
                  value={form.vatPerc}
                  onChange={e => setForm({ ...form, vatPerc: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground">Status</label>
                <select
                  value={form.status}
                  onChange={e => setForm({ ...form, status: e.target.value })}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
                >
                  <option value="ISSUED">Wystawiona</option>
                  <option value="DRAFT">Wersja robocza</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground">Typ faktury</label>
                <select
                  value={form.invType}
                  onChange={e => setForm({ ...form, invType: e.target.value })}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
                >
                  <option value="FV">Faktura VAT</option>
                  <option value="RR">Rachunek</option>
                  <option value="KOR">Korekta</option>
                </select>
              </div>
            </div>

            <div className="flex gap-2 pt-4 border-t border-border">
              <Button variant="primary" type="submit" className="flex-1">Utwórz fakturę</Button>
              <Button type="button" onClick={() => setShowForm(false)} className="flex-1">Anuluj</Button>
            </div>
          </form>
        </Modal>

        {loading ? <p className="text-center text-muted-foreground py-8">Ładowanie...</p> : (
          <div className="mt-6">
            <Table>
              <thead>
                <tr>
                  <Th>ID</Th>
                  <Th>Klient</Th>
                  <Th>Typ</Th>
                  <Th>Tytuł</Th>
                  <Th>Data wystawienia</Th>
                  <Th>Data zapłaty</Th>
                  <Th className="text-right">Brutto</Th>
                </tr>
              </thead>
              <tbody>
                {invoices.map(i => (
                  <tr key={i.id}>
                    <Td><Link href={`/invoices/${i.id}`}>{i.id}</Link></Td>
                    <Td>{i.clientName}</Td>
                    <Td>
                      <select value={i.status} onChange={e => updateStatus(i.id, e.target.value)} className="px-2 py-1 border rounded">
                        <option value="ISSUED">Wystawiona</option>
                        <option value="DRAFT">Wersja robocza</option>
                      </select>
                    </Td>
                    <Td><Link href={`/invoices/${i.id}`}>{i.title}</Link></Td>
                    <Td>{new Intl.DateTimeFormat('pl-PL').format(new Date(i.date))}</Td>
                    <Td>{i.payDate ? new Intl.DateTimeFormat('pl-PL').format(new Date(i.payDate)) : '-'}</Td>
                    <Td className="text-right">{i.grossAmt.toFixed(2)}</Td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className="mt-6">
              <Pagination page={meta.page} pages={meta.pages} onPage={(p) => load(p)} />
            </div>
          </div>
        )}
      </Card>
    </div>
  )
}
