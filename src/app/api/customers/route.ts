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
  // Prisma model is `tblCustomers` with PascalCase fields from the DB table
  const where: Prisma.tblCustomersWhereInput = search ? {
    OR: [
      { Name: { contains: search } },
      { DefaultEmail: { contains: search } },
      { DefaultPhone: { contains: search } },
      { TaxID: { contains: search } },
      { CustAbb: { contains: search } },
    ]
  } : {}

  // Build orderBy - validate sortBy field
  const validSortFields = ['id', 'name', 'email', 'phone', 'createdAt']
  const orderByField = validSortFields.includes(sortBy) ? sortBy : 'id'
  const columnMap: Record<string, keyof Prisma.tblCustomersOrderByWithRelationInput> = {
    id: 'CustID',
    name: 'Name',
    email: 'DefaultEmail',
    phone: 'DefaultPhone',
    createdAt: 'DateMod'
  }
  const orderBy = { [columnMap[orderByField]]: sortOrder === 'desc' ? 'desc' : 'asc' } as Prisma.tblCustomersOrderByWithRelationInput

  // Get total count for pagination
  const p = prisma as any
  const total = await p.tblCustomers.count({ where })

  // Get paginated results
  const clients = await p.tblCustomers.findMany({
    where,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  })

  return NextResponse.json({
    data: clients.map(c => ({
      id: c.CustID,
      custAbb: c.CustAbb,
      name: c.Name,
      email: c.DefaultEmail,
      phone: c.DefaultPhone,
      address: c.Address1,
      city: c.City,
      postalCode: c.Zip,
      nip: c.TaxID,
      regon: c.VATID,
      notes: c.Remarks,
      createdAt: c.DateMod,
    })),
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
  const p = prisma as any
  const client = await p.tblCustomers.create({
    data: {
      Name: body.name || null,
      DefaultEmail: body.email || null,
      DefaultPhone: body.phone || null,
      Address1: body.address || null,
      City: body.city || null,
      Zip: body.postalCode || null,
      TaxID: body.nip || null,
      VATID: body.regon || null,
      Remarks: body.notes || null,
      DateMod: new Date(),
    }
  })

  return NextResponse.json({ id: client.CustID }, { status: 201 })
}
