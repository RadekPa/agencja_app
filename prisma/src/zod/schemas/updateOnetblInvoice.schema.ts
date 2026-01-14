import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblInvoiceSelectObjectSchema as tblInvoiceSelectObjectSchema } from './objects/tblInvoiceSelect.schema';
import { tblInvoiceUpdateInputObjectSchema as tblInvoiceUpdateInputObjectSchema } from './objects/tblInvoiceUpdateInput.schema';
import { tblInvoiceUncheckedUpdateInputObjectSchema as tblInvoiceUncheckedUpdateInputObjectSchema } from './objects/tblInvoiceUncheckedUpdateInput.schema';
import { tblInvoiceWhereUniqueInputObjectSchema as tblInvoiceWhereUniqueInputObjectSchema } from './objects/tblInvoiceWhereUniqueInput.schema';

export const tblInvoiceUpdateOneSchema: z.ZodType<Prisma.tblInvoiceUpdateArgs> = z.object({ select: tblInvoiceSelectObjectSchema.optional(),  data: z.union([tblInvoiceUpdateInputObjectSchema, tblInvoiceUncheckedUpdateInputObjectSchema]), where: tblInvoiceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblInvoiceUpdateArgs>;

export const tblInvoiceUpdateOneZodSchema = z.object({ select: tblInvoiceSelectObjectSchema.optional(),  data: z.union([tblInvoiceUpdateInputObjectSchema, tblInvoiceUncheckedUpdateInputObjectSchema]), where: tblInvoiceWhereUniqueInputObjectSchema }).strict();