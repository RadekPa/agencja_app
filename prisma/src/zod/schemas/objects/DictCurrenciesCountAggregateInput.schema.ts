import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CurrID: z.literal(true).optional(),
  CurrDesc: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const DictCurrenciesCountAggregateInputObjectSchema: z.ZodType<Prisma.DictCurrenciesCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictCurrenciesCountAggregateInputType>;
export const DictCurrenciesCountAggregateInputObjectZodSchema = makeSchema();
