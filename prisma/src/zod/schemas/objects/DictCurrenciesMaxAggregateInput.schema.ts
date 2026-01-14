import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CurrID: z.literal(true).optional(),
  CurrDesc: z.literal(true).optional()
}).strict();
export const DictCurrenciesMaxAggregateInputObjectSchema: z.ZodType<Prisma.DictCurrenciesMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictCurrenciesMaxAggregateInputType>;
export const DictCurrenciesMaxAggregateInputObjectZodSchema = makeSchema();
