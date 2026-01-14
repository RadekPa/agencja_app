import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Step: z.literal(true).optional(),
  AgrRightID: z.literal(true).optional(),
  AgrID: z.literal(true).optional(),
  CpsMax: z.literal(true).optional(),
  Rate: z.literal(true).optional()
}).strict();
export const TblRoyRatesAvgAggregateInputObjectSchema: z.ZodType<Prisma.TblRoyRatesAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblRoyRatesAvgAggregateInputType>;
export const TblRoyRatesAvgAggregateInputObjectZodSchema = makeSchema();
