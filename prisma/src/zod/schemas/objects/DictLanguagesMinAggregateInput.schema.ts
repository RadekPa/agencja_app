import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  LangAbb: z.literal(true).optional(),
  LangDesc: z.literal(true).optional(),
  LangPL: z.literal(true).optional()
}).strict();
export const DictLanguagesMinAggregateInputObjectSchema: z.ZodType<Prisma.DictLanguagesMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictLanguagesMinAggregateInputType>;
export const DictLanguagesMinAggregateInputObjectZodSchema = makeSchema();
