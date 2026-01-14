import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id)

    const p = prisma as any
    const agreement = await p.tblAgreements.findUnique({
      where: { AgrID: id },
      include: {
        tblCustomers: true,
        tblTitles: { select: { TitleID: true, Title: true, ISBN: true } },
        dictCurrencies: { select: { CurrID: true, CurrDesc: true } },
        dictLanguages: { select: { LangAbb: true, LangDesc: true } },
        tblAgrEvents: { take: 10, orderBy: { EventDate: 'desc' as const } },
        tblAgrRights: { take: 10 },
        tblRoyalty: { take: 10 }
      }
    })

    if (!agreement) {
      return NextResponse.json({ error: 'Agreement not found' }, { status: 404 })
    }

    return NextResponse.json({
      id: agreement.AgrID,
      customerId: agreement.CustID,
      customerName: agreement.tblCustomers?.Name ?? null,
      customerDetails: agreement.tblCustomers || null,
      titleId: agreement.TitleID,
      titleName: agreement.tblTitles?.Title ?? null,
      titleDetails: agreement.tblTitles || null,
      date: agreement.AgrDate.toISOString(),
      currency: agreement.CurrID || null,
      currencyDesc: agreement.dictCurrencies?.CurrDesc || null,
      language: agreement.LangAbbr || null,
      languageDesc: agreement.dictLanguages?.LangDesc || null,
      commission: agreement.Commission ? Number(agreement.Commission) : 0,
      commissionMaterials: agreement.CommissionMaterials ? Number(agreement.CommissionMaterials) : 0,
      clientReference: agreement.ClientReference || null,
      status: agreement.Status || 'A',
      validYY: agreement.ValidYY || 0,
      pubTermMM: agreement.PubTermMM || 0,
      maxNoOfCopies: agreement.MaxNoOfCopies || 0,
      minNoOfCopies: agreement.MinNoOfCopies || 0,
      estimatedCopyPrice: agreement.EstimatedCopyPrice ? Number(agreement.EstimatedCopyPrice) : 0,
      graalShare: agreement.GraalShare ? Number(agreement.GraalShare) : 0,
      copiesToOwner: agreement.CopiesToOwner || 0,
      copiesToGraal: agreement.CopiesToGraal || 0,
      graalRepresent: agreement.GraalRepresent || false,
      remarks: agreement.Remarks || null,
      localTitle: agreement.LocalTitle || null,
      localISBN: agreement.LocalISBN || null,
      localPubDate: agreement.LocalPubDate?.toISOString() || null,
      agrDoc: agreement.AgrDoc || null,
      dateMod: agreement.DateMod?.toISOString() || null,
      userMod: agreement.UserMod || null,
      events: agreement.tblAgrEvents || [],
      rights: agreement.tblAgrRights || [],
      royalties: agreement.tblRoyalty || []
    })
  } catch (err: any) {
    console.error('Error in GET /api/agreements/[id]:', err)
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}
