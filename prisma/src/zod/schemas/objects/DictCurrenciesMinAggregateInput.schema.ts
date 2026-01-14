import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CurrID: z.literal(true).optional(),
  CurrDesc: z.literal(true).optional()
}).strict();
export const DictCurrenciesMinAggregateInputObjectSchema: z.ZodType<Prisma.DictCurrenciesMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictCurrenciesMinAggregateInputType>;
export const DictCurrenciesMinAggregateInputObjectZodSchema = makeSchema();
