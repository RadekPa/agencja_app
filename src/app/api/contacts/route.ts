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
      id: 'ContactID',
      firstName: 'FirstName',
      lastName: 'LastName',
      email: 'Email',
      phoneNumber: 'PhoneNumber',
      dateMod: 'DateMod'
    }
    return mapping[field] || 'ContactID'
  }

  const where: Prisma.tblContactsWhereInput = search
    ? {
        OR: [
          { FirstName: { contains: search, mode: 'insensitive' } },
          { LastName: { contains: search, mode: 'insensitive' } },
          { Email: { contains: search, mode: 'insensitive' } },
          { PhoneNumber: { contains: search, mode: 'insensitive' } }
        ]
      }
    : {}

  const orderBy = {
    [mapOrderField(sortBy)]: sortOrder === 'desc' ? 'desc' : 'asc'
  } as Prisma.tblContactsOrderByWithRelationInput

  const total = await (prisma as any).tblContacts.count({ where })
  const contacts = await (prisma as any).tblContacts.findMany({
    where,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize
  })

  const mapped = contacts.map((c: any) => ({
    id: c.ContactID,
    phoneNumber: c.PhoneNumber,
    firstName: c.FirstName,
    middleName: c.MiddleName,
    lastName: c.LastName,
    informal: c.Informal,
    fax: c.Fax,
    email: c.Email,
    contactPosition: c.ContactPosition,
    accountant: c.Accountant,
    dateMod: c.DateMod,
    userMod: c.UserMod
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
  const contact = await (prisma as any).tblContacts.create({
    data: {
      PhoneNumber: body.phoneNumber || null,
      FirstName: body.firstName,
      MiddleName: body.middleName || null,
      LastName: body.lastName,
      Informal: body.informal ?? 0,
      Fax: body.fax || null,
      Email: body.email || null,
      ContactPosition: body.contactPosition || null,
      Accountant: body.accountant || null
    }
  })

  const mapped = {
    id: contact.ContactID,
    phoneNumber: contact.PhoneNumber,
    firstName: contact.FirstName,
    middleName: contact.MiddleName,
    lastName: contact.LastName,
    informal: contact.Informal,
    fax: contact.Fax,
    email: contact.Email,
    contactPosition: contact.ContactPosition,
    accountant: contact.Accountant,
    dateMod: contact.DateMod,
    userMod: contact.UserMod
  }

  return NextResponse.json(mapped, { status: 201 })
}
