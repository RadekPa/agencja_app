import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SimpleInvoiceSelectObjectSchema as SimpleInvoiceSelectObjectSchema } from './SimpleInvoiceSelect.schema';
import { SimpleInvoiceIncludeObjectSchema as SimpleInvoiceIncludeObjectSchema } from './SimpleInvoiceInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => SimpleInvoiceSelectObjectSchema).optional(),
  include: z.lazy(() => SimpleInvoiceIncludeObjectSchema).optional()
}).strict();
export const SimpleInvoiceArgsObjectSchema = makeSchema();
export const SimpleInvoiceArgsObjectZodSchema = makeSchema();
