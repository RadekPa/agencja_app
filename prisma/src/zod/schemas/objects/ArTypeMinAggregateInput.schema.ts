import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ArType: z.literal(true).optional(),
  ArTypeDescription: z.literal(true).optional(),
  ArTypeDescriptionPL: z.literal(true).optional()
}).strict();
export const ArTypeMinAggregateInputObjectSchema: z.ZodType<Prisma.ArTypeMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ArTypeMinAggregateInputType>;
export const ArTypeMinAggregateInputObjectZodSchema = makeSchema();
