import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  MatID: z.literal(true).optional(),
  AgrID: z.literal(true).optional(),
  MatTypeID: z.literal(true).optional(),
  Amount: z.literal(true).optional()
}).strict();
export const TblMaterialSumAggregateInputObjectSchema: z.ZodType<Prisma.TblMaterialSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblMaterialSumAggregateInputType>;
export const TblMaterialSumAggregateInputObjectZodSchema = makeSchema();
