import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblInvoiceDetailsSelectObjectSchema as tblInvoiceDetailsSelectObjectSchema } from './objects/tblInvoiceDetailsSelect.schema';
import { tblInvoiceDetailsWhereUniqueInputObjectSchema as tblInvoiceDetailsWhereUniqueInputObjectSchema } from './objects/tblInvoiceDetailsWhereUniqueInput.schema';

export const tblInvoiceDetailsFindUniqueOrThrowSchema: z.ZodType<Prisma.tblInvoiceDetailsFindUniqueOrThrowArgs> = z.object({ select: tblInvoiceDetailsSelectObjectSchema.optional(),  where: tblInvoiceDetailsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblInvoiceDetailsFindUniqueOrThrowArgs>;

export const tblInvoiceDetailsFindUniqueOrThrowZodSchema = z.object({ select: tblInvoiceDetailsSelectObjectSchema.optional(),  where: tblInvoiceDetailsWhereUniqueInputObjectSchema }).strict();