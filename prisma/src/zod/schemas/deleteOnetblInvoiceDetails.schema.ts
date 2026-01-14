import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblInvoiceDetailsSelectObjectSchema as tblInvoiceDetailsSelectObjectSchema } from './objects/tblInvoiceDetailsSelect.schema';
import { tblInvoiceDetailsWhereUniqueInputObjectSchema as tblInvoiceDetailsWhereUniqueInputObjectSchema } from './objects/tblInvoiceDetailsWhereUniqueInput.schema';

export const tblInvoiceDetailsDeleteOneSchema: z.ZodType<Prisma.tblInvoiceDetailsDeleteArgs> = z.object({ select: tblInvoiceDetailsSelectObjectSchema.optional(),  where: tblInvoiceDetailsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblInvoiceDetailsDeleteArgs>;

export const tblInvoiceDetailsDeleteOneZodSchema = z.object({ select: tblInvoiceDetailsSelectObjectSchema.optional(),  where: tblInvoiceDetailsWhereUniqueInputObjectSchema }).strict();