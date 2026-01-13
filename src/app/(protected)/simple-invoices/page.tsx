"use client"
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Card } from '@/components/ui/card'
import { Table, Th, Td } from '@/components/ui/Table'
import { Pagination } from '@/components/ui/Pagination'
import { Modal } from '@/components/ui/Modal'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

const initialFilters = { title: '', currency: '', dateFrom: '', dateTo: '', clientId: '', billToId: '', status: '' }

type SimpleInvoice = {
  id: number
  invType: string
  invDate: string | null
  billToId: number
  billToName: string | null
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
  const t = useTranslations('simpleInvoices')
  const tCommon = useTranslations('common')
  const [invoices, setInvoices] = useState<SimpleInvoice[]>([])
  const [meta, setMeta] = useState({ page: 1, pageSize: 50, total: 0, pages: 1 })
  const [loading, setLoading] = useState(false)
  const [clients, setClients] = useState<Client[]>([])
  const [billToClients, setBillToClients] = useState<Client[]>([])
  const [showForm, setShowForm] = useState(false)
  const [pageSize, setPageSize] = useState(() => {
    if (typeof window !== 'undefined') {
      return Number(localStorage.getItem('simple_invoices_pageSize')) || 50
    }
    return 50
  })

  const handlePageSizeChange = (newPageSize: number) => {
    setPageSize(newPageSize)
    setMeta(prev => ({ ...prev, pageSize: newPageSize }))
  }

  const [filters, setFilters] = useState<typeof initialFilters>(initialFilters)
  const [statuses, setStatuses] = useState<string[]>([])
  const [currencies, setCurrencies] = useState<string[]>([])
  const [clientSearch, setClientSearch] = useState('')
  const [billToSearch, setBillToSearch] = useState('')
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
    const params = new URLSearchParams({ page: String(page), pageSize: String(pageSize) })
    if (activeFilters.status) params.append('status', activeFilters.status)
    if (activeFilters.clientId) params.append('clientId', activeFilters.clientId)
    if (activeFilters.billToId) params.append('billToId', activeFilters.billToId)
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
    setMeta(json?.meta ?? { page, pageSize: pageSize, total: 0, pages: 1 })
    setLoading(false)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('simple_invoices_pageSize', String(pageSize))
    }
  }, [pageSize])

  useEffect(() => {
    load(1)
  }, [pageSize])

  useEffect(() => {
    load(1, initialFilters)
    fetchClients()
    fetchBillToClients()
    fetchFilters()
  }, [])

  useEffect(() => {
    const t = setTimeout(() => fetchClients(clientSearch), 300)
    return () => clearTimeout(t)
  }, [clientSearch])

  useEffect(() => {
    const t = setTimeout(() => fetchBillToClients(billToSearch), 300)
    return () => clearTimeout(t)
  }, [billToSearch])

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

  const fetchBillToClients = async (searchTerm = '') => {
    const params = new URLSearchParams({ pageSize: '10' })
    if (searchTerm) params.set('search', searchTerm)

    const res = await fetch(`/api/customers?${params.toString()}`)
    if (!res.ok) return
    const json = await res.json()
    setBillToClients(Array.isArray(json) ? json : (json?.data ?? []))
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

  const handleBillToInput = (value: string) => {
    setBillToSearch(value)
    
    if (!value) {
      setFilters(prev => ({ ...prev, billToId: '' }))
      return
    }
    
    const selected = billToClients.find(c => c.name.toLowerCase() === value.toLowerCase())
    if (selected) {
      setFilters(prev => ({ ...prev, billToId: String(selected.id) }))
    } else {
      setFilters(prev => ({ ...prev, billToId: '' }))
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
    setBillToSearch('')
    setCurrencySearch('')
    load(1, cleared)
  }

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">{t('listTitle')}</h1>
          <Button variant="primary" onClick={() => setShowForm(true)}>
            {t('createInvoice')}
          </Button>
        </div>

        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-muted-foreground">{t('publisher')}</label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  list="billto-datalist"
                  placeholder={t('searchAndSelect')}
                  value={billToSearch}
                  onChange={e => handleBillToInput(e.target.value)}
                  className="pl-9"
                />
                <datalist id="billto-datalist">
                  {(Array.isArray(billToClients) ? billToClients : []).map(c => (
                    <option key={c.id} value={c.name || ''} />
                  ))}
                </datalist>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-muted-foreground">{t('billTo')}</label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  list="clients-datalist"
                  placeholder={t('searchAndSelect')}
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
              <label className="block text-sm font-medium text-muted-foreground">{tCommon('title')}</label>
              <Input
                placeholder={tCommon('title')}
                value={filters.title}
                onChange={e => setFilters({ ...filters, title: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-muted-foreground">{t('currency')}</label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  list="currencies-datalist"
                  placeholder={t('searchAndSelect')}
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
              <label className="block text-sm font-medium text-muted-foreground">{t('dateFrom')}</label>
              <input
                type="date"
                value={filters.dateFrom}
                onChange={e => setFilters({ ...filters, dateFrom: e.target.value })}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground h-9"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-muted-foreground">{t('dateTo')}</label>
              <input
                type="date"
                value={filters.dateTo}
                onChange={e => setFilters({ ...filters, dateTo: e.target.value })}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground h-9"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-6 items-end">
            <div className="md:col-start-5">
              <Button type="button" variant="primary" className="w-full h-9" onClick={applyFilters}>{tCommon('search')}</Button>
            </div>
            <div>
              <Button type="button" onClick={resetFilters} variant="outline" className="w-full h-9">{tCommon('cancel')}</Button>
            </div>
          </div>
        </div>

        <Modal isOpen={showForm} onClose={() => setShowForm(false)} title={t('createInvoice')}>
          <form onSubmit={handleCreate} className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-muted-foreground">{t('billTo')}</label>
              <select
                value={form.clientId}
                onChange={e => setForm({ ...form, clientId: e.target.value })}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
              >
                <option value="">{t('selectClient')}</option>
                {(Array.isArray(clients) ? clients : []).map(c => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-muted-foreground">{t('billToIdLabel')}</label>
              <input
                type="number"
                placeholder={t('billToIdPlaceholder')}
                value={form.billToId}
                onChange={e => setForm({ ...form, billToId: e.target.value })}
                required
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-muted-foreground">{t('description')}</label>
              <input
                placeholder={t('descriptionPlaceholder')}
                value={form.descr}
                onChange={e => setForm({ ...form, descr: e.target.value })}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground">{t('invoiceDate')}</label>
                <input
                  type="date"
                  value={form.invDate}
                  onChange={e => setForm({ ...form, invDate: e.target.value })}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground">{t('paymentDue')}</label>
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
                <label className="block text-sm font-medium text-muted-foreground">{t('net')}</label>
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
                <label className="block text-sm font-medium text-muted-foreground">{t('vatPercent')}</label>
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
                <label className="block text-sm font-medium text-muted-foreground">{t('status')}</label>
                <select
                  value={form.status}
                  onChange={e => setForm({ ...form, status: e.target.value })}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
                >
                  <option value="A">{t('active')}</option>
                  <option value="C">{t('cancelled')}</option>
                  <option value="P">{t('paid')}</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground">{t('type')}</label>
                <select
                  value={form.invType}
                  onChange={e => setForm({ ...form, invType: e.target.value })}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
                >
                  <option value="I">{t('invoiceTypeInvoice')}</option>
                  <option value="C">{t('invoiceTypeCreditNote')}</option>
                  <option value="P">{t('invoiceTypeProforma')}</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground">{t('currency')}</label>
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
                {t('createInvoice')}
              </Button>
              <Button type="button" onClick={() => setShowForm(false)} className="flex-1">
                {tCommon('cancel')}
              </Button>
            </div>
          </form>
        </Modal>

        {loading ? (
          <p className="text-center text-muted-foreground py-8">{tCommon('loading')}</p>
        ) : (
          <div className="mt-6">
            <Table>
              <thead>
                <tr>
                  <Th>ID</Th>
                  <Th>{t('publisher')}</Th>
                  <Th>{t('billTo')}</Th>
                  <Th>{t('type')}</Th>
                  <Th>{t('description')}</Th>
                  <Th>{t('invoiceDate')}</Th>
                  <Th>{t('paymentDue')}</Th>
                  <Th className="text-right">{t('net')}</Th>
                  <Th>{t('status')}</Th>
                </tr>
              </thead>
              <tbody>
                {invoices.map(i => (
                  <tr key={i.id}>
                    <Td>
                      <Link href={`/simple-invoices/${i.id}`}>{i.id}</Link>
                    </Td>
                    <Td>{i.billToName || '-'}</Td>
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
                        <option value="A">{t('active')}</option>
                        <option value="C">{t('cancelled')}</option>
                        <option value="P">{t('paid')}</option>
                      </select>
                    </Td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                {t('total')}: <span className="font-semibold">{meta.total}</span> {t('records')}
              </div>
              <div className="flex items-center gap-4">
                <Pagination page={meta.page} pages={meta.pages} onPage={p => load(p)} />
                <div className="flex items-center gap-2">
                  <label className="text-sm font-medium text-muted-foreground whitespace-nowrap">{tCommon('perPage')}:</label>
                  <select
                    value={pageSize}
                    onChange={e => handlePageSizeChange(Number(e.target.value))}
                    className="px-3 py-2 border border-input rounded-md bg-background text-foreground h-9 text-sm"
                  >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}
      </Card>
    </div>
  )
}
