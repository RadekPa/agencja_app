import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SimpleInvoiceSelectObjectSchema as SimpleInvoiceSelectObjectSchema } from './objects/SimpleInvoiceSelect.schema';
import { SimpleInvoiceIncludeObjectSchema as SimpleInvoiceIncludeObjectSchema } from './objects/SimpleInvoiceInclude.schema';
import { SimpleInvoiceWhereUniqueInputObjectSchema as SimpleInvoiceWhereUniqueInputObjectSchema } from './objects/SimpleInvoiceWhereUniqueInput.schema';

export const SimpleInvoiceFindUniqueSchema: z.ZodType<Prisma.SimpleInvoiceFindUniqueArgs> = z.object({ select: SimpleInvoiceSelectObjectSchema.optional(), include: SimpleInvoiceIncludeObjectSchema.optional(), where: SimpleInvoiceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SimpleInvoiceFindUniqueArgs>;

export const SimpleInvoiceFindUniqueZodSchema = z.object({ select: SimpleInvoiceSelectObjectSchema.optional(), include: SimpleInvoiceIncludeObjectSchema.optional(), where: SimpleInvoiceWhereUniqueInputObjectSchema }).strict();