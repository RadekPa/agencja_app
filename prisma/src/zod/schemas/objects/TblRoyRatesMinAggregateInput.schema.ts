import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Step: z.literal(true).optional(),
  AgrRightID: z.literal(true).optional(),
  AgrID: z.literal(true).optional(),
  CpsMax: z.literal(true).optional(),
  Rate: z.literal(true).optional()
}).strict();
export const TblRoyRatesMinAggregateInputObjectSchema: z.ZodType<Prisma.TblRoyRatesMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblRoyRatesMinAggregateInputType>;
export const TblRoyRatesMinAggregateInputObjectZodSchema = makeSchema();
