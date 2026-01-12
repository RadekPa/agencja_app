import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id)
    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 })
    }

    const p = prisma as any
    const invoice = await p.simpleInvoice.findUnique({
      where: { id },
      include: { client: { select: { id: true, name: true, email: true, phone: true } } }
    })

    if (!invoice) {
      return NextResponse.json({ error: 'Invoice not found' }, { status: 404 })
    }

    const data = {
      id: invoice.id,
      invType: invoice.invType || '',
      invDate: invoice.invDate?.toISOString() || null,
      billToId: invoice.billToId,
      clientId: invoice.clientId,
      clientName: invoice.client?.name ?? null,
      clientEmail: invoice.client?.email ?? null,
      clientPhone: invoice.client?.phone ?? null,
      shipToId: invoice.shipToId,
      currId: invoice.currId || null,
      totalInvNET: invoice.totalInvNET ?? 0,
      vatPerc: invoice.vatPerc ?? 0,
      termDD: invoice.termDD ?? 0,
      remarks: invoice.remarks || '',
      status: invoice.status || '',
      sumInWords: invoice.sumInWords || '',
      balance: invoice.balance ?? 0,
      cliRef: invoice.cliRef || '',
      descr: invoice.descr || '',
      dateDue: invoice.dateDue?.toISOString() || null,
      userName: invoice.userName || '',
      agentID: invoice.agentID,
      taxCode: invoice.taxCode || '',
      taxValue: invoice.taxValue ?? 0,
      taxInfo: invoice.taxInfo || '',
      propID: invoice.propID
    }

    return NextResponse.json(data)
  } catch (err: any) {
    console.error('Error in GET /api/simple-invoices/[id]:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id)
    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 })
    }

    const body = await req.json()
    const updateData: any = {}

    if (body.status !== undefined) updateData.status = body.status
    if (body.remarks !== undefined) updateData.remarks = body.remarks
    if (body.descr !== undefined) updateData.descr = body.descr
    if (body.totalInvNET !== undefined) updateData.totalInvNET = Number(body.totalInvNET)
    if (body.vatPerc !== undefined) updateData.vatPerc = Number(body.vatPerc)
    if (body.taxValue !== undefined) updateData.taxValue = Number(body.taxValue)
    if (body.balance !== undefined) updateData.balance = Number(body.balance)
    if (body.dateDue !== undefined) updateData.dateDue = body.dateDue ? new Date(body.dateDue) : null
    if (body.currId !== undefined) updateData.currId = body.currId
    if (body.termDD !== undefined) updateData.termDD = Number(body.termDD)

    const p = prisma as any
    const invoice = await p.simpleInvoice.update({
      where: { id },
      data: updateData
    })

    return NextResponse.json({ id: invoice.id })
  } catch (err: any) {
    console.error('Error in PATCH /api/simple-invoices/[id]:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id)
    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 })
    }

    const p = prisma as any
    await p.simpleInvoice.delete({ where: { id } })

    return NextResponse.json({ success: true })
  } catch (err: any) {
    console.error('Error in DELETE /api/simple-invoices/[id]:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}
