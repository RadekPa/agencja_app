import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  SeriesID: SortOrderSchema.optional(),
  CustID: SortOrderSchema.optional(),
  SeriesFullName: SortOrderSchema.optional(),
  SeriesShortName: SortOrderSchema.optional()
}).strict();
export const tblSeriesCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblSeriesCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSeriesCountOrderByAggregateInput>;
export const tblSeriesCountOrderByAggregateInputObjectZodSchema = makeSchema();
