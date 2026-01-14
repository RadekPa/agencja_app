import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblInvoiceDetailsUpdateManyMutationInputObjectSchema as tblInvoiceDetailsUpdateManyMutationInputObjectSchema } from './objects/tblInvoiceDetailsUpdateManyMutationInput.schema';
import { tblInvoiceDetailsWhereInputObjectSchema as tblInvoiceDetailsWhereInputObjectSchema } from './objects/tblInvoiceDetailsWhereInput.schema';

export const tblInvoiceDetailsUpdateManySchema: z.ZodType<Prisma.tblInvoiceDetailsUpdateManyArgs> = z.object({ data: tblInvoiceDetailsUpdateManyMutationInputObjectSchema, where: tblInvoiceDetailsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblInvoiceDetailsUpdateManyArgs>;

export const tblInvoiceDetailsUpdateManyZodSchema = z.object({ data: tblInvoiceDetailsUpdateManyMutationInputObjectSchema, where: tblInvoiceDetailsWhereInputObjectSchema.optional() }).strict();