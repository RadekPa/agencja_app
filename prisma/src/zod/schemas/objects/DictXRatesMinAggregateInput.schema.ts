import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CurrDate: z.literal(true).optional(),
  CurrID: z.literal(true).optional(),
  XRate: z.literal(true).optional()
}).strict();
export const DictXRatesMinAggregateInputObjectSchema: z.ZodType<Prisma.DictXRatesMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictXRatesMinAggregateInputType>;
export const DictXRatesMinAggregateInputObjectZodSchema = makeSchema();
