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
export const tblAgrRightsMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblAgrRightsMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsMaxOrderByAggregateInput>;
export const tblAgrRightsMaxOrderByAggregateInputObjectZodSchema = makeSchema();
