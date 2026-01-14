import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblInvoiceDetailsOrderByWithRelationInputObjectSchema as tblInvoiceDetailsOrderByWithRelationInputObjectSchema } from './objects/tblInvoiceDetailsOrderByWithRelationInput.schema';
import { tblInvoiceDetailsWhereInputObjectSchema as tblInvoiceDetailsWhereInputObjectSchema } from './objects/tblInvoiceDetailsWhereInput.schema';
import { tblInvoiceDetailsWhereUniqueInputObjectSchema as tblInvoiceDetailsWhereUniqueInputObjectSchema } from './objects/tblInvoiceDetailsWhereUniqueInput.schema';
import { TblInvoiceDetailsScalarFieldEnumSchema } from './enums/TblInvoiceDetailsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tblInvoiceDetailsFindFirstOrThrowSelectSchema: z.ZodType<Prisma.tblInvoiceDetailsSelect> = z.object({
    InvNum: z.boolean().optional(),
    InvDetKey: z.boolean().optional(),
    InvType: z.boolean().optional(),
    AgID: z.boolean().optional(),
    OrdNr: z.boolean().optional(),
    NrItems: z.boolean().optional(),
    Amount: z.boolean().optional(),
    RptTitle: z.boolean().optional(),
    RptISBN: z.boolean().optional(),
    RptAuthor: z.boolean().optional(),
    RoyDate: z.boolean().optional(),
    RoyRight: z.boolean().optional(),
    RoyCopies: z.boolean().optional(),
    RoyPrice: z.boolean().optional(),
    RoyRate: z.boolean().optional(),
    RoyXRate: z.boolean().optional(),
    RoyThisRoy: z.boolean().optional(),
    RoyAdvLeft: z.boolean().optional(),
    RoyRoyDue: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tblInvoiceDetailsSelect>;

export const tblInvoiceDetailsFindFirstOrThrowSelectZodSchema = z.object({
    InvNum: z.boolean().optional(),
    InvDetKey: z.boolean().optional(),
    InvType: z.boolean().optional(),
    AgID: z.boolean().optional(),
    OrdNr: z.boolean().optional(),
    NrItems: z.boolean().optional(),
    Amount: z.boolean().optional(),
    RptTitle: z.boolean().optional(),
    RptISBN: z.boolean().optional(),
    RptAuthor: z.boolean().optional(),
    RoyDate: z.boolean().optional(),
    RoyRight: z.boolean().optional(),
    RoyCopies: z.boolean().optional(),
    RoyPrice: z.boolean().optional(),
    RoyRate: z.boolean().optional(),
    RoyXRate: z.boolean().optional(),
    RoyThisRoy: z.boolean().optional(),
    RoyAdvLeft: z.boolean().optional(),
    RoyRoyDue: z.boolean().optional()
  }).strict();

export const tblInvoiceDetailsFindFirstOrThrowSchema: z.ZodType<Prisma.tblInvoiceDetailsFindFirstOrThrowArgs> = z.object({ select: tblInvoiceDetailsFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([tblInvoiceDetailsOrderByWithRelationInputObjectSchema, tblInvoiceDetailsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblInvoiceDetailsWhereInputObjectSchema.optional(), cursor: tblInvoiceDetailsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblInvoiceDetailsScalarFieldEnumSchema, TblInvoiceDetailsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tblInvoiceDetailsFindFirstOrThrowArgs>;

export const tblInvoiceDetailsFindFirstOrThrowZodSchema = z.object({ select: tblInvoiceDetailsFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([tblInvoiceDetailsOrderByWithRelationInputObjectSchema, tblInvoiceDetailsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblInvoiceDetailsWhereInputObjectSchema.optional(), cursor: tblInvoiceDetailsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblInvoiceDetailsScalarFieldEnumSchema, TblInvoiceDetailsScalarFieldEnumSchema.array()]).optional() }).strict();