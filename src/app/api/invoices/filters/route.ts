import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'

export async function GET(req: Request) {
  try {
    const url = new URL(req.url)
    const currencySearch = (url.searchParams.get('currencySearch') || '').trim()

    const p = prisma as any
    const statusRows = await p.tblFraVAT_New.findMany({
      where: { Status: { not: null } },
      select: { Status: true },
      distinct: ['Status']
    })

    const currencyWhere: any = { FVCurrency: { not: null } }
    if (currencySearch) {
      // SQL Server collation is usually case-insensitive, so `contains` works for search here
      currencyWhere.FVCurrency = { contains: currencySearch }
    }

    const currencyRows = await p.tblFraVAT_New.findMany({
      where: currencyWhere,
      select: { FVCurrency: true },
      distinct: ['FVCurrency']
    })

    const statuses = Array.from(new Set(statusRows
      .map(s => (s.Status ?? '').trim())
      .filter(Boolean)
    )).sort()

    const currencies = Array.from(new Set(currencyRows
      .map(c => (c.FVCurrency ?? '').trim())
      .filter(Boolean)
    ))
      .sort()
      .map(c => ({ id: c, desc: c }))

    return NextResponse.json({ statuses, currencies })
  } catch (err: any) {
    console.error('Error in GET /api/invoices/filters:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}
