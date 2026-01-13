import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SimpleInvoiceWhereInputObjectSchema as SimpleInvoiceWhereInputObjectSchema } from './SimpleInvoiceWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SimpleInvoiceWhereInputObjectSchema).optional()
}).strict();
export const CustomerCountOutputTypeCountSimpleInvoicesAsBillToArgsObjectSchema = makeSchema();
export const CustomerCountOutputTypeCountSimpleInvoicesAsBillToArgsObjectZodSchema = makeSchema();
