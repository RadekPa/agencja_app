import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SimpleInvoiceUpdateManyMutationInputObjectSchema as SimpleInvoiceUpdateManyMutationInputObjectSchema } from './objects/SimpleInvoiceUpdateManyMutationInput.schema';
import { SimpleInvoiceWhereInputObjectSchema as SimpleInvoiceWhereInputObjectSchema } from './objects/SimpleInvoiceWhereInput.schema';

export const SimpleInvoiceUpdateManySchema: z.ZodType<Prisma.SimpleInvoiceUpdateManyArgs> = z.object({ data: SimpleInvoiceUpdateManyMutationInputObjectSchema, where: SimpleInvoiceWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SimpleInvoiceUpdateManyArgs>;

export const SimpleInvoiceUpdateManyZodSchema = z.object({ data: SimpleInvoiceUpdateManyMutationInputObjectSchema, where: SimpleInvoiceWhereInputObjectSchema.optional() }).strict();