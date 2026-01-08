import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'

export async function GET(req: Request) {
  try {
    const url = new URL(req.url)
    const currencySearch = (url.searchParams.get('currencySearch') || '').trim()
    const [statusRows, currencyRows] = await Promise.all([
      prisma.invoice.findMany({
        where: { status: { not: null } },
        select: { status: true },
        distinct: ['status']
      }),
      currencySearch
        ? prisma.$queryRaw<Array<{ CurrID: string | null; CurrDesc: string | null }>>`SELECT CurrID, CurrDesc FROM dictCurrencies WHERE CurrID LIKE ${'%' + currencySearch + '%'} OR CurrDesc LIKE ${'%' + currencySearch + '%'} ORDER BY CurrID`
        : prisma.$queryRaw<Array<{ CurrID: string | null; CurrDesc: string | null }>>`SELECT CurrID, CurrDesc FROM dictCurrencies ORDER BY CurrID`
    ])

    const statuses = Array.from(new Set(statusRows
      .map(s => (s.status ?? '').trim())
      .filter(Boolean)
    )).sort()

    const currencies = Array.from(new Map(
      currencyRows
        .map(c => [
          (c.CurrID ?? '').trim(),
          { id: (c.CurrID ?? '').trim(), desc: (c.CurrDesc ?? '').trim() }
        ])
        .filter(([id]) => Boolean(id))
    ).values())

    return NextResponse.json({ statuses, currencies })
  } catch (err: any) {
    console.error('Error in GET /api/invoices/filters:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}
