import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PersonID: z.literal(true).optional()
}).strict();
export const TblUsersSumAggregateInputObjectSchema: z.ZodType<Prisma.TblUsersSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblUsersSumAggregateInputType>;
export const TblUsersSumAggregateInputObjectZodSchema = makeSchema();
