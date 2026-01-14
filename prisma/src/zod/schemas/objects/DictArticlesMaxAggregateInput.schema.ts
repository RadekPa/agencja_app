import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Article: z.literal(true).optional(),
  LangAbb: z.literal(true).optional()
}).strict();
export const DictArticlesMaxAggregateInputObjectSchema: z.ZodType<Prisma.DictArticlesMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictArticlesMaxAggregateInputType>;
export const DictArticlesMaxAggregateInputObjectZodSchema = makeSchema();
