import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblFraVAT_NewOrderByWithRelationInputObjectSchema as tblFraVAT_NewOrderByWithRelationInputObjectSchema } from './objects/tblFraVAT_NewOrderByWithRelationInput.schema';
import { tblFraVAT_NewWhereInputObjectSchema as tblFraVAT_NewWhereInputObjectSchema } from './objects/tblFraVAT_NewWhereInput.schema';
import { tblFraVAT_NewWhereUniqueInputObjectSchema as tblFraVAT_NewWhereUniqueInputObjectSchema } from './objects/tblFraVAT_NewWhereUniqueInput.schema';
import { TblFraVATNewScalarFieldEnumSchema } from './enums/TblFraVATNewScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tblFraVAT_NewFindManySelectSchema: z.ZodType<Prisma.tblFraVAT_NewSelect> = z.object({
    FVNr: z.boolean().optional(),
    FVDate: z.boolean().optional(),
    FVDateIssued: z.boolean().optional(),
    FVType: z.boolean().optional(),
    CustID: z.boolean().optional(),
    OrigCurrency: z.boolean().optional(),
    FVCurrency: z.boolean().optional(),
    GraalPerc: z.boolean().optional(),
    VATCode: z.boolean().optional(),
    VatPerc: z.boolean().optional(),
    NetAmt: z.boolean().optional(),
    NetAmtCurr: z.boolean().optional(),
    VatAmt: z.boolean().optional(),
    XRate: z.boolean().optional(),
    VatAmtCurr: z.boolean().optional(),
    GrossAmt: z.boolean().optional(),
    InvNr: z.boolean().optional(),
    InvAmt: z.boolean().optional(),
    Title: z.boolean().optional(),
    ISBNNr: z.boolean().optional(),
    PayType: z.boolean().optional(),
    InvType: z.boolean().optional(),
    FVDescription: z.boolean().optional(),
    BilNr: z.boolean().optional(),
    OrigFVNr: z.boolean().optional(),
    CorrectFVNr: z.boolean().optional(),
    CreditID: z.boolean().optional(),
    ApplyID: z.boolean().optional(),
    PayDate: z.boolean().optional(),
    EnterDate: z.boolean().optional(),
    EnterEmployee: z.boolean().optional(),
    Status: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tblFraVAT_NewSelect>;

export const tblFraVAT_NewFindManySelectZodSchema = z.object({
    FVNr: z.boolean().optional(),
    FVDate: z.boolean().optional(),
    FVDateIssued: z.boolean().optional(),
    FVType: z.boolean().optional(),
    CustID: z.boolean().optional(),
    OrigCurrency: z.boolean().optional(),
    FVCurrency: z.boolean().optional(),
    GraalPerc: z.boolean().optional(),
    VATCode: z.boolean().optional(),
    VatPerc: z.boolean().optional(),
    NetAmt: z.boolean().optional(),
    NetAmtCurr: z.boolean().optional(),
    VatAmt: z.boolean().optional(),
    XRate: z.boolean().optional(),
    VatAmtCurr: z.boolean().optional(),
    GrossAmt: z.boolean().optional(),
    InvNr: z.boolean().optional(),
    InvAmt: z.boolean().optional(),
    Title: z.boolean().optional(),
    ISBNNr: z.boolean().optional(),
    PayType: z.boolean().optional(),
    InvType: z.boolean().optional(),
    FVDescription: z.boolean().optional(),
    BilNr: z.boolean().optional(),
    OrigFVNr: z.boolean().optional(),
    CorrectFVNr: z.boolean().optional(),
    CreditID: z.boolean().optional(),
    ApplyID: z.boolean().optional(),
    PayDate: z.boolean().optional(),
    EnterDate: z.boolean().optional(),
    EnterEmployee: z.boolean().optional(),
    Status: z.boolean().optional()
  }).strict();

export const tblFraVAT_NewFindManySchema: z.ZodType<Prisma.tblFraVAT_NewFindManyArgs> = z.object({ select: tblFraVAT_NewFindManySelectSchema.optional(),  orderBy: z.union([tblFraVAT_NewOrderByWithRelationInputObjectSchema, tblFraVAT_NewOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblFraVAT_NewWhereInputObjectSchema.optional(), cursor: tblFraVAT_NewWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblFraVATNewScalarFieldEnumSchema, TblFraVATNewScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tblFraVAT_NewFindManyArgs>;

export const tblFraVAT_NewFindManyZodSchema = z.object({ select: tblFraVAT_NewFindManySelectSchema.optional(),  orderBy: z.union([tblFraVAT_NewOrderByWithRelationInputObjectSchema, tblFraVAT_NewOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblFraVAT_NewWhereInputObjectSchema.optional(), cursor: tblFraVAT_NewWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblFraVATNewScalarFieldEnumSchema, TblFraVATNewScalarFieldEnumSchema.array()]).optional() }).strict();