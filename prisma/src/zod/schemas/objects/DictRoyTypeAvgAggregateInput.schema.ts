import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  RoyTypeID: z.literal(true).optional(),
  AgrRightID: z.literal(true).optional()
}).strict();
export const DictRoyTypeAvgAggregateInputObjectSchema: z.ZodType<Prisma.DictRoyTypeAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictRoyTypeAvgAggregateInputType>;
export const DictRoyTypeAvgAggregateInputObjectZodSchema = makeSchema();
