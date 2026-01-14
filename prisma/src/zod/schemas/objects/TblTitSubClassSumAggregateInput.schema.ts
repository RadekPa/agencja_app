import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TitleID: z.literal(true).optional()
}).strict();
export const TblTitSubClassSumAggregateInputObjectSchema: z.ZodType<Prisma.TblTitSubClassSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblTitSubClassSumAggregateInputType>;
export const TblTitSubClassSumAggregateInputObjectZodSchema = makeSchema();
