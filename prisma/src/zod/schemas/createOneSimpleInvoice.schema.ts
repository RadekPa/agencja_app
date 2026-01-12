import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SimpleInvoiceSelectObjectSchema as SimpleInvoiceSelectObjectSchema } from './objects/SimpleInvoiceSelect.schema';
import { SimpleInvoiceIncludeObjectSchema as SimpleInvoiceIncludeObjectSchema } from './objects/SimpleInvoiceInclude.schema';
import { SimpleInvoiceCreateInputObjectSchema as SimpleInvoiceCreateInputObjectSchema } from './objects/SimpleInvoiceCreateInput.schema';
import { SimpleInvoiceUncheckedCreateInputObjectSchema as SimpleInvoiceUncheckedCreateInputObjectSchema } from './objects/SimpleInvoiceUncheckedCreateInput.schema';

export const SimpleInvoiceCreateOneSchema: z.ZodType<Prisma.SimpleInvoiceCreateArgs> = z.object({ select: SimpleInvoiceSelectObjectSchema.optional(), include: SimpleInvoiceIncludeObjectSchema.optional(), data: z.union([SimpleInvoiceCreateInputObjectSchema, SimpleInvoiceUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.SimpleInvoiceCreateArgs>;

export const SimpleInvoiceCreateOneZodSchema = z.object({ select: SimpleInvoiceSelectObjectSchema.optional(), include: SimpleInvoiceIncludeObjectSchema.optional(), data: z.union([SimpleInvoiceCreateInputObjectSchema, SimpleInvoiceUncheckedCreateInputObjectSchema]) }).strict();