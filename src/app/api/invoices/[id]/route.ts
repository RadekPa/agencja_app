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

    return NextResponse.json({
      invoice: {
        id: invoice.id,
        client: invoice.client,
        title: invoice.title || '',
        date: invoice.date?.toISOString() || null,
        dateIssued: invoice.dateIssued?.toISOString() || null,
        payDate: invoice.payDate?.toISOString() || null,
        netAmt: invoice.netAmt ?? 0,
        vatPerc: invoice.vatPerc ?? 0,
        vatAmt: invoice.vatAmt ?? 0,
        grossAmt: invoice.grossAmt ?? 0,
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
