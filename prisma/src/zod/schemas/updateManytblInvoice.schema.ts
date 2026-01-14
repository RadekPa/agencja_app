import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblInvoiceUpdateManyMutationInputObjectSchema as tblInvoiceUpdateManyMutationInputObjectSchema } from './objects/tblInvoiceUpdateManyMutationInput.schema';
import { tblInvoiceWhereInputObjectSchema as tblInvoiceWhereInputObjectSchema } from './objects/tblInvoiceWhereInput.schema';

export const tblInvoiceUpdateManySchema: z.ZodType<Prisma.tblInvoiceUpdateManyArgs> = z.object({ data: tblInvoiceUpdateManyMutationInputObjectSchema, where: tblInvoiceWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblInvoiceUpdateManyArgs>;

export const tblInvoiceUpdateManyZodSchema = z.object({ data: tblInvoiceUpdateManyMutationInputObjectSchema, where: tblInvoiceWhereInputObjectSchema.optional() }).strict();