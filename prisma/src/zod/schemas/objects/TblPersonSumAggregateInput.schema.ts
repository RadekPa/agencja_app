import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PersonID: z.literal(true).optional()
}).strict();
export const TblPersonSumAggregateInputObjectSchema: z.ZodType<Prisma.TblPersonSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblPersonSumAggregateInputType>;
export const TblPersonSumAggregateInputObjectZodSchema = makeSchema();
