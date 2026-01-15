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
    const sort = url.searchParams.get('sort') || 'InvDate'
    const order = (url.searchParams.get('order') || 'desc').toLowerCase() === 'asc' ? 'asc' : 'desc'

    const where: any = {}
    if (status) where.Status = status
    if (clientId) where.ClientId = Number(clientId)
    if (billToId) where.BillToId = Number(billToId)
    if (dateFrom || dateTo) where.InvDate = {}
    if (dateFrom) where.InvDate.gte = new Date(dateFrom)
    if (dateTo) where.InvDate.lte = new Date(dateTo)
    if (descr) where.Descr = { contains: descr }
    if (currency) where.CurrId = currency

    const orderBy: any = {}
    if (['InvDate', 'DateDue', 'TotalInvNET', 'Balance'].includes(sort)) orderBy[sort] = order
    else orderBy['InvDate'] = 'desc'

    const p = prisma as any
    const [total, data]: [number, any[]] = await Promise.all([
      p.tblInvoice.count({ where }),
      p.tblInvoice.findMany({
        where,
        take: pageSize,
        skip,
        orderBy
      })
    ])

    // Lookup publisher and client names
    const billToIds = data.map(d => d.BillToId).filter(Boolean)
    const clientIds = data.map(d => d.ClientId).filter(Boolean)
    const uniqueIds = Array.from(new Set([...billToIds, ...clientIds]))
    let customers: any[] = []
    if (uniqueIds.length > 0) {
      customers = await p.tblCustomers.findMany({
        where: { CustID: { in: uniqueIds } },
        select: { CustID: true, Name: true }
      })
    }
    const custMap = new Map(customers.map((c: any) => [c.CustID, c.Name]))

    const items = data.map(d => ({
      id: d.InvNum,
      invNum: d.InvNum,
      invType: d.InvType || '',
      invDate: d.InvDate?.toISOString() || null,
      billToId: d.BillToId,
      billToName: custMap.get(d.BillToId) || null,
      clientId: d.ClientId,
      clientName: d.ClientId ? custMap.get(d.ClientId) || null : null,
      shipToId: d.ShipToId,
      currId: d.CurrId || null,
      totalInvNET: d.TotalInvNET ?? 0,
      vatPerc: d.VATPerc ?? 0,
      termDD: d.TermDD ?? 0,
      remarks: d.Remarks || '',
      status: d.Status || '',
      sumInWords: d.SumInWords || '',
      balance: d.Balance ?? 0,
      cliRef: d.CliRef || '',
      descr: d.Descr || '',
      dateDue: d.DateDue?.toISOString() || null,
      userName: d.UserName || '',
      agentID: d.AgentID,
      taxCode: d.TaxCode || '',
      taxValue: d.TaxValue ?? 0,
      taxInfo: d.TaxInfo || '',
      propID: d.PropID
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
    const invoice = await p.tblInvoice.create({
      data: {
        InvType: invType,
        InvDate: invDate,
        BillToId: billToId,
        ClientId: clientId,
        ShipToId: shipToId,
        CurrId: currId,
        TotalInvNET: totalInvNET,
        VATPerc: vatPerc,
        TermDD: termDD,
        Remarks: remarks,
        Status: status,
        Descr: descr,
        DateDue: dateDue,
        UserName: userName,
        TaxCode: taxCode,
        TaxValue: taxValue,
        Balance: balance
      }
    })

    return NextResponse.json({ invNum: invoice.InvNum }, { status: 201 })
  } catch (err: any) {
    console.error('Error in POST /api/simple-invoices:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}
