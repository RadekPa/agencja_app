import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblInvoiceSelectObjectSchema as tblInvoiceSelectObjectSchema } from './objects/tblInvoiceSelect.schema';
import { tblInvoiceCreateInputObjectSchema as tblInvoiceCreateInputObjectSchema } from './objects/tblInvoiceCreateInput.schema';
import { tblInvoiceUncheckedCreateInputObjectSchema as tblInvoiceUncheckedCreateInputObjectSchema } from './objects/tblInvoiceUncheckedCreateInput.schema';

export const tblInvoiceCreateOneSchema: z.ZodType<Prisma.tblInvoiceCreateArgs> = z.object({ select: tblInvoiceSelectObjectSchema.optional(),  data: z.union([tblInvoiceCreateInputObjectSchema, tblInvoiceUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.tblInvoiceCreateArgs>;

export const tblInvoiceCreateOneZodSchema = z.object({ select: tblInvoiceSelectObjectSchema.optional(),  data: z.union([tblInvoiceCreateInputObjectSchema, tblInvoiceUncheckedCreateInputObjectSchema]) }).strict();