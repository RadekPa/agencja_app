import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SimpleInvoiceIncludeObjectSchema as SimpleInvoiceIncludeObjectSchema } from './objects/SimpleInvoiceInclude.schema';
import { SimpleInvoiceOrderByWithRelationInputObjectSchema as SimpleInvoiceOrderByWithRelationInputObjectSchema } from './objects/SimpleInvoiceOrderByWithRelationInput.schema';
import { SimpleInvoiceWhereInputObjectSchema as SimpleInvoiceWhereInputObjectSchema } from './objects/SimpleInvoiceWhereInput.schema';
import { SimpleInvoiceWhereUniqueInputObjectSchema as SimpleInvoiceWhereUniqueInputObjectSchema } from './objects/SimpleInvoiceWhereUniqueInput.schema';
import { SimpleInvoiceScalarFieldEnumSchema } from './enums/SimpleInvoiceScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SimpleInvoiceFindFirstSelectSchema: z.ZodType<Prisma.SimpleInvoiceSelect> = z.object({
    id: z.boolean().optional(),
    invType: z.boolean().optional(),
    invDate: z.boolean().optional(),
    billToId: z.boolean().optional(),
    billTo: z.boolean().optional(),
    clientId: z.boolean().optional(),
    client: z.boolean().optional(),
    shipToId: z.boolean().optional(),
    currId: z.boolean().optional(),
    totalInvNET: z.boolean().optional(),
    vatPerc: z.boolean().optional(),
    termDD: z.boolean().optional(),
    remarks: z.boolean().optional(),
    status: z.boolean().optional(),
    sumInWords: z.boolean().optional(),
    balance: z.boolean().optional(),
    cliRef: z.boolean().optional(),
    descr: z.boolean().optional(),
    dateDue: z.boolean().optional(),
    userName: z.boolean().optional(),
    agentID: z.boolean().optional(),
    taxCode: z.boolean().optional(),
    taxValue: z.boolean().optional(),
    taxInfo: z.boolean().optional(),
    propID: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.SimpleInvoiceSelect>;

export const SimpleInvoiceFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    invType: z.boolean().optional(),
    invDate: z.boolean().optional(),
    billToId: z.boolean().optional(),
    billTo: z.boolean().optional(),
    clientId: z.boolean().optional(),
    client: z.boolean().optional(),
    shipToId: z.boolean().optional(),
    currId: z.boolean().optional(),
    totalInvNET: z.boolean().optional(),
    vatPerc: z.boolean().optional(),
    termDD: z.boolean().optional(),
    remarks: z.boolean().optional(),
    status: z.boolean().optional(),
    sumInWords: z.boolean().optional(),
    balance: z.boolean().optional(),
    cliRef: z.boolean().optional(),
    descr: z.boolean().optional(),
    dateDue: z.boolean().optional(),
    userName: z.boolean().optional(),
    agentID: z.boolean().optional(),
    taxCode: z.boolean().optional(),
    taxValue: z.boolean().optional(),
    taxInfo: z.boolean().optional(),
    propID: z.boolean().optional()
  }).strict();

export const SimpleInvoiceFindFirstSchema: z.ZodType<Prisma.SimpleInvoiceFindFirstArgs> = z.object({ select: SimpleInvoiceFindFirstSelectSchema.optional(), include: z.lazy(() => SimpleInvoiceIncludeObjectSchema.optional()), orderBy: z.union([SimpleInvoiceOrderByWithRelationInputObjectSchema, SimpleInvoiceOrderByWithRelationInputObjectSchema.array()]).optional(), where: SimpleInvoiceWhereInputObjectSchema.optional(), cursor: SimpleInvoiceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SimpleInvoiceScalarFieldEnumSchema, SimpleInvoiceScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SimpleInvoiceFindFirstArgs>;

export const SimpleInvoiceFindFirstZodSchema = z.object({ select: SimpleInvoiceFindFirstSelectSchema.optional(), include: z.lazy(() => SimpleInvoiceIncludeObjectSchema.optional()), orderBy: z.union([SimpleInvoiceOrderByWithRelationInputObjectSchema, SimpleInvoiceOrderByWithRelationInputObjectSchema.array()]).optional(), where: SimpleInvoiceWhereInputObjectSchema.optional(), cursor: SimpleInvoiceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SimpleInvoiceScalarFieldEnumSchema, SimpleInvoiceScalarFieldEnumSchema.array()]).optional() }).strict();