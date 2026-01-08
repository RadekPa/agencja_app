import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'

export async function GET(req: Request) {
  try {
    const url = new URL(req.url)
    const page = Number(url.searchParams.get('page') || '1')
    const pageSize = Number(url.searchParams.get('pageSize') || '50')
    const skip = (page - 1) * pageSize

    const status = (url.searchParams.get('status') || '').trim()
    const clientId = url.searchParams.get('clientId')
    const clientName = (url.searchParams.get('clientName') || '').trim()
    const dateFrom = url.searchParams.get('dateFrom')
    const dateTo = url.searchParams.get('dateTo')
    const title = (url.searchParams.get('title') || '').trim()
    const currency = (url.searchParams.get('currency') || '').trim()
    const sort = url.searchParams.get('sort') || 'date' // date, payDate, grossAmt, netAmt
    const order = (url.searchParams.get('order') || 'desc').toLowerCase() === 'asc' ? 'asc' : 'desc'

    const where: any = {}
    if (status) where.status = status
    if (clientId) where.clientId = Number(clientId)
    if (clientName) where.client = { name: { contains: clientName } }
    if (dateFrom || dateTo) where.date = {}
    if (dateFrom) where.date.gte = new Date(dateFrom)
    if (dateTo) where.date.lte = new Date(dateTo)
    if (title) where.title = { contains: title }
    if (currency) where.fvCurrency = currency

    const orderBy: any = {}
    if (['date', 'payDate', 'grossAmt', 'netAmt'].includes(sort)) orderBy[sort] = order
    else orderBy['date'] = 'desc'

    const p = prisma as any
    const [total, data]: [number, any[]] = await Promise.all([
      p.invoice.count({ where }),
      p.invoice.findMany({
        where,
        take: pageSize,
        skip,
        orderBy,
        include: { client: { select: { id: true, name: true } } }
      })
    ])

    const items = data.map(d => ({
      id: d.id,
      clientId: d.clientId,
      clientName: d.client?.name ?? null,
      date: d.date.toISOString(),
      dateIssued: d.dateIssued?.toISOString() || null,
      payDate: d.payDate?.toISOString() || null,
      title: d.title || '',
        typeCode: d.type ?? null,
        currency: d.fvCurrency || d.origCurrency || null,
        netAmt: d.netAmt ?? 0,
        netAmtCurr: d.netAmtCurr ?? d.netAmt ?? 0,
        vatPerc: d.vatPerc ?? 0,
        vatAmt: d.vatAmt ?? 0,
        vatAmtCurr: d.vatAmtCurr ?? d.vatAmt ?? 0,
        grossAmt: d.grossAmt ?? 0,
        status: d.status || 'ISSUED',
        invType: d.invType || 'FV'
    }))

    const meta = { page, pageSize, total, pages: Math.max(1, Math.ceil(total / pageSize)) }
    return NextResponse.json({ data: items, meta })
  } catch (err: any) {
    console.error('Error in GET /api/invoices:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const clientId = body.clientId ? Number(body.clientId) : null
    
    const date = body.date ? new Date(body.date) : new Date()
    const dateIssued = body.dateIssued ? new Date(body.dateIssued) : date
    const payDate = body.payDate ? new Date(body.payDate) : date
    
    const title = body.title || ''
    const netAmt = Number(body.netAmt) || 0
    const vatPerc = Number(body.vatPerc) || 0
    const vatAmt = Math.round((netAmt * vatPerc / 100) * 100) / 100
    const grossAmt = Math.round((netAmt + vatAmt) * 100) / 100
    
    const status = body.status === 'DRAFT' || body.status === 'ISSUED' ? body.status : 'ISSUED'
    const invType = body.invType || 'FV'

    const p = prisma as any
    const invoice = await p.invoice.create({
      data: {
        date,
        dateIssued,
        payDate,
        clientId,
        title,
        netAmt,
        vatPerc,
        vatAmt,
        grossAmt,
        status,
        invType,
        enterDate: new Date(),
        enterEmployee: 'system'
      }
    })

    return NextResponse.json({ id: invoice.id }, { status: 201 })
  } catch (err: any) {
    console.error('Error in POST /api/invoices:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}
