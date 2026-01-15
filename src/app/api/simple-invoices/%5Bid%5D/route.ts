import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const invNum = Number(params.id)
    if (isNaN(invNum)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 })
    }

    const p = prisma as any
    const invoice = await p.tblInvoice.findUnique({
      where: { InvNum: invNum }
    })

    if (!invoice) {
      return NextResponse.json({ error: 'Invoice not found' }, { status: 404 })
    }

    const data = {
      invNum: invoice.InvNum,
      invType: invoice.InvType || '',
      invDate: invoice.InvDate?.toISOString() || null,
      billToId: invoice.BillToId,
      clientId: invoice.ClientId,
      shipToId: invoice.ShipToId,
      currId: invoice.CurrId || null,
      totalInvNET: invoice.TotalInvNET ?? 0,
      vatPerc: invoice.VATPerc ?? 0,
      termDD: invoice.TermDD ?? 0,
      remarks: invoice.Remarks || '',
      status: invoice.Status || '',
      sumInWords: invoice.SumInWords || '',
      balance: invoice.Balance ?? 0,
      cliRef: invoice.CliRef || '',
      descr: invoice.Descr || '',
      dateDue: invoice.DateDue?.toISOString() || null,
      userName: invoice.UserName || '',
      agentID: invoice.AgentID,
      taxCode: invoice.TaxCode || '',
      taxValue: invoice.TaxValue ?? 0,
      taxInfo: invoice.TaxInfo || '',
      propID: invoice.PropID
    }

    return NextResponse.json(data)
  } catch (err: any) {
    console.error('Error in GET /api/simple-invoices/[id]:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    const invNum = Number(params.id)
    if (isNaN(invNum)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 })
    }

    const body = await req.json()
    const updateData: any = {}

    if (body.status !== undefined) updateData.Status = body.status
    if (body.remarks !== undefined) updateData.Remarks = body.remarks
    if (body.descr !== undefined) updateData.Descr = body.descr
    if (body.totalInvNET !== undefined) updateData.TotalInvNET = Number(body.totalInvNET)
    if (body.vatPerc !== undefined) updateData.VATPerc = Number(body.vatPerc)
    if (body.taxValue !== undefined) updateData.TaxValue = Number(body.taxValue)
    if (body.balance !== undefined) updateData.Balance = Number(body.balance)
    if (body.dateDue !== undefined) updateData.DateDue = body.dateDue ? new Date(body.dateDue) : null
    if (body.currId !== undefined) updateData.CurrId = body.currId
    if (body.termDD !== undefined) updateData.TermDD = Number(body.termDD)

    const p = prisma as any
    const invoice = await p.tblInvoice.update({
      where: { InvNum: invNum },
      data: updateData
    })

    return NextResponse.json({ invNum: invoice.InvNum })
  } catch (err: any) {
    console.error('Error in PATCH /api/simple-invoices/[id]:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const invNum = Number(params.id)
    if (isNaN(invNum)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 })
    }

    const p = prisma as any
    await p.tblInvoice.delete({ where: { InvNum: invNum } })

    return NextResponse.json({ success: true })
  } catch (err: any) {
    console.error('Error in DELETE /api/simple-invoices/[id]:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}
