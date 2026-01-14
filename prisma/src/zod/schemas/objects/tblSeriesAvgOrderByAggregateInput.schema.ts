import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  SeriesID: SortOrderSchema.optional(),
  CustID: SortOrderSchema.optional()
}).strict();
export const tblSeriesAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblSeriesAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSeriesAvgOrderByAggregateInput>;
export const tblSeriesAvgOrderByAggregateInputObjectZodSchema = makeSchema();
