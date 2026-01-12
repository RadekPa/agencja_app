import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { InvoiceOrderByRelationAggregateInputObjectSchema as InvoiceOrderByRelationAggregateInputObjectSchema } from './InvoiceOrderByRelationAggregateInput.schema';
import { SimpleInvoiceOrderByRelationAggregateInputObjectSchema as SimpleInvoiceOrderByRelationAggregateInputObjectSchema } from './SimpleInvoiceOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  custAbb: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  name: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  email: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  phone: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  address: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  city: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  postalCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  country: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  nip: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  regon: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  invoices: z.lazy(() => InvoiceOrderByRelationAggregateInputObjectSchema).optional(),
  simpleInvoices: z.lazy(() => SimpleInvoiceOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const CustomerOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CustomerOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerOrderByWithRelationInput>;
export const CustomerOrderByWithRelationInputObjectZodSchema = makeSchema();
