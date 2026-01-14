import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { pdxBilansCountOrderByAggregateInputObjectSchema as pdxBilansCountOrderByAggregateInputObjectSchema } from './pdxBilansCountOrderByAggregateInput.schema';
import { pdxBilansAvgOrderByAggregateInputObjectSchema as pdxBilansAvgOrderByAggregateInputObjectSchema } from './pdxBilansAvgOrderByAggregateInput.schema';
import { pdxBilansMaxOrderByAggregateInputObjectSchema as pdxBilansMaxOrderByAggregateInputObjectSchema } from './pdxBilansMaxOrderByAggregateInput.schema';
import { pdxBilansMinOrderByAggregateInputObjectSchema as pdxBilansMinOrderByAggregateInputObjectSchema } from './pdxBilansMinOrderByAggregateInput.schema';
import { pdxBilansSumOrderByAggregateInputObjectSchema as pdxBilansSumOrderByAggregateInputObjectSchema } from './pdxBilansSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  Bil_nr: SortOrderSchema.optional(),
  Waluta: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Wyci_g: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Data_wyc: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Nasz_inv: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Type: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Kwota_wp_ywu: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  PayType: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Graal_perc: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Kwota_wyp_aty: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Kwota_inv: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Tax_10_: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  TaxPerc: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Tax: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Wyd_Debit: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Extra_Bank: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Transfer: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  AGNR: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  RIGHT: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  AUTOR: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Title: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  WYDAB: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  WYD: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  OWNAB: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  OWNER: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Sum: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  SumPLN: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  GRAAL_INCOME: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Kurs: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  GraalPLN: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => pdxBilansCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => pdxBilansAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => pdxBilansMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => pdxBilansMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => pdxBilansSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const pdxBilansOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.pdxBilansOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.pdxBilansOrderByWithAggregationInput>;
export const pdxBilansOrderByWithAggregationInputObjectZodSchema = makeSchema();
