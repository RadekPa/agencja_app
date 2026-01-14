import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  LangAbb: z.literal(true).optional(),
  LangDesc: z.literal(true).optional(),
  LangPL: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const DictLanguagesCountAggregateInputObjectSchema: z.ZodType<Prisma.DictLanguagesCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictLanguagesCountAggregateInputType>;
export const DictLanguagesCountAggregateInputObjectZodSchema = makeSchema();
