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
    const billToId = url.searchParams.get('billToId')
    const dateFrom = url.searchParams.get('dateFrom')
    const dateTo = url.searchParams.get('dateTo')
    const descr = (url.searchParams.get('descr') || '').trim()
    const currency = (url.searchParams.get('currency') || '').trim()
    const sort = url.searchParams.get('sort') || 'invDate'
    const order = (url.searchParams.get('order') || 'desc').toLowerCase() === 'asc' ? 'asc' : 'desc'

    const where: any = {}
    if (status) where.status = status
    if (clientId) where.clientId = Number(clientId)
    if (billToId) where.billToId = Number(billToId)
    if (dateFrom || dateTo) where.invDate = {}
    if (dateFrom) where.invDate.gte = new Date(dateFrom)
    if (dateTo) where.invDate.lte = new Date(dateTo)
    if (descr) where.descr = { contains: descr }
    if (currency) where.currId = currency

    const orderBy: any = {}
    if (['invDate', 'dateDue', 'totalInvNET', 'balance'].includes(sort)) orderBy[sort] = order
    else orderBy['invDate'] = 'desc'

    const p = prisma as any
    const [total, data]: [number, any[]] = await Promise.all([
      p.simpleInvoice.count({ where }),
      p.simpleInvoice.findMany({
        where,
        take: pageSize,
        skip,
        orderBy,
        include: { 
          client: { select: { id: true, name: true } },
          billTo: { select: { id: true, name: true } }
        }
      })
    ])

    const items = data.map(d => ({
      id: d.id,
      invType: d.invType || '',
      invDate: d.invDate?.toISOString() || null,
      billToId: d.billToId,
      billToName: d.billTo?.name ?? null,
      clientId: d.clientId,
      clientName: d.client?.name ?? null,
      shipToId: d.shipToId,
      currId: d.currId || null,
      totalInvNET: d.totalInvNET ?? 0,
      vatPerc: d.vatPerc ?? 0,
      termDD: d.termDD ?? 0,
      remarks: d.remarks || '',
      status: d.status || '',
      sumInWords: d.sumInWords || '',
      balance: d.balance ?? 0,
      cliRef: d.cliRef || '',
      descr: d.descr || '',
      dateDue: d.dateDue?.toISOString() || null,
      userName: d.userName || '',
      agentID: d.agentID,
      taxCode: d.taxCode || '',
      taxValue: d.taxValue ?? 0,
      taxInfo: d.taxInfo || '',
      propID: d.propID
    }))

    const meta = { page, pageSize, total, pages: Math.max(1, Math.ceil(total / pageSize)) }
    return NextResponse.json({ data: items, meta })
  } catch (err: any) {
    console.error('Error in GET /api/simple-invoices:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    
    const invType = body.invType || 'I'
    const invDate = body.invDate ? new Date(body.invDate) : new Date()
    const billToId = Number(body.billToId)
    const clientId = body.clientId ? Number(body.clientId) : null
    const shipToId = body.shipToId ? Number(body.shipToId) : null
    const currId = body.currId || 'PLN'
    const totalInvNET = Number(body.totalInvNET) || 0
    const vatPerc = Number(body.vatPerc) || 0
    const termDD = Number(body.termDD) || 0
    const remarks = body.remarks || ''
    const status = body.status || 'A'
    const descr = body.descr || ''
    const dateDue = body.dateDue ? new Date(body.dateDue) : null
    const userName = body.userName || 'system'
    const taxCode = body.taxCode || ''
    const taxValue = Number(body.taxValue) || 0
    const balance = totalInvNET + taxValue

    const p = prisma as any
    const invoice = await p.simpleInvoice.create({
      data: {
        invType,
        invDate,
        billToId,
        clientId,
        shipToId,
        currId,
        totalInvNET,
        vatPerc,
        termDD,
        remarks,
        status,
        descr,
        dateDue,
        userName,
        taxCode,
        taxValue,
        balance
      }
    })

    return NextResponse.json({ id: invoice.id }, { status: 201 })
  } catch (err: any) {
    console.error('Error in POST /api/simple-invoices:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}
