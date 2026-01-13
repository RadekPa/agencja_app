import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoiceFindManySchema as InvoiceFindManySchema } from '../findManyInvoice.schema';
import { SimpleInvoiceFindManySchema as SimpleInvoiceFindManySchema } from '../findManySimpleInvoice.schema';
import { CustomerCountOutputTypeArgsObjectSchema as CustomerCountOutputTypeArgsObjectSchema } from './CustomerCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  custAbb: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  phone: z.boolean().optional(),
  address: z.boolean().optional(),
  city: z.boolean().optional(),
  postalCode: z.boolean().optional(),
  country: z.boolean().optional(),
  nip: z.boolean().optional(),
  regon: z.boolean().optional(),
  notes: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  invoices: z.union([z.boolean(), z.lazy(() => InvoiceFindManySchema)]).optional(),
  simpleInvoicesAsClient: z.union([z.boolean(), z.lazy(() => SimpleInvoiceFindManySchema)]).optional(),
  simpleInvoicesAsBillTo: z.union([z.boolean(), z.lazy(() => SimpleInvoiceFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CustomerCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CustomerSelectObjectSchema: z.ZodType<Prisma.CustomerSelect> = makeSchema() as unknown as z.ZodType<Prisma.CustomerSelect>;
export const CustomerSelectObjectZodSchema = makeSchema();
