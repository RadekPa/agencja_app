import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblInvoiceSelectObjectSchema as tblInvoiceSelectObjectSchema } from './objects/tblInvoiceSelect.schema';
import { tblInvoiceWhereUniqueInputObjectSchema as tblInvoiceWhereUniqueInputObjectSchema } from './objects/tblInvoiceWhereUniqueInput.schema';

export const tblInvoiceDeleteOneSchema: z.ZodType<Prisma.tblInvoiceDeleteArgs> = z.object({ select: tblInvoiceSelectObjectSchema.optional(),  where: tblInvoiceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblInvoiceDeleteArgs>;

export const tblInvoiceDeleteOneZodSchema = z.object({ select: tblInvoiceSelectObjectSchema.optional(),  where: tblInvoiceWhereUniqueInputObjectSchema }).strict();