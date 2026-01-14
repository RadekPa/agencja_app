import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Login: z.literal(true).optional(),
  Name: z.literal(true).optional(),
  Value: z.literal(true).optional()
}).strict();
export const TblUserParamsMaxAggregateInputObjectSchema: z.ZodType<Prisma.TblUserParamsMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblUserParamsMaxAggregateInputType>;
export const TblUserParamsMaxAggregateInputObjectZodSchema = makeSchema();
