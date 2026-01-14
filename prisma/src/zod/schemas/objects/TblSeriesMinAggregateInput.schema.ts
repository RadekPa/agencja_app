import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  SeriesID: z.literal(true).optional(),
  CustID: z.literal(true).optional(),
  SeriesFullName: z.literal(true).optional(),
  SeriesShortName: z.literal(true).optional()
}).strict();
export const TblSeriesMinAggregateInputObjectSchema: z.ZodType<Prisma.TblSeriesMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblSeriesMinAggregateInputType>;
export const TblSeriesMinAggregateInputObjectZodSchema = makeSchema();
