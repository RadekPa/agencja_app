import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  SeriesID: SortOrderSchema.optional(),
  CustID: SortOrderSchema.optional()
}).strict();
export const tblSeriesSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblSeriesSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSeriesSumOrderByAggregateInput>;
export const tblSeriesSumOrderByAggregateInputObjectZodSchema = makeSchema();
