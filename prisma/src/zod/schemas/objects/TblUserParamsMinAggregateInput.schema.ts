import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Login: z.literal(true).optional(),
  Name: z.literal(true).optional(),
  Value: z.literal(true).optional()
}).strict();
export const TblUserParamsMinAggregateInputObjectSchema: z.ZodType<Prisma.TblUserParamsMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblUserParamsMinAggregateInputType>;
export const TblUserParamsMinAggregateInputObjectZodSchema = makeSchema();
