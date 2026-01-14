import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AuthorID: z.literal(true).optional()
}).strict();
export const TblAuthorsAvgAggregateInputObjectSchema: z.ZodType<Prisma.TblAuthorsAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblAuthorsAvgAggregateInputType>;
export const TblAuthorsAvgAggregateInputObjectZodSchema = makeSchema();
