import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ContractID: z.literal(true).optional(),
  Edition: z.literal(true).optional(),
  CopyrightYear: z.literal(true).optional(),
  FISBN: z.literal(true).optional(),
  TotalAdvances: z.literal(true).optional(),
  TotalRoyalties: z.literal(true).optional()
}).strict();
export const PearsonAdvAndRoyAvgAggregateInputObjectSchema: z.ZodType<Prisma.PearsonAdvAndRoyAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PearsonAdvAndRoyAvgAggregateInputType>;
export const PearsonAdvAndRoyAvgAggregateInputObjectZodSchema = makeSchema();
