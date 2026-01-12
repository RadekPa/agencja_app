import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  clientId: z.literal(true).optional()
}).strict();
export const BookAuthorSumAggregateInputObjectSchema: z.ZodType<Prisma.BookAuthorSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BookAuthorSumAggregateInputType>;
export const BookAuthorSumAggregateInputObjectZodSchema = makeSchema();
