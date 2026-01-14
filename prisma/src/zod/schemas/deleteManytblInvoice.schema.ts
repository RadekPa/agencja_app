import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblInvoiceWhereInputObjectSchema as tblInvoiceWhereInputObjectSchema } from './objects/tblInvoiceWhereInput.schema';

export const tblInvoiceDeleteManySchema: z.ZodType<Prisma.tblInvoiceDeleteManyArgs> = z.object({ where: tblInvoiceWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblInvoiceDeleteManyArgs>;

export const tblInvoiceDeleteManyZodSchema = z.object({ where: tblInvoiceWhereInputObjectSchema.optional() }).strict();