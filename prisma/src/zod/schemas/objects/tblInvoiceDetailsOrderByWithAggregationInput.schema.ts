import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblInvoiceDetailsCountOrderByAggregateInputObjectSchema as tblInvoiceDetailsCountOrderByAggregateInputObjectSchema } from './tblInvoiceDetailsCountOrderByAggregateInput.schema';
import { tblInvoiceDetailsAvgOrderByAggregateInputObjectSchema as tblInvoiceDetailsAvgOrderByAggregateInputObjectSchema } from './tblInvoiceDetailsAvgOrderByAggregateInput.schema';
import { tblInvoiceDetailsMaxOrderByAggregateInputObjectSchema as tblInvoiceDetailsMaxOrderByAggregateInputObjectSchema } from './tblInvoiceDetailsMaxOrderByAggregateInput.schema';
import { tblInvoiceDetailsMinOrderByAggregateInputObjectSchema as tblInvoiceDetailsMinOrderByAggregateInputObjectSchema } from './tblInvoiceDetailsMinOrderByAggregateInput.schema';
import { tblInvoiceDetailsSumOrderByAggregateInputObjectSchema as tblInvoiceDetailsSumOrderByAggregateInputObjectSchema } from './tblInvoiceDetailsSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  InvNum: SortOrderSchema.optional(),
  InvDetKey: SortOrderSchema.optional(),
  InvType: SortOrderSchema.optional(),
  AgID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  OrdNr: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  NrItems: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Amount: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  RptTitle: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  RptISBN: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  RptAuthor: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  RoyDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  RoyRight: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  RoyCopies: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  RoyPrice: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  RoyRate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  RoyXRate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  RoyThisRoy: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  RoyAdvLeft: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  RoyRoyDue: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => tblInvoiceDetailsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => tblInvoiceDetailsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => tblInvoiceDetailsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => tblInvoiceDetailsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => tblInvoiceDetailsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const tblInvoiceDetailsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.tblInvoiceDetailsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblInvoiceDetailsOrderByWithAggregationInput>;
export const tblInvoiceDetailsOrderByWithAggregationInputObjectZodSchema = makeSchema();
