import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblInvoiceSelectObjectSchema as tblInvoiceSelectObjectSchema } from './objects/tblInvoiceSelect.schema';
import { tblInvoiceWhereUniqueInputObjectSchema as tblInvoiceWhereUniqueInputObjectSchema } from './objects/tblInvoiceWhereUniqueInput.schema';

export const tblInvoiceFindUniqueSchema: z.ZodType<Prisma.tblInvoiceFindUniqueArgs> = z.object({ select: tblInvoiceSelectObjectSchema.optional(),  where: tblInvoiceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblInvoiceFindUniqueArgs>;

export const tblInvoiceFindUniqueZodSchema = z.object({ select: tblInvoiceSelectObjectSchema.optional(),  where: tblInvoiceWhereUniqueInputObjectSchema }).strict();