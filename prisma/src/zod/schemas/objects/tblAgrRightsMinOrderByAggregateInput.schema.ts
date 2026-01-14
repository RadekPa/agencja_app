import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  AgrRightID: SortOrderSchema.optional(),
  AgrID: SortOrderSchema.optional(),
  RightID: SortOrderSchema.optional(),
  PriceTypeID: SortOrderSchema.optional(),
  RoyPriceTypeID: SortOrderSchema.optional(),
  RoyAccountIntervalID: SortOrderSchema.optional(),
  DistID: SortOrderSchema.optional()
}).strict();
export const tblAgrRightsMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblAgrRightsMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsMinOrderByAggregateInput>;
export const tblAgrRightsMinOrderByAggregateInputObjectZodSchema = makeSchema();
