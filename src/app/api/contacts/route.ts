import { prisma } from '../../../lib/prisma'
import { NextResponse } from 'next/server'
import { Prisma } from '@prisma/client'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const search = searchParams.get('search') || ''
  const page = parseInt(searchParams.get('page') || '1')
  const pageSize = parseInt(searchParams.get('pageSize') || '10')
  const sortBy = searchParams.get('sortBy') || 'id'
  const sortOrder = searchParams.get('sortOrder') || 'asc'

  const mapOrderField = (field: string) => {
    const mapping: Record<string, string> = {
      id: 'id',
      firstName: 'firstName',
      lastName: 'lastName',
      email: 'email',
      phoneNumber: 'phoneNumber',
      dateMod: 'dateMod'
    }
    return mapping[field] || 'id'
  }

  const where: Prisma.ContactWhereInput = search
    ? {
        OR: [
          { firstName: { contains: search, mode: 'insensitive' } },
          { lastName: { contains: search, mode: 'insensitive' } },
          { email: { contains: search, mode: 'insensitive' } },
          { phoneNumber: { contains: search, mode: 'insensitive' } }
        ]
      }
    : {}

  const orderBy = {
    [mapOrderField(sortBy)]: sortOrder === 'desc' ? 'desc' : 'asc'
  } as Prisma.ContactOrderByWithRelationInput

  const total = await prisma.contact.count({ where })
  const contacts = await prisma.contact.findMany({
    where,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize
  })

  const mapped = contacts.map((c: any) => ({
    id: c.id,
    phoneNumber: c.phoneNumber,
    firstName: c.firstName,
    middleName: c.middleName,
    lastName: c.lastName,
    informal: c.informal,
    fax: c.fax,
    email: c.email,
    contactPosition: c.contactPosition,
    accountant: c.accountant,
    dateMod: c.dateMod,
    userMod: c.userMod
  }))

  return NextResponse.json({
    data: mapped,
    meta: {
      page,
      pageSize,
      total,
      pages: Math.ceil(total / pageSize)
    }
  })
}

export async function POST(req: Request) {
  const body = await req.json()
  const contact = await prisma.contact.create({
    data: {
      phoneNumber: body.phoneNumber || null,
      firstName: body.firstName,
      middleName: body.middleName || null,
      lastName: body.lastName,
      informal: body.informal ?? 0,
      fax: body.fax || null,
      email: body.email || null,
      contactPosition: body.contactPosition || null,
      accountant: body.accountant || null
    }
  })

  const mapped = {
    id: contact.id,
    phoneNumber: contact.phoneNumber,
    firstName: contact.firstName,
    middleName: contact.middleName,
    lastName: contact.lastName,
    informal: contact.informal,
    fax: contact.fax,
    email: contact.email,
    contactPosition: contact.contactPosition,
    accountant: contact.accountant,
    dateMod: contact.dateMod,
    userMod: contact.userMod
  }

  return NextResponse.json(mapped, { status: 201 })
}
