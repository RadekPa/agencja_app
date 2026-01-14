import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PriceTypeID: z.literal(true).optional()
}).strict();
export const DictPriceTypeSumAggregateInputObjectSchema: z.ZodType<Prisma.DictPriceTypeSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictPriceTypeSumAggregateInputType>;
export const DictPriceTypeSumAggregateInputObjectZodSchema = makeSchema();
