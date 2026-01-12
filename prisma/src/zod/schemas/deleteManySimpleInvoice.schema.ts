import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SimpleInvoiceWhereInputObjectSchema as SimpleInvoiceWhereInputObjectSchema } from './objects/SimpleInvoiceWhereInput.schema';

export const SimpleInvoiceDeleteManySchema: z.ZodType<Prisma.SimpleInvoiceDeleteManyArgs> = z.object({ where: SimpleInvoiceWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SimpleInvoiceDeleteManyArgs>;

export const SimpleInvoiceDeleteManyZodSchema = z.object({ where: SimpleInvoiceWhereInputObjectSchema.optional() }).strict();