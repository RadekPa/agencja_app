import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InvoiceIncludeObjectSchema as InvoiceIncludeObjectSchema } from './objects/InvoiceInclude.schema';
import { InvoiceOrderByWithRelationInputObjectSchema as InvoiceOrderByWithRelationInputObjectSchema } from './objects/InvoiceOrderByWithRelationInput.schema';
import { InvoiceWhereInputObjectSchema as InvoiceWhereInputObjectSchema } from './objects/InvoiceWhereInput.schema';
import { InvoiceWhereUniqueInputObjectSchema as InvoiceWhereUniqueInputObjectSchema } from './objects/InvoiceWhereUniqueInput.schema';
import { InvoiceScalarFieldEnumSchema } from './enums/InvoiceScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const InvoiceFindFirstOrThrowSelectSchema: z.ZodType<Prisma.InvoiceSelect> = z.object({
    id: z.boolean().optional(),
    date: z.boolean().optional(),
    dateIssued: z.boolean().optional(),
    type: z.boolean().optional(),
    clientId: z.boolean().optional(),
    client: z.boolean().optional(),
    origCurrency: z.boolean().optional(),
    fvCurrency: z.boolean().optional(),
    graalPerc: z.boolean().optional(),
    vatCode: z.boolean().optional(),
    vatPerc: z.boolean().optional(),
    netAmt: z.boolean().optional(),
    netAmtCurr: z.boolean().optional(),
    vatAmt: z.boolean().optional(),
    xrate: z.boolean().optional(),
    vatAmtCurr: z.boolean().optional(),
    grossAmt: z.boolean().optional(),
    invNr: z.boolean().optional(),
    invAmt: z.boolean().optional(),
    title: z.boolean().optional(),
    isbnNr: z.boolean().optional(),
    payType: z.boolean().optional(),
    invType: z.boolean().optional(),
    fvDescription: z.boolean().optional(),
    bilNr: z.boolean().optional(),
    origFVNr: z.boolean().optional(),
    correctFVNr: z.boolean().optional(),
    creditId: z.boolean().optional(),
    applyId: z.boolean().optional(),
    payDate: z.boolean().optional(),
    enterDate: z.boolean().optional(),
    enterEmployee: z.boolean().optional(),
    status: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.InvoiceSelect>;

export const InvoiceFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    date: z.boolean().optional(),
    dateIssued: z.boolean().optional(),
    type: z.boolean().optional(),
    clientId: z.boolean().optional(),
    client: z.boolean().optional(),
    origCurrency: z.boolean().optional(),
    fvCurrency: z.boolean().optional(),
    graalPerc: z.boolean().optional(),
    vatCode: z.boolean().optional(),
    vatPerc: z.boolean().optional(),
    netAmt: z.boolean().optional(),
    netAmtCurr: z.boolean().optional(),
    vatAmt: z.boolean().optional(),
    xrate: z.boolean().optional(),
    vatAmtCurr: z.boolean().optional(),
    grossAmt: z.boolean().optional(),
    invNr: z.boolean().optional(),
    invAmt: z.boolean().optional(),
    title: z.boolean().optional(),
    isbnNr: z.boolean().optional(),
    payType: z.boolean().optional(),
    invType: z.boolean().optional(),
    fvDescription: z.boolean().optional(),
    bilNr: z.boolean().optional(),
    origFVNr: z.boolean().optional(),
    correctFVNr: z.boolean().optional(),
    creditId: z.boolean().optional(),
    applyId: z.boolean().optional(),
    payDate: z.boolean().optional(),
    enterDate: z.boolean().optional(),
    enterEmployee: z.boolean().optional(),
    status: z.boolean().optional()
  }).strict();

export const InvoiceFindFirstOrThrowSchema: z.ZodType<Prisma.InvoiceFindFirstOrThrowArgs> = z.object({ select: InvoiceFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => InvoiceIncludeObjectSchema.optional()), orderBy: z.union([InvoiceOrderByWithRelationInputObjectSchema, InvoiceOrderByWithRelationInputObjectSchema.array()]).optional(), where: InvoiceWhereInputObjectSchema.optional(), cursor: InvoiceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([InvoiceScalarFieldEnumSchema, InvoiceScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.InvoiceFindFirstOrThrowArgs>;

export const InvoiceFindFirstOrThrowZodSchema = z.object({ select: InvoiceFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => InvoiceIncludeObjectSchema.optional()), orderBy: z.union([InvoiceOrderByWithRelationInputObjectSchema, InvoiceOrderByWithRelationInputObjectSchema.array()]).optional(), where: InvoiceWhereInputObjectSchema.optional(), cursor: InvoiceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([InvoiceScalarFieldEnumSchema, InvoiceScalarFieldEnumSchema.array()]).optional() }).strict();