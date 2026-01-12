import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerCountOutputTypeCountInvoicesArgsObjectSchema as CustomerCountOutputTypeCountInvoicesArgsObjectSchema } from './CustomerCountOutputTypeCountInvoicesArgs.schema';
import { CustomerCountOutputTypeCountSimpleInvoicesArgsObjectSchema as CustomerCountOutputTypeCountSimpleInvoicesArgsObjectSchema } from './CustomerCountOutputTypeCountSimpleInvoicesArgs.schema'

const makeSchema = () => z.object({
  invoices: z.union([z.boolean(), z.lazy(() => CustomerCountOutputTypeCountInvoicesArgsObjectSchema)]).optional(),
  simpleInvoices: z.union([z.boolean(), z.lazy(() => CustomerCountOutputTypeCountSimpleInvoicesArgsObjectSchema)]).optional()
}).strict();
export const CustomerCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.CustomerCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.CustomerCountOutputTypeSelect>;
export const CustomerCountOutputTypeSelectObjectZodSchema = makeSchema();
