"use client"
import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

type Client = {
  name?: string | null
  email?: string | null
  phone?: string | null
  address?: string | null
  city?: string | null
  postalCode?: string | null
  nip?: string | null
  regon?: string | null
}

type Invoice = {
  id: number
  invNr?: number | null
  fvType?: number | null
  origFVNr?: number | null
  client?: Client | null
  title?: string | null
  fvDescription?: string | null
  date?: string | null
  dateIssued?: string | null
  payDate?: string | null
  invAmt?: number | null
  graalPerc?: number | null
  xRate?: number | null
  vatCode?: string | null
  vatPerc?: number | null
  vatAmt?: number | null
  vatAmtCurr?: number | null
  netAmt?: number | null
  netAmtCurr?: number | null
  grossAmt?: number | null
  fvCurrency?: string | null
  status?: string | null
  invType?: string | null
  originalInvoice?: {
    invAmt?: number | null
    graalPerc?: number | null
    xRate?: number | null
    vatCode?: string | null
    vatAmtCurr?: number | null
    grossAmt?: number | null
    fvCurrency?: string | null
  } | null
}

const formatDate = (value?: string | null) => {
  if (!value) return '-'
  const parsed = new Date(value)
  if (Number.isNaN(parsed.getTime())) return '-'
  return new Intl.DateTimeFormat('pl-PL').format(parsed)
}

const formatMoney = (value?: number | null, currency = 'PLN') => {
  if (value === undefined || value === null) return '-'
  return `${value.toFixed(2)} ${currency}`
}

export default function InvoiceShow({ params }: { params: { id: string } }) {
  const id = params.id
  const t = useTranslations('finances')
  const tCommon = useTranslations('common')
  const [invoice, setInvoice] = useState<Invoice | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch(`/api/invoices/${id}`)
        if (!res.ok) {
          setInvoice(null)
          setError(t('invoiceNotFound'))
          return
        }
        const json = await res.json()
        setInvoice(json.invoice)
      } catch (err: any) {
        setError(err?.message ?? t('loadingError'))
        setInvoice(null)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [id])

  const invTypeLabel = useMemo(() => {
    const invType = invoice?.invType || 'FV'
    return {
      'FV': t('invoiceVAT'),
      'RR': t('receipt'),
      'KOR': t('correction'),
      'ZAL': t('advance'),
      'REC': t('reissue')
    }[invType] || invType
  }, [invoice?.invType, t])

  if (loading) return <p>{tCommon('loading')}</p>
  if (error) return <Card><p className="p-4 text-sm text-muted-foreground">{error}</p></Card>
  if (!invoice) return <Card><p className="p-4 text-sm text-muted-foreground">{t('invoiceNotFound')}</p></Card>

  const numberDisplay = invoice.id
  const invoiceReference = invoice.invNr ?? invoice.id
  const currency = invoice.fvCurrency || 'PLN'
  const originalCurrency = invoice.originalInvoice?.fvCurrency || currency
  const isCorrection = invoice.fvType === 2

  return (
    <div className="space-y-6">
      <div>
        <Button asChild variant="outline" size="sm">
          <Link href="/finances/invoices">← {t('backToList')}</Link>
        </Button>
      </div>
      <Card className="p-8 space-y-8">
        <div className="grid grid-cols-3 gap-4 items-start">
          <div aria-hidden />
          <div className="text-center">
            <div className="text-sm uppercase tracking-wide text-muted-foreground">{invTypeLabel}</div>
            <div className="text-2xl font-semibold">{t('invoiceVAT')}</div>
          </div>
          <div className="text-right">
            <div className="text-xs uppercase text-muted-foreground">{t('invoiceNumber')}</div>
            <div className="text-xl font-semibold">{numberDisplay}</div>
          </div>
        </div>

        <div className="flex flex-col items-end gap-2 text-right">
          <div>
            <div className="text-xs uppercase text-muted-foreground">{t('issueDate')}</div>
            <div className="font-medium">{formatDate(invoice.date)}</div>
          </div>
          <div>
            <div className="text-xs uppercase text-muted-foreground">{t('saleDate')}</div>
            <div className="font-medium">{formatDate(invoice.dateIssued)}</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-lg border border-border bg-muted/40 p-4 md:order-2">
            <div className="text-xs uppercase text-muted-foreground">{t('seller')}</div>
            <div className="mt-2 space-y-1 text-sm">
              <div className="font-semibold">Graal sp. z o.o.</div>
              <div>ul. Polnej Róy 26</div>
              <div>05-825 Opypy</div>
              <div>NIP/VAT ID: PL6771003643</div>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-muted/40 p-4 md:order-1">
            <div className="text-xs uppercase text-muted-foreground">{t('buyer')}</div>
            <div className="mt-2 space-y-1 text-sm">
              <div className="font-semibold">{invoice.client?.name || '-'}</div>
              <div>{invoice.client?.address || '-'}</div>
              {(invoice.client?.postalCode || invoice.client?.city) && (
                <div>{[invoice.client?.postalCode, invoice.client?.city].filter(Boolean).join(' ')}</div>
              )}
              <div>NIP/VAT ID: {invoice.client?.nip || invoice.client?.regon || '-'}</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-lg border border-dashed border-border p-4">
            <div className="text-xs uppercase text-muted-foreground">Invoice</div>
            <div className="text-lg font-semibold">{invoiceReference}</div>
          </div>
          <div className="rounded-lg border border-dashed border-border p-4">
            <div className="text-xs uppercase text-muted-foreground">{t('invoiceTitle')}</div>
            <div className="text-lg font-semibold">{invoice.fvDescription || invoice.title || '-'}</div>
          </div>
        </div>

        <div className="overflow-x-auto rounded-lg border">
          <table className="min-w-full divide-y divide-border text-sm">
            <thead className="bg-muted/60">
              <tr>
                <th className="px-4 py-3 text-left font-medium">{t('salesValue')}</th>
                <th className="px-4 py-3 text-left font-medium">{t('commission')}</th>
                <th className="px-4 py-3 text-left font-medium">{t('exchangeRate')}</th>
                <th className="px-4 py-3 text-left font-medium">{t('vatRate')}</th>
                <th className="px-4 py-3 text-left font-medium">{t('vatPercent')}</th>
                <th className="px-4 py-3 text-left font-medium">{t('paid')}</th>
              </tr>
            </thead>
            <tbody>
              {isCorrection && invoice.originalInvoice && (
                <>
                  <tr className="bg-muted/60">
                    <td className="px-4 py-2 font-semibold" colSpan={6}>{t('oldAmounts')}</td>
                  </tr>
                  <tr className="divide-x divide-border bg-muted/30">
                    <td className="px-4 py-3 font-medium">{formatMoney(invoice.originalInvoice.invAmt, originalCurrency)}</td>
                    <td className="px-4 py-3">{invoice.originalInvoice.graalPerc !== null && invoice.originalInvoice.graalPerc !== undefined ? `${invoice.originalInvoice.graalPerc.toFixed(2)}%` : '-'}</td>
                    <td className="px-4 py-3">{invoice.originalInvoice.xRate ? invoice.originalInvoice.xRate.toFixed(4) : '-'}</td>
                    <td className="px-4 py-3">{invoice.originalInvoice.vatCode || '-'}</td>
                    <td className="px-4 py-3">{invoice.originalInvoice.vatAmtCurr !== null && invoice.originalInvoice.vatAmtCurr !== undefined ? invoice.originalInvoice.vatAmtCurr.toFixed(2) : '-'}</td>
                    <td className="px-4 py-3 font-semibold">{formatMoney(invoice.originalInvoice.grossAmt, originalCurrency)}</td>
                  </tr>
                  <tr className="bg-muted/60">
                    <td className="px-4 py-2 font-semibold" colSpan={6}>{t('newAmounts')}</td>
                  </tr>
                </>
              )}
              <tr className="divide-x divide-border">
                <td className="px-4 py-3 font-medium">{formatMoney(invoice.invAmt, currency)}</td>
                <td className="px-4 py-3">{invoice.graalPerc !== null && invoice.graalPerc !== undefined ? `${invoice.graalPerc.toFixed(2)}%` : '-'}</td>
                <td className="px-4 py-3">{invoice.xRate ? invoice.xRate.toFixed(4) : '-'}</td>
                <td className="px-4 py-3">{invoice.vatCode || '-'}</td>
                <td className="px-4 py-3">{invoice.vatAmtCurr !== null && invoice.vatAmtCurr !== undefined ? invoice.vatAmtCurr.toFixed(2) : '-'}</td>
                <td className="px-4 py-3 font-semibold">{formatMoney(invoice.grossAmt, currency)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-col items-end gap-1 text-right">
          <div className="text-xs uppercase text-muted-foreground">{t('paidIn')}</div>
          <div className="text-lg font-semibold">{currency} {invoice.grossAmt?.toFixed(2) || '0.00'}</div>
        </div>
      </Card>
    </div>
  )
}
