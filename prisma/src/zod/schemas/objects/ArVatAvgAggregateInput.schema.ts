import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  VatRate: z.literal(true).optional()
}).strict();
export const ArVatAvgAggregateInputObjectSchema: z.ZodType<Prisma.ArVatAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ArVatAvgAggregateInputType>;
export const ArVatAvgAggregateInputObjectZodSchema = makeSchema();
