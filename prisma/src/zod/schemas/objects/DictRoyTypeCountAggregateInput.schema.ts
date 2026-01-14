import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  RoyTypeID: z.literal(true).optional(),
  AgrRightID: z.literal(true).optional(),
  RoyTypeDesc: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const DictRoyTypeCountAggregateInputObjectSchema: z.ZodType<Prisma.DictRoyTypeCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictRoyTypeCountAggregateInputType>;
export const DictRoyTypeCountAggregateInputObjectZodSchema = makeSchema();
