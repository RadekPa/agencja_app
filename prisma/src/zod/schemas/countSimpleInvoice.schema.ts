import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SimpleInvoiceOrderByWithRelationInputObjectSchema as SimpleInvoiceOrderByWithRelationInputObjectSchema } from './objects/SimpleInvoiceOrderByWithRelationInput.schema';
import { SimpleInvoiceWhereInputObjectSchema as SimpleInvoiceWhereInputObjectSchema } from './objects/SimpleInvoiceWhereInput.schema';
import { SimpleInvoiceWhereUniqueInputObjectSchema as SimpleInvoiceWhereUniqueInputObjectSchema } from './objects/SimpleInvoiceWhereUniqueInput.schema';
import { SimpleInvoiceCountAggregateInputObjectSchema as SimpleInvoiceCountAggregateInputObjectSchema } from './objects/SimpleInvoiceCountAggregateInput.schema';

export const SimpleInvoiceCountSchema: z.ZodType<Prisma.SimpleInvoiceCountArgs> = z.object({ orderBy: z.union([SimpleInvoiceOrderByWithRelationInputObjectSchema, SimpleInvoiceOrderByWithRelationInputObjectSchema.array()]).optional(), where: SimpleInvoiceWhereInputObjectSchema.optional(), cursor: SimpleInvoiceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SimpleInvoiceCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.SimpleInvoiceCountArgs>;

export const SimpleInvoiceCountZodSchema = z.object({ orderBy: z.union([SimpleInvoiceOrderByWithRelationInputObjectSchema, SimpleInvoiceOrderByWithRelationInputObjectSchema.array()]).optional(), where: SimpleInvoiceWhereInputObjectSchema.optional(), cursor: SimpleInvoiceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SimpleInvoiceCountAggregateInputObjectSchema ]).optional() }).strict();