import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AuthorID: z.literal(true).optional(),
  TitleID: z.literal(true).optional(),
  Main: z.literal(true).optional(),
  Lp: z.literal(true).optional()
}).strict();
export const TblTitAuthorsMaxAggregateInputObjectSchema: z.ZodType<Prisma.TblTitAuthorsMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblTitAuthorsMaxAggregateInputType>;
export const TblTitAuthorsMaxAggregateInputObjectZodSchema = makeSchema();
