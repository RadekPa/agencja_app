import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { SimpleInvoiceCountOrderByAggregateInputObjectSchema as SimpleInvoiceCountOrderByAggregateInputObjectSchema } from './SimpleInvoiceCountOrderByAggregateInput.schema';
import { SimpleInvoiceAvgOrderByAggregateInputObjectSchema as SimpleInvoiceAvgOrderByAggregateInputObjectSchema } from './SimpleInvoiceAvgOrderByAggregateInput.schema';
import { SimpleInvoiceMaxOrderByAggregateInputObjectSchema as SimpleInvoiceMaxOrderByAggregateInputObjectSchema } from './SimpleInvoiceMaxOrderByAggregateInput.schema';
import { SimpleInvoiceMinOrderByAggregateInputObjectSchema as SimpleInvoiceMinOrderByAggregateInputObjectSchema } from './SimpleInvoiceMinOrderByAggregateInput.schema';
import { SimpleInvoiceSumOrderByAggregateInputObjectSchema as SimpleInvoiceSumOrderByAggregateInputObjectSchema } from './SimpleInvoiceSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  invType: SortOrderSchema.optional(),
  invDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  billToId: SortOrderSchema.optional(),
  clientId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  shipToId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  currId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  totalInvNET: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  vatPerc: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  termDD: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  remarks: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  status: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  sumInWords: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  balance: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  cliRef: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  descr: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  dateDue: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  userName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  agentID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  taxCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  taxValue: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  taxInfo: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  propID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => SimpleInvoiceCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => SimpleInvoiceAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => SimpleInvoiceMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => SimpleInvoiceMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => SimpleInvoiceSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const SimpleInvoiceOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.SimpleInvoiceOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.SimpleInvoiceOrderByWithAggregationInput>;
export const SimpleInvoiceOrderByWithAggregationInputObjectZodSchema = makeSchema();
