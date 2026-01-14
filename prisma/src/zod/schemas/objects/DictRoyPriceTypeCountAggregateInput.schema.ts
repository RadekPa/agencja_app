import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  RoyPriceTypeID: z.literal(true).optional(),
  RoyPriceTypeDesc: z.literal(true).optional(),
  RoyPriceTypePL: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const DictRoyPriceTypeCountAggregateInputObjectSchema: z.ZodType<Prisma.DictRoyPriceTypeCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictRoyPriceTypeCountAggregateInputType>;
export const DictRoyPriceTypeCountAggregateInputObjectZodSchema = makeSchema();
