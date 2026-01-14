import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  SeriesID: SortOrderSchema.optional(),
  CustID: SortOrderSchema.optional(),
  SeriesFullName: SortOrderSchema.optional(),
  SeriesShortName: SortOrderSchema.optional()
}).strict();
export const tblSeriesMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblSeriesMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSeriesMinOrderByAggregateInput>;
export const tblSeriesMinOrderByAggregateInputObjectZodSchema = makeSchema();
