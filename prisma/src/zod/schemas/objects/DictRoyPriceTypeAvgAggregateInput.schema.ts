import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  RoyPriceTypeID: z.literal(true).optional()
}).strict();
export const DictRoyPriceTypeAvgAggregateInputObjectSchema: z.ZodType<Prisma.DictRoyPriceTypeAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictRoyPriceTypeAvgAggregateInputType>;
export const DictRoyPriceTypeAvgAggregateInputObjectZodSchema = makeSchema();
