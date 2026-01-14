import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CurrDate: z.literal(true).optional(),
  CurrID: z.literal(true).optional(),
  XRate: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const DictXRatesCountAggregateInputObjectSchema: z.ZodType<Prisma.DictXRatesCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictXRatesCountAggregateInputType>;
export const DictXRatesCountAggregateInputObjectZodSchema = makeSchema();
