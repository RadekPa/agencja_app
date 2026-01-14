import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PersonID: z.literal(true).optional()
}).strict();
export const TblPersonAvgAggregateInputObjectSchema: z.ZodType<Prisma.TblPersonAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblPersonAvgAggregateInputType>;
export const TblPersonAvgAggregateInputObjectZodSchema = makeSchema();
