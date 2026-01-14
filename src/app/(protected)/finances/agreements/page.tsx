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

interface Agreement {
  id: string
  customerId: string
  customerName: string
  titleName?: string
  date: string
  currency?: string
  commission: number
  status: string
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
  customerName: string
  currency: string
  dateFrom: string
  dateTo: string
  status: string
}

interface PaginationMeta {
  page: number
  pages: number
  total: number
  limit: number
}

const CACHE_FILTERS_KEY = 'agreements_filters_cache'
const CACHE_PAGE_SIZE_KEY = 'agreements_page_size_cache'
const CACHE_CUSTOMER_SEARCH_KEY = 'agreements_customer_search_cache'
const CACHE_CURRENCY_SEARCH_KEY = 'agreements_currency_search_cache'

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

export default function AgreementsPage() {
  const t = useTranslations('finances')
  const tCommon = useTranslations('common')
  const [agreements, setAgreements] = useState<Agreement[]>([])
  const [customers, setCustomers] = useState<Customer[]>([])
  const [currencies, setCurrencies] = useState<Currency[]>([])
  const [loading, setLoading] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [meta, setMeta] = useState<PaginationMeta>({ page: 1, pages: 1, total: 0, limit: 10 })
  const [sortBy, setSortBy] = useState('AgrDate')
  const [sortDirection, setSortDirection] = useState('DESC')
  const [pageSize, setPageSize] = useState(() => {
    const cached = getCachedItem(CACHE_PAGE_SIZE_KEY)
    return cached ? Number(cached) : 10
  })
  const [customerSearch, setCustomerSearch] = useState(() => {
    return getCachedItem(CACHE_CUSTOMER_SEARCH_KEY) || ''
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
      customerName: '',
      currency: '',
      dateFrom: '',
      dateTo: '',
      status: ''
    }
  })
  const [form, setForm] = useState({
    custId: '',
    titleId: '',
    agrDate: new Date().toISOString().split('T')[0],
    commission: '',
    status: 'A',
    currId: 'USD'
  })

  const load = (page = 1) => {
    applyFilters(page)
  }

  const handlePageSizeChange = (newPageSize: number) => {
    setPageSize(newPageSize)
  }

  const applyFilters = async (pageNum = 1) => {
    setLoading(true)
    try {
      const params = new URLSearchParams({
        page: pageNum.toString(),
        pageSize: pageSize.toString(),
        sort: sortBy,
        order: sortDirection,
        ...(filters.customerName && { customerName: filters.customerName }),
        ...(filters.currency && { currency: filters.currency }),
        ...(filters.dateFrom && { dateFrom: filters.dateFrom }),
        ...(filters.dateTo && { dateTo: filters.dateTo }),
        ...(filters.status && { status: filters.status })
      })

      const response = await fetch(`/api/agreements?${params}`)
      const data = await response.json()
      setAgreements(data.data || [])
      setMeta(data.meta)
    } catch (error) {
      console.error('Error loading agreements:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleCustomerInput = (value: string) => {
    setCustomerSearch(value)
    
    if (!value) {
      setFilters(prev => ({ ...prev, customerName: '' }))
      return
    }
    
    const selected = customers.find(c => c.name.toLowerCase() === value.toLowerCase())
    if (selected) {
      setFilters(prev => ({ ...prev, customerName: selected.name }))
    } else {
      setFilters(prev => ({ ...prev, customerName: value }))
    }
  }

  const handleCurrencyInput = (value: string) => {
    setCurrencySearch(value)
    
    if (!value) {
      setFilters(prev => ({ ...prev, currency: '' }))
      return
    }
    
    const selected = currencies.find(c => c.desc.toLowerCase() === value.toLowerCase() || c.id.toLowerCase() === value.toLowerCase())
    if (selected) {
      setFilters(prev => ({ ...prev, currency: selected.id }))
    } else {
      setFilters(prev => ({ ...prev, currency: value }))
    }
  }

  const fetchCustomers = async (search?: string) => {
    try {
      const params = search ? `?search=${search}` : ''
      const response = await fetch(`/api/customers${params}`)
      const json = await response.json()
      const customerList = Array.isArray(json.data) ? json.data : (Array.isArray(json) ? json : [])
      setCustomers(customerList)
    } catch (error) {
      console.error('Error fetching customers:', error)
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
    fetchCustomers()
    fetchFilters()
    applyFilters(1)
  }, [])

  useEffect(() => {
    applyFilters(1)
  }, [pageSize])

  useEffect(() => {
    const timer = setTimeout(() => {
      applyFilters(1)
    }, 300)
    return () => clearTimeout(timer)
  }, [filters])

  useEffect(() => {
    const timer = setTimeout(() => {
      applyFilters(1)
    }, 50)
    return () => clearTimeout(timer)
  }, [sortBy, sortDirection])

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchCustomers(customerSearch)
    }, 300)
    return () => clearTimeout(timer)
  }, [customerSearch])

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchFilters(currencySearch)
    }, 300)
    return () => clearTimeout(timer)
  }, [currencySearch])

  useEffect(() => {
    setCachedItem(CACHE_FILTERS_KEY, JSON.stringify(filters))
  }, [filters])

  useEffect(() => {
    setCachedItem(CACHE_PAGE_SIZE_KEY, pageSize.toString())
  }, [pageSize])

  useEffect(() => {
    setCachedItem(CACHE_CUSTOMER_SEARCH_KEY, customerSearch)
  }, [customerSearch])

  useEffect(() => {
    setCachedItem(CACHE_CURRENCY_SEARCH_KEY, currencySearch)
  }, [currencySearch])

  const resetFilters = () => {
    setFilters({ customerName: '', currency: '', dateFrom: '', dateTo: '', status: '' })
    setCustomerSearch('')
    setCurrencySearch('')
    setSortBy('AgrDate')
    setSortDirection('DESC')
  }

  const toggleSort = (field: string) => {
    if (sortBy === field) {
      setSortDirection(sortDirection === 'ASC' ? 'DESC' : 'ASC')
    } else {
      setSortBy(field)
      setSortDirection('ASC')
    }
  }

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/agreements', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (response.ok) {
        setShowForm(false)
        setForm({
          custId: '',
          titleId: '',
          agrDate: new Date().toISOString().split('T')[0],
          commission: '',
          status: 'A',
          currId: 'USD'
        })
        load(1)
      }
    } catch (error) {
      console.error('Error creating agreement:', error)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Umowy</h1>
        <Button onClick={() => setShowForm(true)} variant="primary" className="gap-2">
          <Plus className="h-4 w-4" />
          Nowa umowa
        </Button>
      </div>

      {/* Filters Card */}
      <Card className="p-6">
        <div className="space-y-4">
          {/* Filters - first row: Klient, Waluta, Data od, Data do, Status */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-muted-foreground">{t('client')}</label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  list="customers-datalist"
                  placeholder={tCommon('search')}
                  value={customerSearch}
                  onChange={e => handleCustomerInput(e.target.value)}
                  className="pl-9"
                />
                <datalist id="customers-datalist">
                  {(Array.isArray(customers) ? customers : []).map(c => (
                    <option key={c.id} value={c.name || ''} />
                  ))}
                </datalist>
              </div>
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

            <div className="space-y-2">
              <label className="block text-sm font-medium text-muted-foreground">Status</label>
              <select
                value={filters.status}
                onChange={e => setFilters({ ...filters, status: e.target.value })}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground h-9"
              >
                <option value="">Wszystkie</option>
                <option value="A">Aktywna</option>
                <option value="I">Nieaktywna</option>
              </select>
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
      <Modal isOpen={showForm} onClose={() => setShowForm(false)} title="Nowa umowa">
        <form onSubmit={handleCreate} className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-muted-foreground">{t('client')}</label>
            <select
              value={form.custId}
              onChange={e => setForm({ ...form, custId: e.target.value })}
              required
              className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
            >
              <option value="">{tCommon('selectClient')}</option>
              {(Array.isArray(customers) ? customers : []).map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-muted-foreground">Tytuł</label>
            <input
              placeholder="ID lub nazwa tytułu"
              value={form.titleId}
              onChange={e => setForm({ ...form, titleId: e.target.value })}
              className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-muted-foreground">Data umowy</label>
              <input
                type="date"
                value={form.agrDate}
                onChange={e => setForm({ ...form, agrDate: e.target.value })}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-muted-foreground">{t('currency')}</label>
              <select
                value={form.currId}
                onChange={e => setForm({ ...form, currId: e.target.value })}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="PLN">PLN</option>
                <option value="GBP">GBP</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-muted-foreground">Prowizja</label>
              <input
                placeholder="0.00"
                type="number"
                step="0.01"
                value={form.commission}
                onChange={e => setForm({ ...form, commission: e.target.value })}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-muted-foreground">Status</label>
              <select
                value={form.status}
                onChange={e => setForm({ ...form, status: e.target.value })}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
              >
                <option value="A">Aktywna</option>
                <option value="I">Nieaktywna</option>
              </select>
            </div>
          </div>

          <div className="flex gap-2 pt-4 border-t border-border">
            <Button variant="primary" type="submit" className="flex-1">Utwórz umowę</Button>
            <Button type="button" onClick={() => setShowForm(false)} className="flex-1">{tCommon('cancel')}</Button>
          </div>
        </form>
      </Modal>

      {/* Table Card */}
      <Card className="p-6">
        {loading ? (
          <p className="text-center text-muted-foreground py-8">{tCommon('loading')}</p>
        ) : agreements.length === 0 ? (
          <p className="text-center text-muted-foreground py-8">Brak umów do wyświetlenia</p>
        ) : (
          <>
            <div className="overflow-x-auto">
              <Table>
                <thead>
                  <tr>
                    <Th className="cursor-pointer hover:bg-muted" onClick={() => toggleSort('AgrID')}>
                      <div className="flex items-center gap-2">
                        ID {sortBy === 'AgrID' && <ArrowUpDown className="h-3 w-3" />}
                      </div>
                    </Th>
                    <Th>{t('client')}</Th>
                    <Th>Tytuł</Th>
                    <Th className="cursor-pointer hover:bg-muted" onClick={() => toggleSort('AgrDate')}>
                      <div className="flex items-center gap-2">
                        Data {sortBy === 'AgrDate' && <ArrowUpDown className="h-3 w-3" />}
                      </div>
                    </Th>
                    <Th>{t('currency')}</Th>
                    <Th className="text-right cursor-pointer hover:bg-muted" onClick={() => toggleSort('Commission')}>
                      <div className="flex items-center justify-end gap-2">
                        Prowizja {sortBy === 'Commission' && <ArrowUpDown className="h-3 w-3" />}
                      </div>
                    </Th>
                    <Th>Status</Th>
                  </tr>
                </thead>
                <tbody>
                  {agreements.map(a => {
                    return (
                      <tr key={a.id}>
                        <Td><Link href={`/finances/agreements/${a.id}`} className="text-primary hover:underline">{a.id}</Link></Td>
                        <Td className="text-sm">{a.customerName}</Td>
                        <Td><Link href={`/finances/agreements/${a.id}`} className="text-primary hover:underline">{a.titleName || '-'}</Link></Td>
                        <Td className="text-sm">{new Intl.DateTimeFormat('pl-PL').format(new Date(a.date))}</Td>
                        <Td className="text-sm">{a.currency || '-'}</Td>
                        <Td className="text-right font-medium">{(a.commission ?? 0).toFixed(2)}</Td>
                        <Td className="text-sm">{a.status === 'A' ? '✓ Aktywna' : '✗ Nieaktywna'}</Td>
                      </tr>
                    )
                  })}
                </tbody>
              </Table>
            </div>
            {meta.pages > 1 && (
              <div className="mt-6 flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Razem: <span className="font-semibold">{meta.total}</span> rekordów
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
