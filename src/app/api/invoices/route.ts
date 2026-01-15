import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'

export async function GET(req: Request) {
  try {
    const url = new URL(req.url)
    const page = Number(url.searchParams.get('page') || '1')
    const pageSize = Number(url.searchParams.get('pageSize') || '50')
    const skip = (page - 1) * pageSize

    const status = (url.searchParams.get('status') || '').trim()
    const custId = url.searchParams.get('custId')
    const clientName = (url.searchParams.get('clientName') || '').trim()
    const descr = (url.searchParams.get('descr') || '').trim()
    const dateFrom = url.searchParams.get('dateFrom')
    const dateTo = url.searchParams.get('dateTo')
    const currency = (url.searchParams.get('currency') || '').trim()
    const sort = url.searchParams.get('sort') || 'FVDate'
    const order = (url.searchParams.get('order') || 'desc').toLowerCase() === 'asc' ? 'asc' : 'desc'

    const where: any = {}
    if (status) where.Status = status
    if (custId) where.CustID = Number(custId)
    if (dateFrom || dateTo) where.FVDate = {}
    if (dateFrom) where.FVDate.gte = new Date(dateFrom)
    if (dateTo) where.FVDate.lte = new Date(dateTo)
    if (currency) where.FVCurrency = currency

    const orderBy: any = {}
    if (['FVDate', 'PayDate', 'NetAmt', 'GrossAmt'].includes(sort)) orderBy[sort] = order
    else orderBy['FVDate'] = 'desc'

    const p = prisma as any

    // Handle clientName filter - find customers with that name
    let custIdFilter: number[] | undefined
    if (clientName) {
      console.log('Searching for clientName:', clientName)
      const clientNameSearch = clientName.trim()
      const clients = await p.tblCustomers.findMany({
        where: {
          Name: {
            contains: clientNameSearch
          }
        },
        select: { CustID: true, Name: true }
      })
      console.log('Found customers (case-sensitive):', clients)
      
      if (clients.length === 0) {
        // Try case-insensitive search by converting to uppercase
        console.log('No customers found with contains, trying uppercase')
        const clientsUpper = await p.tblCustomers.findMany({
          where: {
            Name: {
              contains: clientNameSearch.toUpperCase()
            }
          },
          select: { CustID: true, Name: true }
        })
        console.log('Found customers (uppercase):', clientsUpper)
        custIdFilter = clientsUpper.map(c => c.CustID)
      } else {
        custIdFilter = clients.map(c => c.CustID)
      }
      
      if (custIdFilter && custIdFilter.length > 0) {
        where.CustID = { in: custIdFilter }
      } else {
        // No customers found for name, return empty result
        console.log('No customers found for name:', clientName)
        return NextResponse.json({ data: [], meta: { page, pageSize, total: 0, pages: 0 } })
      }
    }

    const [total, data]: [number, any[]] = await Promise.all([
      p.tblFraVAT_New.count({ where }),
      p.tblFraVAT_New.findMany({
        where,
        take: pageSize,
        skip,
        orderBy
      })
    ])

    // Get customer names
    const custIds = [...new Set(data.map(d => d.CustID).filter(Boolean))]
    let customers: any[] = []
    if (custIds.length > 0) {
      customers = await p.tblCustomers.findMany({
        where: { CustID: { in: custIds } },
        select: { CustID: true, Name: true }
      })
    }

    const custMap = new Map(customers.map(c => [c.CustID, c.Name]))

    const items = data.map(d => ({
      id: d.FVNr,
      fvNr: d.FVNr,
      fvDate: d.FVDate?.toISOString() || null,
      date: d.FVDate?.toISOString() || null,
      fvType: d.FVType ?? null,
      custId: d.CustID,
      clientName: custMap.get(d.CustID) || null,
      origCurrency: d.OrigCurrency || '',
      currency: d.FVCurrency || '',
      fvCurrency: d.FVCurrency || '',
      graalPerc: d.GraalPerc ?? 0,
      vatCode: d.VATCode || '',
      vatPerc: d.VatPerc ?? 0,
      netAmt: d.NetAmt ?? 0,
      netAmtCurr: d.NetAmtCurr ?? d.NetAmt ?? 0,
      vatAmt: d.VatAmt ?? 0,
      xrate: d.XRate ?? 0,
      vatAmtCurr: d.VatAmtCurr ?? d.VatAmt ?? 0,
      grossAmt: d.GrossAmt ?? 0,
      invNr: d.InvNr,
      invAmt: d.InvAmt ?? 0,
      title: d.Title || '',
      fvDescription: d.FVDescription || d.Title || '',
      isbnNr: d.ISBNNr || '',
      payType: d.PayType || '',
      invType: d.InvType || '',
      bilNr: d.BilNr,
      origFVNr: d.OrigFVNr,
      correctFVNr: d.CorrectFVNr,
      creditID: d.CreditID,
      applyID: d.ApplyID,
      payDate: d.PayDate?.toISOString() || null,
      enterDate: d.EnterDate?.toISOString() || null,
      enterEmployee: d.EnterEmployee || '',
      status: d.Status || '',
      clientName: custMap.get(d.CustID) || null,
      clientId: d.CustID
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
    
    const fvDate = body.fvDate ? new Date(body.fvDate) : new Date()
    const fvType = body.fvType || 1
    const custId = body.custId ? Number(body.custId) : null
    const fvCurrency = body.fvCurrency || 'PLN'
    const vatPerc = Number(body.vatPerc) || 0
    const netAmt = Number(body.netAmt) || 0
    const xrate = Number(body.xrate) || 1
    const status = body.status || 'A'
    const fvDescription = body.fvDescription || ''
    const title = body.title || ''
    const payDate = body.payDate ? new Date(body.payDate) : null
    const enterEmployee = body.enterEmployee || 'system'

    const vatAmt = netAmt * (vatPerc / 100)
    const grossAmt = netAmt + vatAmt

    const p = prisma as any
    const invoice = await p.tblFraVAT_New.create({
      data: {
        FVNr: 0, // Will be auto-generated or need sequence
        FVDate: fvDate,
        FVType: fvType,
        CustID: custId,
        FVCurrency: fvCurrency,
        VatPerc: vatPerc,
        NetAmt: netAmt,
        NetAmtCurr: netAmt * xrate,
        VatAmt: vatAmt,
        XRate: xrate,
        VatAmtCurr: vatAmt * xrate,
        GrossAmt: grossAmt,
        Status: status,
        FVDescription: fvDescription,
        Title: title,
        PayDate: payDate,
        EnterDate: new Date(),
        EnterEmployee: enterEmployee
      }
    })

    return NextResponse.json({ fvNr: invoice.FVNr }, { status: 201 })
  } catch (err: any) {
    console.error('Error in POST /api/invoices:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}
