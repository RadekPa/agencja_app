import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'

export async function GET(req: Request) {
  try {
    const url = new URL(req.url)
    const page = Number(url.searchParams.get('page') || '1')
    const pageSize = Number(url.searchParams.get('pageSize') || '50')
    const skip = (page - 1) * pageSize

    const customerName = (url.searchParams.get('customerName') || '').trim()
    const dateFrom = url.searchParams.get('dateFrom')
    const dateTo = url.searchParams.get('dateTo')
    const status = (url.searchParams.get('status') || '').trim()
    const currency = (url.searchParams.get('currency') || '').trim()
    const sort = url.searchParams.get('sort') || 'AgrDate' // AgrDate, AgrID, Commission
    const order = (url.searchParams.get('order') || 'desc').toLowerCase() === 'asc' ? 'asc' : 'desc'

    const where: any = {}
    if (customerName) where.tblCustomers = { name: { contains: customerName } }
    if (status) where.Status = status
    if (currency) where.CurrID = currency
    if (dateFrom || dateTo) where.AgrDate = {}
    if (dateFrom) where.AgrDate.gte = new Date(dateFrom)
    if (dateTo) where.AgrDate.lte = new Date(dateTo)

    const orderBy: any = {}
    if (['AgrDate', 'AgrID', 'Commission'].includes(sort)) orderBy[sort] = order
    else orderBy['AgrDate'] = 'desc'

    const p = prisma as any
    const [total, data]: [number, any[]] = await Promise.all([
      p.tblAgreements.count({ where }),
      p.tblAgreements.findMany({
        where,
        take: pageSize,
        skip,
        orderBy,
        include: {
          tblCustomers: { select: { CustID: true, name: true } },
          tblTitles: { select: { TitleID: true, Title: true } },
          dictCurrencies: { select: { CurrID: true, CurrDesc: true } },
          dictLanguages: { select: { LangAbb: true, LangDesc: true } }
        }
      })
    ])

    const items = data.map(d => ({
      id: d.AgrID,
      customerId: d.CustID,
      customerName: d.tblCustomers?.name ?? null,
      titleId: d.TitleID,
      titleName: d.tblTitles?.Title ?? null,
      date: d.AgrDate.toISOString(),
      currency: d.CurrID || null,
      currencyDesc: d.dictCurrencies?.CurrDesc || null,
      language: d.LangAbbr || null,
      languageDesc: d.dictLanguages?.LangDesc || null,
      commission: d.Commission ?? 0,
      commissionMaterials: d.CommissionMaterials ?? 0,
      clientReference: d.ClientReference || null,
      status: d.Status || 'A',
      validYY: d.ValidYY || 0,
      pubTermMM: d.PubTermMM || 0,
      estimatedCopyPrice: d.EstimatedCopyPrice || 0,
      remarks: d.Remarks || null,
      localTitle: d.LocalTitle || null
    }))

    const meta = { page, pageSize, total, pages: Math.max(1, Math.ceil(total / pageSize)) }
    return NextResponse.json({ data: items, meta })
  } catch (err: any) {
    console.error('Error in GET /api/agreements:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const custId = body.custId ? Number(body.custId) : null
    const titleId = body.titleId ? Number(body.titleId) : null
    const agrDate = body.agrDate ? new Date(body.agrDate) : new Date()
    const commission = body.commission ? Number(body.commission) : 0
    const status = body.status || 'A'
    const currId = body.currId || 'USD'

    const p = prisma as any
    const agreement = await p.tblAgreements.create({
      data: {
        CustID: custId,
        TitleID: titleId,
        AgrDate: agrDate,
        Commission: commission,
        Status: status,
        CurrID: currId,
        DateMod: new Date(),
        UserMod: 'system'
      }
    })

    return NextResponse.json({ id: agreement.AgrID }, { status: 201 })
  } catch (err: any) {
    console.error('Error in POST /api/agreements:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}
