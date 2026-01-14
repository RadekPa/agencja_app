import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblInvoiceSelectObjectSchema as tblInvoiceSelectObjectSchema } from './objects/tblInvoiceSelect.schema';
import { tblInvoiceWhereUniqueInputObjectSchema as tblInvoiceWhereUniqueInputObjectSchema } from './objects/tblInvoiceWhereUniqueInput.schema';
import { tblInvoiceCreateInputObjectSchema as tblInvoiceCreateInputObjectSchema } from './objects/tblInvoiceCreateInput.schema';
import { tblInvoiceUncheckedCreateInputObjectSchema as tblInvoiceUncheckedCreateInputObjectSchema } from './objects/tblInvoiceUncheckedCreateInput.schema';
import { tblInvoiceUpdateInputObjectSchema as tblInvoiceUpdateInputObjectSchema } from './objects/tblInvoiceUpdateInput.schema';
import { tblInvoiceUncheckedUpdateInputObjectSchema as tblInvoiceUncheckedUpdateInputObjectSchema } from './objects/tblInvoiceUncheckedUpdateInput.schema';

export const tblInvoiceUpsertOneSchema: z.ZodType<Prisma.tblInvoiceUpsertArgs> = z.object({ select: tblInvoiceSelectObjectSchema.optional(),  where: tblInvoiceWhereUniqueInputObjectSchema, create: z.union([ tblInvoiceCreateInputObjectSchema, tblInvoiceUncheckedCreateInputObjectSchema ]), update: z.union([ tblInvoiceUpdateInputObjectSchema, tblInvoiceUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.tblInvoiceUpsertArgs>;

export const tblInvoiceUpsertOneZodSchema = z.object({ select: tblInvoiceSelectObjectSchema.optional(),  where: tblInvoiceWhereUniqueInputObjectSchema, create: z.union([ tblInvoiceCreateInputObjectSchema, tblInvoiceUncheckedCreateInputObjectSchema ]), update: z.union([ tblInvoiceUpdateInputObjectSchema, tblInvoiceUncheckedUpdateInputObjectSchema ]) }).strict();