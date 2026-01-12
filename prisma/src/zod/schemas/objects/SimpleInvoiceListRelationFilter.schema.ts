import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SimpleInvoiceWhereInputObjectSchema as SimpleInvoiceWhereInputObjectSchema } from './SimpleInvoiceWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => SimpleInvoiceWhereInputObjectSchema).optional(),
  some: z.lazy(() => SimpleInvoiceWhereInputObjectSchema).optional(),
  none: z.lazy(() => SimpleInvoiceWhereInputObjectSchema).optional()
}).strict();
export const SimpleInvoiceListRelationFilterObjectSchema: z.ZodType<Prisma.SimpleInvoiceListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.SimpleInvoiceListRelationFilter>;
export const SimpleInvoiceListRelationFilterObjectZodSchema = makeSchema();
