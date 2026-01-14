import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PriceTypeID: z.literal(true).optional(),
  PriceTypeDesc: z.literal(true).optional(),
  PriceTypePL: z.literal(true).optional()
}).strict();
export const DictPriceTypeMinAggregateInputObjectSchema: z.ZodType<Prisma.DictPriceTypeMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictPriceTypeMinAggregateInputType>;
export const DictPriceTypeMinAggregateInputObjectZodSchema = makeSchema();
