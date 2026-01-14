import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblInvoiceDetailsSelectObjectSchema as tblInvoiceDetailsSelectObjectSchema } from './objects/tblInvoiceDetailsSelect.schema';
import { tblInvoiceDetailsUpdateInputObjectSchema as tblInvoiceDetailsUpdateInputObjectSchema } from './objects/tblInvoiceDetailsUpdateInput.schema';
import { tblInvoiceDetailsUncheckedUpdateInputObjectSchema as tblInvoiceDetailsUncheckedUpdateInputObjectSchema } from './objects/tblInvoiceDetailsUncheckedUpdateInput.schema';
import { tblInvoiceDetailsWhereUniqueInputObjectSchema as tblInvoiceDetailsWhereUniqueInputObjectSchema } from './objects/tblInvoiceDetailsWhereUniqueInput.schema';

export const tblInvoiceDetailsUpdateOneSchema: z.ZodType<Prisma.tblInvoiceDetailsUpdateArgs> = z.object({ select: tblInvoiceDetailsSelectObjectSchema.optional(),  data: z.union([tblInvoiceDetailsUpdateInputObjectSchema, tblInvoiceDetailsUncheckedUpdateInputObjectSchema]), where: tblInvoiceDetailsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblInvoiceDetailsUpdateArgs>;

export const tblInvoiceDetailsUpdateOneZodSchema = z.object({ select: tblInvoiceDetailsSelectObjectSchema.optional(),  data: z.union([tblInvoiceDetailsUpdateInputObjectSchema, tblInvoiceDetailsUncheckedUpdateInputObjectSchema]), where: tblInvoiceDetailsWhereUniqueInputObjectSchema }).strict();