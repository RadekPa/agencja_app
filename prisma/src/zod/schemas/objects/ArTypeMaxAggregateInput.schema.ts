import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ArType: z.literal(true).optional(),
  ArTypeDescription: z.literal(true).optional(),
  ArTypeDescriptionPL: z.literal(true).optional()
}).strict();
export const ArTypeMaxAggregateInputObjectSchema: z.ZodType<Prisma.ArTypeMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ArTypeMaxAggregateInputType>;
export const ArTypeMaxAggregateInputObjectZodSchema = makeSchema();
