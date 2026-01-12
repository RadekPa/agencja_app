import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SimpleInvoiceSelectObjectSchema as SimpleInvoiceSelectObjectSchema } from './objects/SimpleInvoiceSelect.schema';
import { SimpleInvoiceIncludeObjectSchema as SimpleInvoiceIncludeObjectSchema } from './objects/SimpleInvoiceInclude.schema';
import { SimpleInvoiceUpdateInputObjectSchema as SimpleInvoiceUpdateInputObjectSchema } from './objects/SimpleInvoiceUpdateInput.schema';
import { SimpleInvoiceUncheckedUpdateInputObjectSchema as SimpleInvoiceUncheckedUpdateInputObjectSchema } from './objects/SimpleInvoiceUncheckedUpdateInput.schema';
import { SimpleInvoiceWhereUniqueInputObjectSchema as SimpleInvoiceWhereUniqueInputObjectSchema } from './objects/SimpleInvoiceWhereUniqueInput.schema';

export const SimpleInvoiceUpdateOneSchema: z.ZodType<Prisma.SimpleInvoiceUpdateArgs> = z.object({ select: SimpleInvoiceSelectObjectSchema.optional(), include: SimpleInvoiceIncludeObjectSchema.optional(), data: z.union([SimpleInvoiceUpdateInputObjectSchema, SimpleInvoiceUncheckedUpdateInputObjectSchema]), where: SimpleInvoiceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SimpleInvoiceUpdateArgs>;

export const SimpleInvoiceUpdateOneZodSchema = z.object({ select: SimpleInvoiceSelectObjectSchema.optional(), include: SimpleInvoiceIncludeObjectSchema.optional(), data: z.union([SimpleInvoiceUpdateInputObjectSchema, SimpleInvoiceUncheckedUpdateInputObjectSchema]), where: SimpleInvoiceWhereUniqueInputObjectSchema }).strict();