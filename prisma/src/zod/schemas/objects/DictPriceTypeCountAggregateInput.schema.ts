import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PriceTypeID: z.literal(true).optional(),
  PriceTypeDesc: z.literal(true).optional(),
  PriceTypePL: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const DictPriceTypeCountAggregateInputObjectSchema: z.ZodType<Prisma.DictPriceTypeCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictPriceTypeCountAggregateInputType>;
export const DictPriceTypeCountAggregateInputObjectZodSchema = makeSchema();
