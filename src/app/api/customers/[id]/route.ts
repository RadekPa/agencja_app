import { prisma } from '../../../../lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id)
  const client = await prisma.customer.findUnique({ where: { id } })
  return NextResponse.json(client)
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id)
  const body = await req.json()
  
  const client = await prisma.customer.update({ 
    where: { id }, 
    data: { 
      name: body.name || null,
      email: body.email || null,
      phone: body.phone || null,
      address: body.address || null,
      city: body.city || null,
      postalCode: body.postalCode || null,
      nip: body.nip || null,
      regon: body.regon || null,
      notes: body.notes || null,
    } 
  })
  return NextResponse.json(client)
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id)
  await prisma.customer.delete({ where: { id } })
  return NextResponse.json({ ok: true })
}
