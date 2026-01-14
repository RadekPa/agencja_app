import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Article: z.literal(true).optional(),
  LangAbb: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const DictArticlesCountAggregateInputObjectSchema: z.ZodType<Prisma.DictArticlesCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictArticlesCountAggregateInputType>;
export const DictArticlesCountAggregateInputObjectZodSchema = makeSchema();
