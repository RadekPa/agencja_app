import { prisma } from '../../../../lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id)
  const contact = await prisma.contact.findUnique({ 
    where: { id }
  })
  return NextResponse.json(contact)
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id)
  const body = await req.json()
  
  const contact = await prisma.contact.update({ 
    where: { id }, 
    data: { 
      phoneNumber: body.phoneNumber || null,
      firstName: body.firstName,
      middleName: body.middleName || null,
      lastName: body.lastName,
      informal: body.informal ?? 0,
      fax: body.fax || null,
      email: body.email || null,
      contactPosition: body.contactPosition || null,
      accountant: body.accountant || null,
    }
  })
  return NextResponse.json(contact)
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id)
  await prisma.contact.delete({ where: { id } })
  return NextResponse.json({ ok: true })
}
