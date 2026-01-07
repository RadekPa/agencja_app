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

  // Build where clause for search (SQL Server doesn't support mode: 'insensitive')
  const where: Prisma.ClientWhereInput = search ? {
    OR: [
      { name: { contains: search } },
      { email: { contains: search } },
      { phone: { contains: search } },
      { nip: { contains: search } },
    ]
  } : {}

  // Build orderBy - validate sortBy field
  const validSortFields = ['id', 'name', 'email', 'phone', 'createdAt']
  const orderByField = validSortFields.includes(sortBy) ? sortBy : 'id'
  const orderBy = { [orderByField]: sortOrder === 'desc' ? 'desc' : 'asc' } as Prisma.ClientOrderByWithRelationInput

  // Get total count for pagination
  const total = await prisma.customer.count({ where })

  // Get paginated results
  const clients = await prisma.customer.findMany({
    where,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  })

  return NextResponse.json({
    data: clients,
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
  const client = await prisma.customer.create({ 
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
  return NextResponse.json(client, { status: 201 })
}
