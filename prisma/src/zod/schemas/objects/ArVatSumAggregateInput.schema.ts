import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  VatRate: z.literal(true).optional()
}).strict();
export const ArVatSumAggregateInputObjectSchema: z.ZodType<Prisma.ArVatSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ArVatSumAggregateInputType>;
export const ArVatSumAggregateInputObjectZodSchema = makeSchema();
