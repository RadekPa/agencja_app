import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SimpleInvoiceSelectObjectSchema as SimpleInvoiceSelectObjectSchema } from './objects/SimpleInvoiceSelect.schema';
import { SimpleInvoiceIncludeObjectSchema as SimpleInvoiceIncludeObjectSchema } from './objects/SimpleInvoiceInclude.schema';
import { SimpleInvoiceWhereUniqueInputObjectSchema as SimpleInvoiceWhereUniqueInputObjectSchema } from './objects/SimpleInvoiceWhereUniqueInput.schema';
import { SimpleInvoiceCreateInputObjectSchema as SimpleInvoiceCreateInputObjectSchema } from './objects/SimpleInvoiceCreateInput.schema';
import { SimpleInvoiceUncheckedCreateInputObjectSchema as SimpleInvoiceUncheckedCreateInputObjectSchema } from './objects/SimpleInvoiceUncheckedCreateInput.schema';
import { SimpleInvoiceUpdateInputObjectSchema as SimpleInvoiceUpdateInputObjectSchema } from './objects/SimpleInvoiceUpdateInput.schema';
import { SimpleInvoiceUncheckedUpdateInputObjectSchema as SimpleInvoiceUncheckedUpdateInputObjectSchema } from './objects/SimpleInvoiceUncheckedUpdateInput.schema';

export const SimpleInvoiceUpsertOneSchema: z.ZodType<Prisma.SimpleInvoiceUpsertArgs> = z.object({ select: SimpleInvoiceSelectObjectSchema.optional(), include: SimpleInvoiceIncludeObjectSchema.optional(), where: SimpleInvoiceWhereUniqueInputObjectSchema, create: z.union([ SimpleInvoiceCreateInputObjectSchema, SimpleInvoiceUncheckedCreateInputObjectSchema ]), update: z.union([ SimpleInvoiceUpdateInputObjectSchema, SimpleInvoiceUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.SimpleInvoiceUpsertArgs>;

export const SimpleInvoiceUpsertOneZodSchema = z.object({ select: SimpleInvoiceSelectObjectSchema.optional(), include: SimpleInvoiceIncludeObjectSchema.optional(), where: SimpleInvoiceWhereUniqueInputObjectSchema, create: z.union([ SimpleInvoiceCreateInputObjectSchema, SimpleInvoiceUncheckedCreateInputObjectSchema ]), update: z.union([ SimpleInvoiceUpdateInputObjectSchema, SimpleInvoiceUncheckedUpdateInputObjectSchema ]) }).strict();