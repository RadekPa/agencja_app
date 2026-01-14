import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblInvoiceDetailsSelectObjectSchema as tblInvoiceDetailsSelectObjectSchema } from './objects/tblInvoiceDetailsSelect.schema';
import { tblInvoiceDetailsCreateInputObjectSchema as tblInvoiceDetailsCreateInputObjectSchema } from './objects/tblInvoiceDetailsCreateInput.schema';
import { tblInvoiceDetailsUncheckedCreateInputObjectSchema as tblInvoiceDetailsUncheckedCreateInputObjectSchema } from './objects/tblInvoiceDetailsUncheckedCreateInput.schema';

export const tblInvoiceDetailsCreateOneSchema: z.ZodType<Prisma.tblInvoiceDetailsCreateArgs> = z.object({ select: tblInvoiceDetailsSelectObjectSchema.optional(),  data: z.union([tblInvoiceDetailsCreateInputObjectSchema, tblInvoiceDetailsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.tblInvoiceDetailsCreateArgs>;

export const tblInvoiceDetailsCreateOneZodSchema = z.object({ select: tblInvoiceDetailsSelectObjectSchema.optional(),  data: z.union([tblInvoiceDetailsCreateInputObjectSchema, tblInvoiceDetailsUncheckedCreateInputObjectSchema]) }).strict();