import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AuthorID: z.literal(true).optional()
}).strict();
export const TblAuthorsSumAggregateInputObjectSchema: z.ZodType<Prisma.TblAuthorsSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblAuthorsSumAggregateInputType>;
export const TblAuthorsSumAggregateInputObjectZodSchema = makeSchema();
