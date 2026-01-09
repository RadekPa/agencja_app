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

  // Build where clause for search
  const where: Prisma.ContactWhereInput = search ? {
    OR: [
      { firstName: { contains: search, mode: 'insensitive' } },
      { lastName: { contains: search, mode: 'insensitive' } },
      { email: { contains: search, mode: 'insensitive' } },
      { phoneNumber: { contains: search, mode: 'insensitive' } },
    ]
  } : {}

  // Build orderBy - validate sortBy field
  const validSortFields = ['id', 'firstName', 'lastName', 'email', 'phoneNumber', 'dateMod']
  const orderByField = validSortFields.includes(sortBy) ? sortBy : 'id'
  const orderBy = { [orderByField]: sortOrder === 'desc' ? 'desc' : 'asc' } as Prisma.ContactOrderByWithRelationInput

  // Get total count for pagination
  const total = await prisma.contact.count({ where })

  // Get paginated results
  const contacts = await prisma.contact.findMany({
    where,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  } as any)

  return NextResponse.json({
    data: contacts,
    meta: {
      page,
      pageSize,
      total,
      pages: Math.ceil(total / pageSize),
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
      accountant: body.accountant || null,
    } 
  })
  return NextResponse.json(contact, { status: 201 })
}
