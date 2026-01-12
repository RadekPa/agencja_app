"use client"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function SimpleInvoiceShow({ params }: { params: { id: string } }) {
  const id = params.id
  const [invoice, setInvoice] = useState<any | null>(null)
  const [loading, setLoading] = useState(false)
  const [editing, setEditing] = useState(false)
  const [editForm, setEditForm] = useState<any>({})
  const router = useRouter()

  useEffect(() => {
    load()
  }, [id])

  const load = async () => {
    setLoading(true)
    const res = await fetch(`/api/simple-invoices/${id}`)
    if (!res.ok) {
      setInvoice(null)
      setLoading(false)
      return
    }
    const json = await res.json()
    setInvoice(json)
    setEditForm(json)
    setLoading(false)
  }

  const handleUpdate = async (e: any) => {
    e.preventDefault()
    const res = await fetch(`/api/simple-invoices/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        status: editForm.status,
        remarks: editForm.remarks,
        descr: editForm.descr,
        totalInvNET: Number(editForm.totalInvNET),
        vatPerc: Number(editForm.vatPerc),
        taxValue: Number(editForm.taxValue),
        balance: Number(editForm.balance),
        dateDue: editForm.dateDue,
        currId: editForm.currId,
        termDD: Number(editForm.termDD)
      })
    })
    if (res.ok) {
      setEditing(false)
      load()
    } else {
      alert('Błąd aktualizacji faktury')
    }
  }

  const handleDelete = async () => {
    if (!confirm('Czy na pewno chcesz usunąć tę fakturę?')) return
    const res = await fetch(`/api/simple-invoices/${id}`, { method: 'DELETE' })
    if (res.ok) {
      router.push('/simple-invoices')
    } else {
      alert('Błąd usuwania faktury')
    }
  }

  if (loading) return <p className="text-center py-8">Ładowanie...</p>
  if (!invoice) return <Card className="p-6"><p>Nie znaleziono faktury</p></Card>

  const invTypeLabelMap: Record<string, string> = {
    'I': 'Invoice',
    'C': 'Credit Note',
    'P': 'Proforma'
  }
  const invTypeLabel = invTypeLabelMap[invoice.invType] || invoice.invType

  const statusLabelMap: Record<string, string> = {
    'A': 'Aktywna',
    'C': 'Anulowana',
    'P': 'Zapłacona',
    'D': 'Draft'
  }
  const statusLabel = statusLabelMap[invoice.status] || invoice.status

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-card-foreground">
              {invTypeLabel} #{invoice.id}
            </h2>
            <p className="text-sm text-muted-foreground mt-1">{invoice.descr || 'Brak opisu'}</p>
          </div>
          <div className="flex gap-2">
            {!editing ? (
              <>
                <Button variant="primary" onClick={() => setEditing(true)}>
                  Edytuj
                </Button>
                <Button variant="destructive" onClick={handleDelete}>
                  Usuń
                </Button>
              </>
            ) : (
              <Button variant="outline" onClick={() => setEditing(false)}>
                Anuluj
              </Button>
            )}
          </div>
        </div>

        {editing ? (
          <form onSubmit={handleUpdate} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground">Status</label>
                <select
                  value={editForm.status}
                  onChange={e => setEditForm({ ...editForm, status: e.target.value })}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
                >
                  <option value="A">Aktywna</option>
                  <option value="C">Anulowana</option>
                  <option value="P">Zapłacona</option>
                  <option value="D">Draft</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground">Waluta</label>
                <input
                  value={editForm.currId || ''}
                  onChange={e => setEditForm({ ...editForm, currId: e.target.value })}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-muted-foreground">Opis</label>
              <input
                value={editForm.descr || ''}
                onChange={e => setEditForm({ ...editForm, descr: e.target.value })}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-muted-foreground">Uwagi</label>
              <textarea
                value={editForm.remarks || ''}
                onChange={e => setEditForm({ ...editForm, remarks: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground">Termin zapłaty</label>
                <input
                  type="date"
                  value={editForm.dateDue ? editForm.dateDue.split('T')[0] : ''}
                  onChange={e => setEditForm({ ...editForm, dateDue: e.target.value })}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground">Termin płatności (dni)</label>
                <input
                  type="number"
                  value={editForm.termDD || ''}
                  onChange={e => setEditForm({ ...editForm, termDD: e.target.value })}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground">Netto</label>
                <input
                  type="number"
                  step="0.01"
                  value={editForm.totalInvNET || ''}
                  onChange={e => setEditForm({ ...editForm, totalInvNET: e.target.value })}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground">VAT %</label>
                <input
                  type="number"
                  value={editForm.vatPerc || ''}
                  onChange={e => setEditForm({ ...editForm, vatPerc: e.target.value })}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground">Wartość podatku</label>
                <input
                  type="number"
                  step="0.01"
                  value={editForm.taxValue || ''}
                  onChange={e => setEditForm({ ...editForm, taxValue: e.target.value })}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground">Saldo</label>
                <input
                  type="number"
                  step="0.01"
                  value={editForm.balance || ''}
                  onChange={e => setEditForm({ ...editForm, balance: e.target.value })}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>

            <div className="flex gap-2 pt-4 border-t border-border">
              <Button type="submit" variant="primary" className="flex-1">
                Zapisz zmiany
              </Button>
              <Button type="button" onClick={() => setEditing(false)} className="flex-1">
                Anuluj
              </Button>
            </div>
          </form>
        ) : (
          <>
            <div className="flex justify-between items-start mb-6">
              <div className="text-right">
                <div className="text-sm font-medium">
                  Status:
                  <span
                    className={`ml-2 px-3 py-1 rounded text-white ${
                      invoice.status === 'P'
                        ? 'bg-green-600'
                        : invoice.status === 'A'
                        ? 'bg-blue-600'
                        : invoice.status === 'C'
                        ? 'bg-red-600'
                        : 'bg-yellow-600'
                    }`}
                  >
                    {statusLabel}
                  </span>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Klient</h3>
                  <div className="space-y-1">
                    <div className="font-medium">{invoice.clientName || 'Brak danych'}</div>
                    {invoice.clientEmail && <div className="text-sm text-muted-foreground">{invoice.clientEmail}</div>}
                    {invoice.clientPhone && <div className="text-sm text-muted-foreground">{invoice.clientPhone}</div>}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Daty</h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Data faktury:</span>
                      <div className="font-medium">
                        {invoice.invDate ? new Intl.DateTimeFormat('pl-PL').format(new Date(invoice.invDate)) : '-'}
                      </div>
                    </div>
                    {invoice.dateDue && (
                      <div>
                        <span className="text-muted-foreground">Termin zapłaty:</span>
                        <div className="font-medium">
                          {new Intl.DateTimeFormat('pl-PL').format(new Date(invoice.dateDue))}
                        </div>
                      </div>
                    )}
                    <div>
                      <span className="text-muted-foreground">Termin płatności:</span>
                      <div className="font-medium">{invoice.termDD || 0} dni</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-muted/50 p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Podsumowanie finansowe</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-muted-foreground">Kwota netto</div>
                  <div className="text-2xl font-bold">
                    {invoice.totalInvNET?.toFixed(2) || '0.00'} {invoice.currId || 'PLN'}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Stawka VAT</div>
                  <div className="text-2xl font-bold">{invoice.vatPerc || 0}%</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Wartość podatku</div>
                  <div className="text-2xl font-bold">
                    {invoice.taxValue?.toFixed(2) || '0.00'} {invoice.currId || 'PLN'}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Saldo</div>
                  <div className="text-2xl font-bold text-primary">
                    {invoice.balance?.toFixed(2) || '0.00'} {invoice.currId || 'PLN'}
                  </div>
                </div>
              </div>
            </div>

            {invoice.remarks && (
              <div className="mt-6 border-t border-border pt-6">
                <h3 className="font-semibold mb-2">Uwagi</h3>
                <p className="text-sm text-muted-foreground whitespace-pre-wrap">{invoice.remarks}</p>
              </div>
            )}

            <div className="mt-6 border-t border-border pt-6 grid grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Bill To ID:</span>
                <div className="font-medium">{invoice.billToId}</div>
              </div>
              {invoice.shipToId && (
                <div>
                  <span className="text-muted-foreground">Ship To ID:</span>
                  <div className="font-medium">{invoice.shipToId}</div>
                </div>
              )}
              <div>
                <span className="text-muted-foreground">Typ faktury:</span>
                <div className="font-medium">{invTypeLabel}</div>
              </div>
              {invoice.taxCode && (
                <div>
                  <span className="text-muted-foreground">Kod podatku:</span>
                  <div className="font-medium">{invoice.taxCode}</div>
                </div>
              )}
              {invoice.cliRef && (
                <div>
                  <span className="text-muted-foreground">Ref. klienta:</span>
                  <div className="font-medium">{invoice.cliRef}</div>
                </div>
              )}
              {invoice.userName && (
                <div>
                  <span className="text-muted-foreground">Użytkownik:</span>
                  <div className="font-medium">{invoice.userName}</div>
                </div>
              )}
            </div>
          </>
        )}
      </Card>
    </div>
  )
}
