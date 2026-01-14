import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblInvoiceDetailsWhereInputObjectSchema as tblInvoiceDetailsWhereInputObjectSchema } from './objects/tblInvoiceDetailsWhereInput.schema';

export const tblInvoiceDetailsDeleteManySchema: z.ZodType<Prisma.tblInvoiceDetailsDeleteManyArgs> = z.object({ where: tblInvoiceDetailsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblInvoiceDetailsDeleteManyArgs>;

export const tblInvoiceDetailsDeleteManyZodSchema = z.object({ where: tblInvoiceDetailsWhereInputObjectSchema.optional() }).strict();