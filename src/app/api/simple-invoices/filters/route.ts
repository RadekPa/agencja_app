import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const currencySearch = searchParams.get('currencySearch') || ''
    
    const p = prisma as any
    
    // Get unique statuses
    const statusResults = await p.tblInvoice.findMany({
      where: { Status: { not: null } },
      select: { Status: true },
      distinct: ['Status']
    })
    const statuses = statusResults.map((r: any) => r.Status).filter(Boolean)

    // Get unique currencies with optional filtering
    let currencyQuery: any = { where: { CurrId: { not: null } }, select: { CurrId: true }, distinct: ['CurrId'] }
    if (currencySearch) {
      currencyQuery.where = {
        AND: [
          { CurrId: { not: null } },
          { CurrId: { contains: currencySearch, mode: 'insensitive' } }
        ]
      }
    }
    const currencyResults = await p.tblInvoice.findMany(currencyQuery)
    const currencies = currencyResults.map((r: any) => r.CurrId).filter(Boolean)

    // Get unique invoice types
    const invTypeResults = await p.tblInvoice.findMany({
      select: { InvType: true },
      distinct: ['InvType']
    })
    const invTypes = invTypeResults.map((r: any) => r.InvType).filter(Boolean)

    return NextResponse.json({
      statuses,
      currencies,
      invTypes
    })
  } catch (err: any) {
    console.error('Error in GET /api/simple-invoices/filters:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}
