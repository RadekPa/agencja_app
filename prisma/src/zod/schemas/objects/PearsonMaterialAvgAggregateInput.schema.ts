import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  MyNumber: z.literal(true).optional(),
  ContractID: z.literal(true).optional(),
  Amount: z.literal(true).optional()
}).strict();
export const PearsonMaterialAvgAggregateInputObjectSchema: z.ZodType<Prisma.PearsonMaterialAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PearsonMaterialAvgAggregateInputType>;
export const PearsonMaterialAvgAggregateInputObjectZodSchema = makeSchema();
