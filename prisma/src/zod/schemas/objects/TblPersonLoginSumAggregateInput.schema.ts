import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PersonID: z.literal(true).optional()
}).strict();
export const TblPersonLoginSumAggregateInputObjectSchema: z.ZodType<Prisma.TblPersonLoginSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblPersonLoginSumAggregateInputType>;
export const TblPersonLoginSumAggregateInputObjectZodSchema = makeSchema();
