import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'

export async function GET(req: Request) {
  try {
    const url = new URL(req.url)
    const parts = url.pathname.split('/')
    const idStr = parts[parts.length - 1]
    const id = Number(idStr)
    if (!id) return NextResponse.json({ error: 'Invalid id' }, { status: 400 })

    const invoice = await (prisma as any).invoice.findUnique({ where: { id }, include: { client: true } })
    if (!invoice) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    const originalInvoice = invoice.origFVNr
      ? await (prisma as any).invoice.findUnique({
          where: { id: invoice.origFVNr },
          select: {
            invAmt: true,
            graalPerc: true,
            xrate: true,
            vatCode: true,
            vatAmtCurr: true,
            grossAmt: true,
            fvCurrency: true,
            origCurrency: true,
          }
        })
      : null

    return NextResponse.json({
      invoice: {
        id: invoice.id,
        invNr: invoice.invNr ?? null,
        fvType: invoice.type ?? null,
        origFVNr: invoice.origFVNr ?? null,
        originalInvoice: originalInvoice
          ? {
              invAmt: originalInvoice.invAmt ?? 0,
              graalPerc: originalInvoice.graalPerc ?? 0,
              xRate: originalInvoice.xrate ?? 0,
              vatCode: originalInvoice.vatCode || '',
              vatAmtCurr: originalInvoice.vatAmtCurr ?? 0,
              grossAmt: originalInvoice.grossAmt ?? 0,
              fvCurrency: originalInvoice.fvCurrency || originalInvoice.origCurrency || 'PLN'
            }
          : null,
        client: invoice.client,
        title: invoice.title || '',
        date: invoice.date?.toISOString() || null,
        dateIssued: invoice.dateIssued?.toISOString() || null,
        payDate: invoice.payDate?.toISOString() || null,
        invAmt: invoice.invAmt ?? invoice.netAmt ?? 0,
        graalPerc: invoice.graalPerc ?? 0,
        xRate: invoice.xrate ?? 0,
        netAmt: invoice.netAmt ?? 0,
        netAmtCurr: invoice.netAmtCurr ?? invoice.netAmt ?? 0,
        vatPerc: invoice.vatPerc ?? 0,
        vatAmt: invoice.vatAmt ?? 0,
        vatAmtCurr: invoice.vatAmtCurr ?? invoice.vatAmt ?? 0,
        grossAmt: invoice.grossAmt ?? 0,
        fvCurrency: invoice.fvCurrency || invoice.origCurrency || 'PLN',
        origCurrency: invoice.origCurrency || '',
        status: invoice.status || 'ISSUED',
        invType: invoice.invType || 'FV',
        fvDescription: invoice.fvDescription || '',
        payType: invoice.payType || '',
        vatCode: invoice.vatCode || '',
      }
    })
  } catch (err: any) {
    console.error('Error in GET /api/invoices/[id]:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}

export async function PATCH(req: Request) {
  try {
    const url = new URL(req.url)
    const parts = url.pathname.split('/')
    const idStr = parts[parts.length - 1]
    const id = Number(idStr)
    if (!id) return NextResponse.json({ error: 'Invalid id' }, { status: 400 })

    const body = await req.json()
    const status = body.status === 'DRAFT' || body.status === 'ISSUED' ? body.status : 'ISSUED'

    const p = prisma as any
    const updated = await p.invoice.update({ where: { id }, data: { status } })
    return NextResponse.json({ id: updated.id, status: updated.status })
  } catch (err: any) {
    console.error('Error in PATCH /api/invoices/[id]:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}
