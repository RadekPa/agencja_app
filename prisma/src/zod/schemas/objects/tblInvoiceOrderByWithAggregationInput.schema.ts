import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblInvoiceCountOrderByAggregateInputObjectSchema as tblInvoiceCountOrderByAggregateInputObjectSchema } from './tblInvoiceCountOrderByAggregateInput.schema';
import { tblInvoiceAvgOrderByAggregateInputObjectSchema as tblInvoiceAvgOrderByAggregateInputObjectSchema } from './tblInvoiceAvgOrderByAggregateInput.schema';
import { tblInvoiceMaxOrderByAggregateInputObjectSchema as tblInvoiceMaxOrderByAggregateInputObjectSchema } from './tblInvoiceMaxOrderByAggregateInput.schema';
import { tblInvoiceMinOrderByAggregateInputObjectSchema as tblInvoiceMinOrderByAggregateInputObjectSchema } from './tblInvoiceMinOrderByAggregateInput.schema';
import { tblInvoiceSumOrderByAggregateInputObjectSchema as tblInvoiceSumOrderByAggregateInputObjectSchema } from './tblInvoiceSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  InvNum: SortOrderSchema.optional(),
  InvType: SortOrderSchema.optional(),
  InvDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  BillToId: SortOrderSchema.optional(),
  ClientId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ShipToId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  CurrId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  TotalInvNET: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  VATPerc: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  TermDD: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Remarks: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Status: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  SumInWords: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Balance: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  CliRef: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Descr: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  DateDue: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  UserName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  AgentID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  TaxCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  TaxValue: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  TaxInfo: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  PropID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => tblInvoiceCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => tblInvoiceAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => tblInvoiceMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => tblInvoiceMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => tblInvoiceSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const tblInvoiceOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.tblInvoiceOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblInvoiceOrderByWithAggregationInput>;
export const tblInvoiceOrderByWithAggregationInputObjectZodSchema = makeSchema();
