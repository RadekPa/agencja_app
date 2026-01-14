import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblInvoiceOrderByWithRelationInputObjectSchema as tblInvoiceOrderByWithRelationInputObjectSchema } from './objects/tblInvoiceOrderByWithRelationInput.schema';
import { tblInvoiceWhereInputObjectSchema as tblInvoiceWhereInputObjectSchema } from './objects/tblInvoiceWhereInput.schema';
import { tblInvoiceWhereUniqueInputObjectSchema as tblInvoiceWhereUniqueInputObjectSchema } from './objects/tblInvoiceWhereUniqueInput.schema';
import { TblInvoiceCountAggregateInputObjectSchema as TblInvoiceCountAggregateInputObjectSchema } from './objects/TblInvoiceCountAggregateInput.schema';

export const tblInvoiceCountSchema: z.ZodType<Prisma.tblInvoiceCountArgs> = z.object({ orderBy: z.union([tblInvoiceOrderByWithRelationInputObjectSchema, tblInvoiceOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblInvoiceWhereInputObjectSchema.optional(), cursor: tblInvoiceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblInvoiceCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.tblInvoiceCountArgs>;

export const tblInvoiceCountZodSchema = z.object({ orderBy: z.union([tblInvoiceOrderByWithRelationInputObjectSchema, tblInvoiceOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblInvoiceWhereInputObjectSchema.optional(), cursor: tblInvoiceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblInvoiceCountAggregateInputObjectSchema ]).optional() }).strict();