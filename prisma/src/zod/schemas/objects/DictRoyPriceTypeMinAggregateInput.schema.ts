import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  RoyPriceTypeID: z.literal(true).optional(),
  RoyPriceTypeDesc: z.literal(true).optional(),
  RoyPriceTypePL: z.literal(true).optional()
}).strict();
export const DictRoyPriceTypeMinAggregateInputObjectSchema: z.ZodType<Prisma.DictRoyPriceTypeMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictRoyPriceTypeMinAggregateInputType>;
export const DictRoyPriceTypeMinAggregateInputObjectZodSchema = makeSchema();
