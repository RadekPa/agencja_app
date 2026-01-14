import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblInvoiceDetailsSelectObjectSchema as tblInvoiceDetailsSelectObjectSchema } from './objects/tblInvoiceDetailsSelect.schema';
import { tblInvoiceDetailsWhereUniqueInputObjectSchema as tblInvoiceDetailsWhereUniqueInputObjectSchema } from './objects/tblInvoiceDetailsWhereUniqueInput.schema';
import { tblInvoiceDetailsCreateInputObjectSchema as tblInvoiceDetailsCreateInputObjectSchema } from './objects/tblInvoiceDetailsCreateInput.schema';
import { tblInvoiceDetailsUncheckedCreateInputObjectSchema as tblInvoiceDetailsUncheckedCreateInputObjectSchema } from './objects/tblInvoiceDetailsUncheckedCreateInput.schema';
import { tblInvoiceDetailsUpdateInputObjectSchema as tblInvoiceDetailsUpdateInputObjectSchema } from './objects/tblInvoiceDetailsUpdateInput.schema';
import { tblInvoiceDetailsUncheckedUpdateInputObjectSchema as tblInvoiceDetailsUncheckedUpdateInputObjectSchema } from './objects/tblInvoiceDetailsUncheckedUpdateInput.schema';

export const tblInvoiceDetailsUpsertOneSchema: z.ZodType<Prisma.tblInvoiceDetailsUpsertArgs> = z.object({ select: tblInvoiceDetailsSelectObjectSchema.optional(),  where: tblInvoiceDetailsWhereUniqueInputObjectSchema, create: z.union([ tblInvoiceDetailsCreateInputObjectSchema, tblInvoiceDetailsUncheckedCreateInputObjectSchema ]), update: z.union([ tblInvoiceDetailsUpdateInputObjectSchema, tblInvoiceDetailsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.tblInvoiceDetailsUpsertArgs>;

export const tblInvoiceDetailsUpsertOneZodSchema = z.object({ select: tblInvoiceDetailsSelectObjectSchema.optional(),  where: tblInvoiceDetailsWhereUniqueInputObjectSchema, create: z.union([ tblInvoiceDetailsCreateInputObjectSchema, tblInvoiceDetailsUncheckedCreateInputObjectSchema ]), update: z.union([ tblInvoiceDetailsUpdateInputObjectSchema, tblInvoiceDetailsUncheckedUpdateInputObjectSchema ]) }).strict();