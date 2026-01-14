import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ArType: z.literal(true).optional(),
  ArTypeDescription: z.literal(true).optional(),
  ArTypeDescriptionPL: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ArTypeCountAggregateInputObjectSchema: z.ZodType<Prisma.ArTypeCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ArTypeCountAggregateInputType>;
export const ArTypeCountAggregateInputObjectZodSchema = makeSchema();
