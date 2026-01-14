import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  SeriesID: z.literal(true).optional(),
  CustID: z.literal(true).optional()
}).strict();
export const TblSeriesAvgAggregateInputObjectSchema: z.ZodType<Prisma.TblSeriesAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblSeriesAvgAggregateInputType>;
export const TblSeriesAvgAggregateInputObjectZodSchema = makeSchema();
