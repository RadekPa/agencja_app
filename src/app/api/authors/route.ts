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

  const p = prisma as any
  
  // Build where clause for search
  const where: any = search ? {
    OR: [
      { firstName: { contains: search } },
      { lastName: { contains: search } },
      { fullName: { contains: search } },
      { penName: { contains: search } },
    ]
  } : {}

  // Build orderBy - validate sortBy field
  const validSortFields = ['id', 'firstName', 'lastName', 'fullName', 'penName', 'dateMod']
  const orderByField = validSortFields.includes(sortBy) ? sortBy : 'id'
  const orderBy = { [orderByField]: sortOrder === 'desc' ? 'desc' : 'asc' }

  // Get total count for pagination
  const total = await p.author.count({ where })

  // Get paginated results
  const authors = await p.author.findMany({
    where,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  })

  return NextResponse.json({
    data: authors,
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
  
  const author = await p.author.create({ 
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
  return NextResponse.json(author, { status: 201 })
}
