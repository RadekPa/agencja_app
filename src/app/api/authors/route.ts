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
      id: 'AuthorID',
      firstName: 'FirstName',
      lastName: 'LastName',
      fullName: 'FullName',
      penName: 'PenName',
      dateMod: 'DateMod'
    }
    return mapping[field] || 'AuthorID'
  }

  const where: Prisma.tblAuthorsWhereInput = search
    ? {
        OR: [
          { FirstName: { contains: search, mode: 'insensitive' } },
          { LastName: { contains: search, mode: 'insensitive' } },
          { FullName: { contains: search, mode: 'insensitive' } },
          { PenName: { contains: search, mode: 'insensitive' } }
        ]
      }
    : {}

  const orderBy = {
    [mapOrderField(sortBy)]: sortOrder === 'desc' ? 'desc' : 'asc'
  } as Prisma.tblAuthorsOrderByWithRelationInput

  const total = await (prisma as any).tblAuthors.count({ where })
  const authors = await (prisma as any).tblAuthors.findMany({
    where,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize
  })

  const mapped = authors.map((a: any) => ({
    id: a.AuthorID,
    fullName: a.FullName,
    firstName: a.FirstName,
    middleName: a.MiddleName,
    lastName: a.LastName,
    suffix: a.Suffix,
    penName: a.PenName,
    remarks: a.Remarks,
    dateMod: a.DateMod,
    userMod: a.UserMod
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
  const author = await (prisma as any).tblAuthors.create({
    data: {
      FullName: body.fullName || null,
      FirstName: body.firstName || null,
      MiddleName: body.middleName || null,
      LastName: body.lastName || null,
      Suffix: body.suffix || null,
      PenName: body.penName || null,
      Remarks: body.remarks || null
    }
  })

  const mapped = {
    id: author.AuthorID,
    fullName: author.FullName,
    firstName: author.FirstName,
    middleName: author.MiddleName,
    lastName: author.LastName,
    suffix: author.Suffix,
    penName: author.PenName,
    remarks: author.Remarks,
    dateMod: author.DateMod,
    userMod: author.UserMod
  }

  return NextResponse.json(mapped, { status: 201 })
}
