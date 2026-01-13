import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerCountOutputTypeCountInvoicesArgsObjectSchema as CustomerCountOutputTypeCountInvoicesArgsObjectSchema } from './CustomerCountOutputTypeCountInvoicesArgs.schema';
import { CustomerCountOutputTypeCountSimpleInvoicesAsClientArgsObjectSchema as CustomerCountOutputTypeCountSimpleInvoicesAsClientArgsObjectSchema } from './CustomerCountOutputTypeCountSimpleInvoicesAsClientArgs.schema';
import { CustomerCountOutputTypeCountSimpleInvoicesAsBillToArgsObjectSchema as CustomerCountOutputTypeCountSimpleInvoicesAsBillToArgsObjectSchema } from './CustomerCountOutputTypeCountSimpleInvoicesAsBillToArgs.schema'

const makeSchema = () => z.object({
  invoices: z.union([z.boolean(), z.lazy(() => CustomerCountOutputTypeCountInvoicesArgsObjectSchema)]).optional(),
  simpleInvoicesAsClient: z.union([z.boolean(), z.lazy(() => CustomerCountOutputTypeCountSimpleInvoicesAsClientArgsObjectSchema)]).optional(),
  simpleInvoicesAsBillTo: z.union([z.boolean(), z.lazy(() => CustomerCountOutputTypeCountSimpleInvoicesAsBillToArgsObjectSchema)]).optional()
}).strict();
export const CustomerCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.CustomerCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.CustomerCountOutputTypeSelect>;
export const CustomerCountOutputTypeSelectObjectZodSchema = makeSchema();
