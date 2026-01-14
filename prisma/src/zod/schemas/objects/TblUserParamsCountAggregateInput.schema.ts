import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Login: z.literal(true).optional(),
  Name: z.literal(true).optional(),
  Value: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TblUserParamsCountAggregateInputObjectSchema: z.ZodType<Prisma.TblUserParamsCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblUserParamsCountAggregateInputType>;
export const TblUserParamsCountAggregateInputObjectZodSchema = makeSchema();
