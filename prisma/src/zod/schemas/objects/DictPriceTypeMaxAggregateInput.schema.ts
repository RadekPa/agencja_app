import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PriceTypeID: z.literal(true).optional(),
  PriceTypeDesc: z.literal(true).optional(),
  PriceTypePL: z.literal(true).optional()
}).strict();
export const DictPriceTypeMaxAggregateInputObjectSchema: z.ZodType<Prisma.DictPriceTypeMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictPriceTypeMaxAggregateInputType>;
export const DictPriceTypeMaxAggregateInputObjectZodSchema = makeSchema();
