import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Article: z.literal(true).optional(),
  LangAbb: z.literal(true).optional()
}).strict();
export const DictArticlesMinAggregateInputObjectSchema: z.ZodType<Prisma.DictArticlesMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictArticlesMinAggregateInputType>;
export const DictArticlesMinAggregateInputObjectZodSchema = makeSchema();
