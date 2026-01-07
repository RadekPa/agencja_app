import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoiceWhereInputObjectSchema as InvoiceWhereInputObjectSchema } from './InvoiceWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InvoiceWhereInputObjectSchema).optional()
}).strict();
export const CustomerCountOutputTypeCountInvoicesArgsObjectSchema = makeSchema();
export const CustomerCountOutputTypeCountInvoicesArgsObjectZodSchema = makeSchema();
