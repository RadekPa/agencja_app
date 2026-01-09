import { prisma } from '../../../../lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id)
  const p = prisma as any
  const author = await p.author.findUnique({ 
    where: { id }
  })
  return NextResponse.json(author)
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id)
  const body = await req.json()
  const p = prisma as any
  
  const author = await p.author.update({ 
    where: { id }, 
    data: { 
      fullName: body.fullName || null,
      firstName: body.firstName || null,
      middleName: body.middleName || null,
      lastName: body.lastName || null,
      suffix: body.suffix || null,
      penName: body.penName || null,
      remarks: body.remarks || null,
    } 
  })
  return NextResponse.json(author)
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id)
  const p = prisma as any
  await p.author.delete({ where: { id } })
  return NextResponse.json({ ok: true })
}
