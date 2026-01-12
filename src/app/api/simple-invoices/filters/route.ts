import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const currencySearch = searchParams.get('currencySearch') || ''
    
    const p = prisma as any
    
    // Pobierz unikalne statusy
    const statusResults = await p.simpleInvoice.findMany({
      where: { NOT: { status: null } },
      select: { status: true },
      distinct: ['status']
    })
    const statuses = statusResults.map((r: any) => r.status).filter(Boolean)

    // Pobierz unikalne waluty z opcjonalnym filtrowaniem
    let currencyQuery: any = { where: { NOT: { currId: null } }, select: { currId: true }, distinct: ['currId'] }
    if (currencySearch) {
      currencyQuery.where = {
        AND: [
          { NOT: { currId: null } },
          { currId: { contains: currencySearch, mode: 'insensitive' } }
        ]
      }
    }
    const currencyResults = await p.simpleInvoice.findMany(currencyQuery)
    const currencies = currencyResults.map((r: any) => r.currId).filter(Boolean)

    // Pobierz unikalne typy faktur
    const invTypeResults = await p.simpleInvoice.findMany({
      select: { invType: true },
      distinct: ['invType']
    })
    const invTypes = invTypeResults.map((r: any) => r.invType).filter(Boolean)

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
