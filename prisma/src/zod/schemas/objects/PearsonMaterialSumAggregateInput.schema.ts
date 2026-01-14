import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  MyNumber: z.literal(true).optional(),
  ContractID: z.literal(true).optional(),
  Amount: z.literal(true).optional()
}).strict();
export const PearsonMaterialSumAggregateInputObjectSchema: z.ZodType<Prisma.PearsonMaterialSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PearsonMaterialSumAggregateInputType>;
export const PearsonMaterialSumAggregateInputObjectZodSchema = makeSchema();
