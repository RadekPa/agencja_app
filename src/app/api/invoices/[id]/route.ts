import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'

export async function GET(req: Request) {
  try {
    const url = new URL(req.url)
    const parts = url.pathname.split('/')
    const idStr = parts[parts.length - 1]
    const fvNr = Number(idStr)
    if (!fvNr) return NextResponse.json({ error: 'Invalid id' }, { status: 400 })

    const p = prisma as any
    const invoices = await p.tblFraVAT_New.findMany({
      where: { FVNr: fvNr },
      take: 1
    })
    
    if (!invoices || invoices.length === 0) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }

    const invoice = invoices[0]

    // Get customer details for buyer section
    let client: any = null
    if (invoice.CustID) {
      client = await p.tblCustomers.findUnique({
        where: { CustID: invoice.CustID },
        select: {
          Name: true,
          Address1: true,
          City: true,
          Zip: true,
          DefaultEmail: true,
          DefaultPhone: true,
          TaxID: true,
          VATID: true
        }
      })
    }

    // If correction (FVType = 2) try to load original invoice amounts
    let originalInvoice: any = null
    if (invoice.FVType === 2 && invoice.OrigFVNr) {
      const orig = await p.tblFraVAT_New.findMany({ where: { FVNr: invoice.OrigFVNr }, take: 1 })
      if (orig && orig.length > 0) {
        const o = orig[0]
        originalInvoice = {
          invAmt: o.InvAmt ?? 0,
          graalPerc: o.GraalPerc ?? 0,
          xRate: o.XRate ?? 0,
          vatCode: o.VATCode || '',
          vatAmtCurr: o.VatAmtCurr ?? o.VatAmt ?? 0,
          grossAmt: o.GrossAmt ?? 0,
          fvCurrency: o.FVCurrency || ''
        }
      }
    }

    return NextResponse.json({
      invoice: {
        id: invoice.FVNr,
        fvNr: invoice.FVNr,
        fvDate: invoice.FVDate?.toISOString() || null,
        date: invoice.FVDate?.toISOString() || null,
        dateIssued: invoice.PayDate?.toISOString() || invoice.FVDate?.toISOString() || null,
        fvType: invoice.FVType ?? null,
        custId: invoice.CustID,
        client: client
          ? {
              name: client.Name || null,
              email: client.DefaultEmail || null,
              phone: client.DefaultPhone || null,
              address: client.Address1 || null,
              city: client.City || null,
              postalCode: client.Zip || null,
              nip: client.TaxID || null,
              regon: client.VATID || null
            }
          : null,
        origCurrency: invoice.OrigCurrency || '',
        fvCurrency: invoice.FVCurrency || '',
        graalPerc: invoice.GraalPerc ?? 0,
        vatCode: invoice.VATCode || '',
        vatPerc: invoice.VatPerc ?? 0,
        netAmt: invoice.NetAmt ?? 0,
        netAmtCurr: invoice.NetAmtCurr ?? invoice.NetAmt ?? 0,
        vatAmt: invoice.VatAmt ?? 0,
        xrate: invoice.XRate ?? 0,
        vatAmtCurr: invoice.VatAmtCurr ?? invoice.VatAmt ?? 0,
        grossAmt: invoice.GrossAmt ?? 0,
        invNr: invoice.InvNr,
        invAmt: invoice.InvAmt ?? 0,
        title: invoice.Title || '',
        fvDescription: invoice.FVDescription || invoice.Title || '',
        isbnNr: invoice.ISBNNr || '',
        payType: invoice.PayType || '',
        invType: invoice.InvType || '',
        bilNr: invoice.BilNr,
        origFVNr: invoice.OrigFVNr,
        correctFVNr: invoice.CorrectFVNr,
        creditID: invoice.CreditID,
        applyID: invoice.ApplyID,
        payDate: invoice.PayDate?.toISOString() || null,
        enterDate: invoice.EnterDate?.toISOString() || null,
        enterEmployee: invoice.EnterEmployee || '',
        status: invoice.Status || '',
        originalInvoice
      }
    })
  } catch (err: any) {
    console.error('Error in GET /api/invoices/[id]:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}

export async function PATCH(req: Request) {
  try {
    const url = new URL(req.url)
    const parts = url.pathname.split('/')
    const idStr = parts[parts.length - 1]
    const fvNr = Number(idStr)
    if (!fvNr) return NextResponse.json({ error: 'Invalid id' }, { status: 400 })

    const body = await req.json()
    const status = body.status || 'A'

    const p = prisma as any
    
    const invoices = await p.tblFraVAT_New.findMany({
      where: { FVNr: fvNr },
      take: 1
    })
    
    if (!invoices || invoices.length === 0) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }

    const fvDate = invoices[0].FVDate
    
    const updated = await p.tblFraVAT_New.update({ 
      where: { FVNr_FVDate: { FVNr: fvNr, FVDate: fvDate } }, 
      data: { Status: status } 
    })
    return NextResponse.json({ fvNr: updated.FVNr, status: updated.Status })
  } catch (err: any) {
    console.error('Error in PATCH /api/invoices/[id]:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}
