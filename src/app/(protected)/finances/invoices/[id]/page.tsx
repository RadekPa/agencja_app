"use client"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card } from '@/components/ui/card'

export default function InvoiceShow({ params }: { params: { id: string } }) {
  const id = params.id
  const [invoice, setInvoice] = useState<any | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      const res = await fetch(`/api/invoices/${id}`)
      if (!res.ok) { setInvoice(null); setLoading(false); return }
      const json = await res.json()
      setInvoice(json.invoice)
      setLoading(false)
    }
    load()
  }, [id])

  if (loading) return <p>Ładowanie...</p>
  if (!invoice) return <Card><p>Nie znaleziono faktury</p></Card>

  const invType = invoice.invType || 'FV'
  const invTypeLabel = {
    'FV': 'Faktura VAT',
    'RR': 'Rachunek',
    'KOR': 'Korekta',
    'ZAL': 'Zaliczka',
    'REC': 'Wznowienie VAT'
  }[invType] || invType

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-lg font-semibold text-card-foreground">
              {invTypeLabel} #{invoice.id}
            </h2>
            <p className="text-sm text-muted-foreground">{invoice.title}</p>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium">
              Status:
              <span className={`ml-2 px-3 py-1 rounded text-white ${invoice.status === 'ISSUED' ? 'bg-green-600' : 'bg-yellow-600'}`}>
                {invoice.status === 'ISSUED' ? 'Wystawiona' : 'Wersja robocza'}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-border pt-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Klient</h3>
              <div className="space-y-1">
                <div className="font-medium">{invoice.client?.name}</div>
                {invoice.client?.email && <div className="text-sm text-muted-foreground">{invoice.client.email}</div>}
                {invoice.client?.phone && <div className="text-sm text-muted-foreground">{invoice.client.phone}</div>}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Daty</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-muted-foreground">Data wystawienia:</span>
                  <div className="font-medium">{invoice.date ? new Intl.DateTimeFormat('pl-PL').format(new Date(invoice.date)) : '-'}</div>
                </div>
                {invoice.dateIssued && (
                  <div>
                    <span className="text-muted-foreground">Data wydania:</span>
                    <div className="font-medium">{new Intl.DateTimeFormat('pl-PL').format(new Date(invoice.dateIssued))}</div>
                  </div>
                )}
                {invoice.payDate && (
                  <div>
                    <span className="text-muted-foreground">Termin zapłaty:</span>
                    <div className="font-medium">{new Intl.DateTimeFormat('pl-PL').format(new Date(invoice.payDate))}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-muted/50 p-6 rounded-lg">
          <h3 className="font-semibold mb-4">Podsumowanie finansowe</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-muted-foreground">Kwota netto</div>
              <div className="text-2xl font-bold">{invoice.netAmt.toFixed(2)} PLN</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Stawka VAT</div>
              <div className="text-2xl font-bold">{invoice.vatPerc?.toFixed(2) || '0.00'}%</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">VAT</div>
              <div className="text-2xl font-bold">{invoice.vatAmt.toFixed(2)} PLN</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Kwota brutto</div>
              <div className="text-2xl font-bold text-primary">{invoice.grossAmt.toFixed(2)} PLN</div>
            </div>
          </div>
        </div>

        {invoice.fvDescription && (
          <div className="mt-6 border-t border-border pt-6">
            <h3 className="font-semibold mb-2">Opis</h3>
            <p className="text-sm text-muted-foreground">{invoice.fvDescription}</p>
          </div>
        )}

        <div className="mt-6 border-t border-border pt-6 grid grid-cols-3 gap-4 text-sm">
          {invoice.payType && (
            <div>
              <span className="text-muted-foreground">Rodzaj płatności:</span>
              <div className="font-medium">{invoice.payType}</div>
            </div>
          )}
          {invoice.vatCode && (
            <div>
              <span className="text-muted-foreground">Kod VAT:</span>
              <div className="font-medium">{invoice.vatCode}</div>
            </div>
          )}
          <div>
            <span className="text-muted-foreground">Typ faktury:</span>
            <div className="font-medium">{invTypeLabel}</div>
          </div>
        </div>
      </Card>
    </div>
  )
}
