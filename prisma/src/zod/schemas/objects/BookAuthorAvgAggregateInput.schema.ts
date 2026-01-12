import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  clientId: z.literal(true).optional()
}).strict();
export const BookAuthorAvgAggregateInputObjectSchema: z.ZodType<Prisma.BookAuthorAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BookAuthorAvgAggregateInputType>;
export const BookAuthorAvgAggregateInputObjectZodSchema = makeSchema();
