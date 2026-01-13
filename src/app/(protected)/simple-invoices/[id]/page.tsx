"use client"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function SimpleInvoiceShow({ params }: { params: { id: string } }) {
  const id = params.id
  const t = useTranslations('simpleInvoices')
  const tCommon = useTranslations('common')
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
      alert(t('updateError'))
    }
  }

  const handleDelete = async () => {
    if (!confirm(t('confirmDelete'))) return
    const res = await fetch(`/api/simple-invoices/${id}`, { method: 'DELETE' })
    if (res.ok) {
      router.push('/simple-invoices')
    } else {
      alert(t('deleteError'))
    }
  }

  if (loading) return <p className="text-center py-8">{tCommon('loading')}</p>
  if (!invoice) return <Card className="p-6"><p>{t('invoiceNotFound')}</p></Card>

  const invTypeLabelMap: Record<string, string> = {
    'I': t('invoiceTypeInvoice'),
    'C': t('invoiceTypeCreditNote'),
    'P': t('invoiceTypeProforma')
  }
  const invTypeLabel = invTypeLabelMap[invoice.invType] || invoice.invType

  const statusLabelMap: Record<string, string> = {
    'A': t('active'),
    'C': t('cancelled'),
    'P': t('paid'),
    'D': t('draft')
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
            <p className="text-sm text-muted-foreground mt-1">{invoice.descr || t('noDescription')}</p>
          </div>
          <div className="flex gap-2">
            {!editing ? (
              <>
                <Button variant="primary" onClick={() => setEditing(true)}>
                  {tCommon('edit')}
                </Button>
                <Button variant="destructive" onClick={handleDelete}>
                  {tCommon('delete')}
                </Button>
              </>
            ) : (
              <Button variant="outline" onClick={() => setEditing(false)}>
                {tCommon('cancel')}
              </Button>
            )}
          </div>
        </div>

        {editing ? (
          <form onSubmit={handleUpdate} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground">{t('status')}</label>
                <select
                  value={editForm.status}
                  onChange={e => setEditForm({ ...editForm, status: e.target.value })}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
                >
                  <option value="A">{t('active')}</option>
                  <option value="C">{t('cancelled')}</option>
                  <option value="P">{t('paid')}</option>
                  <option value="D">{t('draft')}</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground">{t('currency')}</label>
                <input
                  value={editForm.currId || ''}
                  onChange={e => setEditForm({ ...editForm, currId: e.target.value })}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-muted-foreground">{t('description')}</label>
              <input
                value={editForm.descr || ''}
                onChange={e => setEditForm({ ...editForm, descr: e.target.value })}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-muted-foreground">{t('remarks')}</label>
              <textarea
                value={editForm.remarks || ''}
                onChange={e => setEditForm({ ...editForm, remarks: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground">{t('paymentDue')}</label>
                <input
                  type="date"
                  value={editForm.dateDue ? editForm.dateDue.split('T')[0] : ''}
                  onChange={e => setEditForm({ ...editForm, dateDue: e.target.value })}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground">{t('paymentTermDays')}</label>
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
                <label className="block text-sm font-medium text-muted-foreground">{t('net')}</label>
                <input
                  type="number"
                  step="0.01"
                  value={editForm.totalInvNET || ''}
                  onChange={e => setEditForm({ ...editForm, totalInvNET: e.target.value })}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground">{t('vatPercent')}</label>
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
                <label className="block text-sm font-medium text-muted-foreground">{t('taxValue')}</label>
                <input
                  type="number"
                  step="0.01"
                  value={editForm.taxValue || ''}
                  onChange={e => setEditForm({ ...editForm, taxValue: e.target.value })}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground">{t('balance')}</label>
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
                {t('saveChanges')}
              </Button>
              <Button type="button" onClick={() => setEditing(false)} className="flex-1">
                {tCommon('cancel')}
              </Button>
            </div>
          </form>
        ) : (
          <>
            <div className="flex justify-between items-start mb-6">
              <div className="text-right">
                <div className="text-sm font-medium">
                  {t('status')}:
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
                  <h3 className="font-semibold mb-3">{t('client')}</h3>
                  <div className="space-y-1">
                    <div className="font-medium">{invoice.clientName || t('noData')}</div>
                    {invoice.clientEmail && <div className="text-sm text-muted-foreground">{invoice.clientEmail}</div>}
                    {invoice.clientPhone && <div className="text-sm text-muted-foreground">{invoice.clientPhone}</div>}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">{t('dates')}</h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">{t('invoiceDate')}:</span>
                      <div className="font-medium">
                        {invoice.invDate ? new Intl.DateTimeFormat('pl-PL').format(new Date(invoice.invDate)) : '-'}
                      </div>
                    </div>
                    {invoice.dateDue && (
                      <div>
                        <span className="text-muted-foreground">{t('paymentDue')}:</span>
                        <div className="font-medium">
                          {new Intl.DateTimeFormat('pl-PL').format(new Date(invoice.dateDue))}
                        </div>
                      </div>
                    )}
                    <div>
                      <span className="text-muted-foreground">{t('paymentTerm')}:</span>
                      <div className="font-medium">{invoice.termDD || 0} {t('days')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-muted/50 p-6 rounded-lg">
              <h3 className="font-semibold mb-4">{t('financialSummary')}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-muted-foreground">{t('netAmount')}</div>
                  <div className="text-2xl font-bold">
                    {invoice.totalInvNET?.toFixed(2) || '0.00'} {invoice.currId || 'PLN'}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{t('vatRate')}</div>
                  <div className="text-2xl font-bold">{invoice.vatPerc || 0}%</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{t('taxValue')}</div>
                  <div className="text-2xl font-bold">
                    {invoice.taxValue?.toFixed(2) || '0.00'} {invoice.currId || 'PLN'}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{t('balance')}</div>
                  <div className="text-2xl font-bold text-primary">
                    {invoice.balance?.toFixed(2) || '0.00'} {invoice.currId || 'PLN'}
                  </div>
                </div>
              </div>
            </div>

            {invoice.remarks && (
              <div className="mt-6 border-t border-border pt-6">
                <h3 className="font-semibold mb-2">{t('remarks')}</h3>
                <p className="text-sm text-muted-foreground whitespace-pre-wrap">{invoice.remarks}</p>
              </div>
            )}

            <div className="mt-6 border-t border-border pt-6 grid grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">{t('billToIdLabel')}:</span>
                <div className="font-medium">{invoice.billToId}</div>
              </div>
              {invoice.shipToId && (
                <div>
                  <span className="text-muted-foreground">{t('shipToId')}:</span>
                  <div className="font-medium">{invoice.shipToId}</div>
                </div>
              )}
              <div>
                <span className="text-muted-foreground">{t('invoiceType')}:</span>
                <div className="font-medium">{invTypeLabel}</div>
              </div>
              {invoice.taxCode && (
                <div>
                  <span className="text-muted-foreground">{t('taxCode')}:</span>
                  <div className="font-medium">{invoice.taxCode}</div>
                </div>
              )}
              {invoice.cliRef && (
                <div>
                  <span className="text-muted-foreground">{t('clientRef')}:</span>
                  <div className="font-medium">{invoice.cliRef}</div>
                </div>
              )}
              {invoice.userName && (
                <div>
                  <span className="text-muted-foreground">{t('user')}:</span>
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
