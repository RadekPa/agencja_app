import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerArgsObjectSchema as CustomerArgsObjectSchema } from './CustomerArgs.schema'

const makeSchema = () => z.object({
  billTo: z.union([z.boolean(), z.lazy(() => CustomerArgsObjectSchema)]).optional(),
  client: z.union([z.boolean(), z.lazy(() => CustomerArgsObjectSchema)]).optional()
}).strict();
export const SimpleInvoiceIncludeObjectSchema: z.ZodType<Prisma.SimpleInvoiceInclude> = makeSchema() as unknown as z.ZodType<Prisma.SimpleInvoiceInclude>;
export const SimpleInvoiceIncludeObjectZodSchema = makeSchema();
