import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblRoyaltyCountOrderByAggregateInputObjectSchema as tblRoyaltyCountOrderByAggregateInputObjectSchema } from './tblRoyaltyCountOrderByAggregateInput.schema';
import { tblRoyaltyAvgOrderByAggregateInputObjectSchema as tblRoyaltyAvgOrderByAggregateInputObjectSchema } from './tblRoyaltyAvgOrderByAggregateInput.schema';
import { tblRoyaltyMaxOrderByAggregateInputObjectSchema as tblRoyaltyMaxOrderByAggregateInputObjectSchema } from './tblRoyaltyMaxOrderByAggregateInput.schema';
import { tblRoyaltyMinOrderByAggregateInputObjectSchema as tblRoyaltyMinOrderByAggregateInputObjectSchema } from './tblRoyaltyMinOrderByAggregateInput.schema';
import { tblRoyaltySumOrderByAggregateInputObjectSchema as tblRoyaltySumOrderByAggregateInputObjectSchema } from './tblRoyaltySumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  RoyID: SortOrderSchema.optional(),
  AgrID: SortOrderSchema.optional(),
  AgrRightID: SortOrderSchema.optional(),
  RoyNr: SortOrderSchema.optional(),
  EnterDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  RoyDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Copies: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Price: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  RoyRate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  XRate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ThisRoy: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  AdvLeft: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  RoyDue: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Pay: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  AdvID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => tblRoyaltyCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => tblRoyaltyAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => tblRoyaltyMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => tblRoyaltyMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => tblRoyaltySumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const tblRoyaltyOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.tblRoyaltyOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblRoyaltyOrderByWithAggregationInput>;
export const tblRoyaltyOrderByWithAggregationInputObjectZodSchema = makeSchema();
