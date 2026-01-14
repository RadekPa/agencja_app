import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Step: z.literal(true).optional(),
  AgrRightID: z.literal(true).optional(),
  AgrID: z.literal(true).optional(),
  CpsMax: z.literal(true).optional(),
  Rate: z.literal(true).optional()
}).strict();
export const TblRoyRatesSumAggregateInputObjectSchema: z.ZodType<Prisma.TblRoyRatesSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblRoyRatesSumAggregateInputType>;
export const TblRoyRatesSumAggregateInputObjectZodSchema = makeSchema();
