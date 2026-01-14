import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PriceTypeID: z.literal(true).optional()
}).strict();
export const DictPriceTypeAvgAggregateInputObjectSchema: z.ZodType<Prisma.DictPriceTypeAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictPriceTypeAvgAggregateInputType>;
export const DictPriceTypeAvgAggregateInputObjectZodSchema = makeSchema();
