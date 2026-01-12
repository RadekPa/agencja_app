import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoiceFindManySchema as InvoiceFindManySchema } from '../findManyInvoice.schema';
import { SimpleInvoiceFindManySchema as SimpleInvoiceFindManySchema } from '../findManySimpleInvoice.schema';
import { CustomerCountOutputTypeArgsObjectSchema as CustomerCountOutputTypeArgsObjectSchema } from './CustomerCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  invoices: z.union([z.boolean(), z.lazy(() => InvoiceFindManySchema)]).optional(),
  simpleInvoices: z.union([z.boolean(), z.lazy(() => SimpleInvoiceFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CustomerCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CustomerIncludeObjectSchema: z.ZodType<Prisma.CustomerInclude> = makeSchema() as unknown as z.ZodType<Prisma.CustomerInclude>;
export const CustomerIncludeObjectZodSchema = makeSchema();
