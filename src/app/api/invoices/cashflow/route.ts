import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'

// GET /api/invoices/cashflow?mode=year|month|custom&from=2025-12-01&to=2025-12-31
export async function GET(req: Request) {
  try {
    const url = new URL(req.url)
    const mode = url.searchParams.get('mode') || 'year'
    const customFrom = url.searchParams.get('from')
    const customTo = url.searchParams.get('to')

    let from: Date, to: Date
    const today = new Date()

    if (mode === 'year' && customFrom && customTo) {
      from = new Date(customFrom)
      to = new Date(customTo)
    } else if (mode === 'year') {
      from = new Date(today.getFullYear(), 0, 1)
      to = new Date(today.getFullYear(), 11, 31)
    } else if (mode === 'month') {
      from = new Date(today.getFullYear(), today.getMonth(), 1)
      to = new Date(today.getFullYear(), today.getMonth() + 1, 0)
    } else {
      from = customFrom ? new Date(customFrom) : new Date(today.getFullYear(), 0, 1)
      to = customTo ? new Date(customTo) : today
    }

    // Return empty data - this functionality is not yet fully implemented
    const data = [] as Array<{ date: string; issued: number; planned: number; adjustment: number; adjustmentIds: number[]; total: number; cumulative: number }>

    return NextResponse.json({ data, adjustments: [] })
  } catch (err: any) {
    console.error('Error in GET /api/invoices/cashflow:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}
