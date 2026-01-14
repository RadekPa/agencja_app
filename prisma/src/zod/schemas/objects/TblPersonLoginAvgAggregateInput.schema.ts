import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PersonID: z.literal(true).optional()
}).strict();
export const TblPersonLoginAvgAggregateInputObjectSchema: z.ZodType<Prisma.TblPersonLoginAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblPersonLoginAvgAggregateInputType>;
export const TblPersonLoginAvgAggregateInputObjectZodSchema = makeSchema();
