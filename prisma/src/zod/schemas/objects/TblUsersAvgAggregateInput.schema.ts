import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PersonID: z.literal(true).optional()
}).strict();
export const TblUsersAvgAggregateInputObjectSchema: z.ZodType<Prisma.TblUsersAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblUsersAvgAggregateInputType>;
export const TblUsersAvgAggregateInputObjectZodSchema = makeSchema();
