import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  RoyPriceTypeID: z.literal(true).optional()
}).strict();
export const DictRoyPriceTypeSumAggregateInputObjectSchema: z.ZodType<Prisma.DictRoyPriceTypeSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictRoyPriceTypeSumAggregateInputType>;
export const DictRoyPriceTypeSumAggregateInputObjectZodSchema = makeSchema();
