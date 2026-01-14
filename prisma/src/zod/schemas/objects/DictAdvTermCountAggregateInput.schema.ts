import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AdvTermId: z.literal(true).optional(),
  AdvTermDesc: z.literal(true).optional(),
  AdvTermPL: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const DictAdvTermCountAggregateInputObjectSchema: z.ZodType<Prisma.DictAdvTermCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictAdvTermCountAggregateInputType>;
export const DictAdvTermCountAggregateInputObjectZodSchema = makeSchema();
