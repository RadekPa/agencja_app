import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Step: z.literal(true).optional(),
  AgrRightID: z.literal(true).optional(),
  AgrID: z.literal(true).optional(),
  CpsMax: z.literal(true).optional(),
  Rate: z.literal(true).optional()
}).strict();
export const TblRoyRatesMaxAggregateInputObjectSchema: z.ZodType<Prisma.TblRoyRatesMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblRoyRatesMaxAggregateInputType>;
export const TblRoyRatesMaxAggregateInputObjectZodSchema = makeSchema();
