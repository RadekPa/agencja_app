import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblInvoiceSelectObjectSchema as tblInvoiceSelectObjectSchema } from './objects/tblInvoiceSelect.schema';
import { tblInvoiceWhereUniqueInputObjectSchema as tblInvoiceWhereUniqueInputObjectSchema } from './objects/tblInvoiceWhereUniqueInput.schema';

export const tblInvoiceFindUniqueOrThrowSchema: z.ZodType<Prisma.tblInvoiceFindUniqueOrThrowArgs> = z.object({ select: tblInvoiceSelectObjectSchema.optional(),  where: tblInvoiceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblInvoiceFindUniqueOrThrowArgs>;

export const tblInvoiceFindUniqueOrThrowZodSchema = z.object({ select: tblInvoiceSelectObjectSchema.optional(),  where: tblInvoiceWhereUniqueInputObjectSchema }).strict();