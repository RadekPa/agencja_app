import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AuthorID: z.literal(true).optional(),
  TitleID: z.literal(true).optional(),
  Main: z.literal(true).optional(),
  Lp: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TblTitAuthorsCountAggregateInputObjectSchema: z.ZodType<Prisma.TblTitAuthorsCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblTitAuthorsCountAggregateInputType>;
export const TblTitAuthorsCountAggregateInputObjectZodSchema = makeSchema();
