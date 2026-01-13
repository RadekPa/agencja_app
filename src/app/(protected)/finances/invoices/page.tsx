"use client"
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Table, Th, Td } from '@/components/ui/Table'
import { Pagination } from '@/components/ui/Pagination'
import { Modal } from '@/components/ui/Modal'
import { Search, Plus, ArrowUpDown } from 'lucide-react'

interface Invoice {
  id: string
  clientId: string
  clientName: string
  title: string
  fvDescription?: string
  date: string
  currency?: string
  netAmt: number
  netAmtCurr?: number
  vatAmt: number
  vatAmtCurr?: number
  grossAmt: number
  status: string
  typeCode?: string
}

interface Customer {
  id: string
  name: string
}

interface Currency {
  id: string
  desc: string
}

interface FiltersState {
  title: string
  currency: string
  dateFrom: string
  dateTo: string
  clientName: string
}

interface PaginationMeta {
  page: number
  pages: number
  total: number
  limit: number
}

const CACHE_FILTERS_KEY = 'invoices_filters_cache'
const CACHE_PAGE_SIZE_KEY = 'invoices_page_size_cache'
const CACHE_CLIENT_SEARCH_KEY = 'invoices_client_search_cache'
const CACHE_CURRENCY_SEARCH_KEY = 'invoices_currency_search_cache'

// Helper to safely access localStorage
const isLocalStorageAvailable = () => {
  try {
    if (typeof window === 'undefined') return false
    const test = '__test__'
    localStorage.setItem(test, test)
    localStorage.removeItem(test)
    return true
  } catch (e) {
    return false
  }
}

const getCachedItem = (key: string) => {
  if (!isLocalStorageAvailable()) return null
  try {
    return localStorage.getItem(key)
  } catch (e) {
    console.error(`Error reading ${key} from cache:`, e)
    return null
  }
}

const setCachedItem = (key: string, value: string) => {
  if (!isLocalStorageAvailable()) return
  try {
    localStorage.setItem(key, value)
  } catch (e) {
    console.error(`Error writing ${key} to cache:`, e)
  }
}

export default function InvoicesPage() {
  const t = useTranslations('finances')
  const tCommon = useTranslations('common')
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [clients, setClients] = useState<Customer[]>([])
  const [currencies, setCurrencies] = useState<Currency[]>([])
  const [loading, setLoading] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [meta, setMeta] = useState<PaginationMeta>({ page: 1, pages: 1, total: 0, limit: 10 })
  const [sortBy, setSortBy] = useState('date')
  const [sortDirection, setSortDirection] = useState('DESC')
  const [pageSize, setPageSize] = useState(() => {
    const cached = getCachedItem(CACHE_PAGE_SIZE_KEY)
    return cached ? Number(cached) : 10
  })
  const [clientSearch, setClientSearch] = useState(() => {
    return getCachedItem(CACHE_CLIENT_SEARCH_KEY) || ''
  })
  const [currencySearch, setCurrencySearch] = useState(() => {
    return getCachedItem(CACHE_CURRENCY_SEARCH_KEY) || ''
  })
  const [filters, setFilters] = useState<FiltersState>(() => {
    const cached = getCachedItem(CACHE_FILTERS_KEY)
    if (cached) {
      try {
        return JSON.parse(cached)
      } catch (e) {
        console.error('Error parsing cached filters:', e)
      }
    }
    return {
      title: '',
      currency: '',
      dateFrom: '',
      dateTo: '',
      clientName: ''
    }
  })
  const [form, setForm] = useState({
    clientId: '',
    title: '',
    date: new Date().toISOString().split('T')[0],
    payDate: '',
    netAmt: '',
    vatPerc: '',
    invType: 'FV',
    status: 'ISSUED'
  })

  const load = (page = 1) => {
    applyFilters(page)
  }

  const handlePageSizeChange = (newPageSize: number) => {
    setPageSize(newPageSize)
    // applyFilters will be triggered by useEffect when pageSize changes
  }

  const applyFilters = async (pageNum = 1) => {
    setLoading(true)
    try {
      const params = new URLSearchParams({
        page: pageNum.toString(),
        pageSize: pageSize.toString(),
        sort: sortBy,
        order: sortDirection,
        ...(filters.title && { title: filters.title }),
        ...(filters.currency && { currency: filters.currency }),
        ...(filters.dateFrom && { dateFrom: filters.dateFrom }),
        ...(filters.dateTo && { dateTo: filters.dateTo }),
        ...(filters.clientName && { clientName: filters.clientName })
      })

      const response = await fetch(`/api/invoices?${params}`)
      const data = await response.json()
      setInvoices(data.data || [])
      setMeta(data.meta)
    } catch (error) {
      console.error('Error loading invoices:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleClientInput = (value: string) => {
    setClientSearch(value)
    
    // Jeśli pole jest puste, wyczyść filtr
    if (!value) {
      setFilters(prev => ({ ...prev, clientName: '' }))
      return
    }
    
    // Spróbuj znaleźć dokładny match w liście klientów
    const selected = clients.find(c => c.name.toLowerCase() === value.toLowerCase())
    if (selected) {
      setFilters(prev => ({ ...prev, clientName: selected.name }))
    } else {
      // Jeśli nie ma dokładnego matcha, ustaw wpisaną wartość
      setFilters(prev => ({ ...prev, clientName: value }))
    }
  }

  const handleCurrencyInput = (value: string) => {
    setCurrencySearch(value)
    
    // Jeśli pole jest puste, wyczyść filtr
    if (!value) {
      setFilters(prev => ({ ...prev, currency: '' }))
      return
    }
    
    // Spróbuj znaleźć walutę po opisie lub ID
    const selected = currencies.find(c => c.desc.toLowerCase() === value.toLowerCase() || c.id.toLowerCase() === value.toLowerCase())
    if (selected) {
      setFilters(prev => ({ ...prev, currency: selected.id }))
    } else {
      // Jeśli nie znaleziono, ustaw wpisaną wartość
      setFilters(prev => ({ ...prev, currency: value }))
    }
  }

  const fetchClients = async (search?: string) => {
    try {
      const params = search ? `?search=${search}` : ''
      const response = await fetch(`/api/customers${params}`)
      const json = await response.json()
      // API zwraca { data: [...], meta: {...} }
      const clientList = Array.isArray(json.data) ? json.data : (Array.isArray(json) ? json : [])
      setClients(clientList)
    } catch (error) {
      console.error('Error fetching clients:', error)
    }
  }

  const fetchFilters = async (currencySearch?: string) => {
    try {
      const params = currencySearch ? `?currencySearch=${currencySearch}` : ''
      const response = await fetch(`/api/invoices/filters${params}`)
      const data = await response.json()
      setCurrencies(data.currencies || [])
    } catch (error) {
      console.error('Error fetching filters:', error)
    }
  }

  useEffect(() => {
    // Fetch clients and filters data, then load invoices with cached filters
    fetchClients()
    fetchFilters()
    applyFilters(1)
  }, [])

  useEffect(() => {
    // Reload data when page size changes
    applyFilters(1)
  }, [pageSize])

  useEffect(() => {
    // Reload data when filters change - debounced by 300ms
    const timer = setTimeout(() => {
      applyFilters(1)
    }, 300)
    return () => clearTimeout(timer)
  }, [filters])

  useEffect(() => {
    // Reload when sort changes - slightly debounced
    const timer = setTimeout(() => {
      applyFilters(1)
    }, 50)
    return () => clearTimeout(timer)
  }, [sortBy, sortDirection])

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchClients(clientSearch)
    }, 300)
    return () => clearTimeout(timer)
  }, [clientSearch])

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchFilters(currencySearch)
    }, 300)
    return () => clearTimeout(timer)
  }, [currencySearch])

  // Save filters to cache whenever they change
  useEffect(() => {
    setCachedItem(CACHE_FILTERS_KEY, JSON.stringify(filters))
  }, [filters])

  // Save page size to cache whenever it changes
  useEffect(() => {
    setCachedItem(CACHE_PAGE_SIZE_KEY, pageSize.toString())
  }, [pageSize])

  // Save client search to cache
  useEffect(() => {
    setCachedItem(CACHE_CLIENT_SEARCH_KEY, clientSearch)
  }, [clientSearch])

  // Save currency search to cache
  useEffect(() => {
    setCachedItem(CACHE_CURRENCY_SEARCH_KEY, currencySearch)
  }, [currencySearch])

  const resetFilters = () => {
    // Reset filters and search terms but keep page size
    setFilters({ title: '', currency: '', dateFrom: '', dateTo: '', clientName: '' })
    setClientSearch('')
    setCurrencySearch('')
    setSortBy('date')
    setSortDirection('DESC')
  }

  const toggleSort = (field: string) => {
    if (sortBy === field) {
      setSortDirection(sortDirection === 'ASC' ? 'DESC' : 'ASC')
    } else {
      setSortBy(field)
      setSortDirection('ASC')
    }
    // applyFilters will be triggered by useEffect when sortBy/sortDirection change
  }

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/invoices', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (response.ok) {
        setShowForm(false)
        setForm({
          clientId: '',
          title: '',
          date: new Date().toISOString().split('T')[0],
          payDate: '',
          netAmt: '',
          vatPerc: '',
          invType: 'FV',
          status: 'ISSUED'
        })
        load(1)
      }
    } catch (error) {
      console.error('Error creating invoice:', error)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{t('invoiceList')}</h1>
        <Button onClick={() => setShowForm(true)} variant="primary" className="gap-2">
          <Plus className="h-4 w-4" />
          {t('newInvoice')}
        </Button>
      </div>

      {/* Filters Card */}
      <Card className="p-6">
        <div className="space-y-4">
          {/* Filters - first row: Klient, Tytuł, Waluta, Data od, Data do */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-muted-foreground">{t('client')}</label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  list="clients-datalist"
                  placeholder={tCommon('search')}
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
              <label className="block text-sm font-medium text-muted-foreground">{t('invoiceTitle')}</label>
              <Input
                placeholder={t('invoiceTitlePlaceholder')}
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
                  placeholder={tCommon('search')}
                  value={currencySearch}
                  onChange={e => handleCurrencyInput(e.target.value)}
                  className="pl-9"
                />
                <datalist id="currencies-datalist">
                  {(Array.isArray(currencies) ? currencies : []).map(c => (
                    <option key={c.id} value={c.desc || c.id} />
                  ))}
                </datalist>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-muted-foreground">{tCommon('dateFrom')}</label>
              <input
                type="date"
                value={filters.dateFrom}
                onChange={e => setFilters({ ...filters, dateFrom: e.target.value })}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground h-9"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-muted-foreground">{tCommon('dateTo')}</label>
              <input
                type="date"
                value={filters.dateTo}
                onChange={e => setFilters({ ...filters, dateTo: e.target.value })}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground h-9"
              />
            </div>
          </div>

          {/* Second row: Buttons */}
          <div className="grid gap-4 md:grid-cols-5 items-end">
            <div className="md:col-start-4">
              <Button type="button" variant="primary" className="w-full h-9" onClick={() => applyFilters(1)}>{tCommon('search')}</Button>
            </div>
            <div>
              <Button type="button" onClick={resetFilters} variant="outline" className="w-full h-9">{tCommon('cancel')}</Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Modal */}
      <Modal isOpen={showForm} onClose={() => setShowForm(false)} title={t('addNewInvoice')}>
        <form onSubmit={handleCreate} className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-muted-foreground">{t('client')}</label>
            <select
              value={form.clientId}
              onChange={e => setForm({ ...form, clientId: e.target.value })}
              required
              className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
            >
              <option value="">{tCommon('selectClient')}</option>
              {(Array.isArray(clients) ? clients : []).map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-muted-foreground">{t('invoiceTitle')}</label>
            <input
              placeholder={t('invoiceTitlePlaceholder')}
              value={form.title}
              onChange={e => setForm({ ...form, title: e.target.value })}
              className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-muted-foreground">{t('issueDate')}</label>
              <input
                type="date"
                value={form.date}
                onChange={e => setForm({ ...form, date: e.target.value })}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-muted-foreground">{t('paymentDate')}</label>
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
              <label className="block text-sm font-medium text-muted-foreground">{t('net')}</label>
              <input
                placeholder="0.00"
                type="number"
                step="0.01"
                value={form.netAmt}
                onChange={e => setForm({ ...form, netAmt: e.target.value })}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-muted-foreground">{t('vatPercent')}</label>
              <input
                placeholder="0.00"
                type="number"
                step="0.01"
                value={form.vatPerc}
                onChange={e => setForm({ ...form, vatPerc: e.target.value })}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-muted-foreground">{t('status')}</label>
              <select
                value={form.status}
                onChange={e => setForm({ ...form, status: e.target.value })}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
              >
                <option value="ISSUED">{t('issued')}</option>
                <option value="DRAFT">{t('draft')}</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-muted-foreground">{t('invoiceType')}</label>
              <select
                value={form.invType}
                onChange={e => setForm({ ...form, invType: e.target.value })}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
              >
                <option value="FV">{t('invoiceVAT')}</option>
                <option value="RR">{t('receipt')}</option>
                <option value="KOR">{t('correction')}</option>
                <option value="ZAL">{t('advance')}</option>
                <option value="REC">{t('reissue')}</option>
              </select>
            </div>
          </div>

          <div className="flex gap-2 pt-4 border-t border-border">
            <Button variant="primary" type="submit" className="flex-1">{t('createInvoice')}</Button>
            <Button type="button" onClick={() => setShowForm(false)} className="flex-1">{tCommon('cancel')}</Button>
          </div>
        </form>
      </Modal>

      {/* Table Card */}
      <Card className="p-6">
        {loading ? (
          <p className="text-center text-muted-foreground py-8">{tCommon('loading')}</p>
        ) : invoices.length === 0 ? (
          <p className="text-center text-muted-foreground py-8">{t('noInvoices')}</p>
        ) : (
          <>
            <div className="overflow-x-auto">
              <Table>
                <thead>
                  <tr>
                    <Th className="cursor-pointer hover:bg-muted" onClick={() => toggleSort('id')}>
                      <div className="flex items-center gap-2">
                        {t('invoiceNumber')} {sortBy === 'id' && <ArrowUpDown className="h-3 w-3" />}
                      </div>
                    </Th>
                    <Th>{t('client')}</Th>
                    <Th>{t('invoiceTitle')}</Th>
                    <Th className="cursor-pointer hover:bg-muted" onClick={() => toggleSort('date')}>
                      <div className="flex items-center gap-2">
                        {t('issueDate')} {sortBy === 'date' && <ArrowUpDown className="h-3 w-3" />}
                      </div>
                    </Th>
                    <Th>{t('currency')}</Th>
                    <Th className="text-right">{t('netAmount')}</Th>
                    <Th className="text-right">{t('vat')}</Th>
                    <Th className="cursor-pointer hover:bg-muted text-right" onClick={() => toggleSort('grossAmt')}>
                      <div className="flex items-center justify-end gap-2">
                        {t('grossAmount')} {sortBy === 'grossAmt' && <ArrowUpDown className="h-3 w-3" />}
                      </div>
                    </Th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map(i => {
                    return (
                      <tr key={i.id}>
                        <Td><Link href={`/finances/invoices/${i.id}`} className="text-primary hover:underline">{i.id}</Link></Td>
                        <Td className="text-sm">{i.clientName}</Td>
                        <Td><Link href={`/finances/invoices/${i.id}`} className="text-primary hover:underline">{i.fvDescription || i.title}</Link></Td>
                        <Td className="text-sm">{new Intl.DateTimeFormat('pl-PL').format(new Date(i.date))}</Td>
                        <Td className="text-sm">{i.currency || '-'}</Td>
                        <Td className="text-right font-medium">{(i.netAmtCurr ?? i.netAmt ?? 0).toFixed(2)}</Td>
                        <Td className="text-right font-medium">{(i.vatAmtCurr ?? i.vatAmt ?? 0).toFixed(2)}</Td>
                        <Td className="text-right font-medium">{i.grossAmt.toFixed(2)}</Td>
                      </tr>
                    )
                  })}
                </tbody>
              </Table>
            </div>
            {meta.pages > 1 && (
              <div className="mt-6 flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  {t('total')}: <span className="font-semibold">{meta.total}</span> {t('records')}
                </div>
                <div className="flex items-center gap-4">
                  <Pagination page={meta.page} pages={meta.pages} onPage={load} />
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
            )}
          </>
        )}
      </Card>
    </div>
  )
}
