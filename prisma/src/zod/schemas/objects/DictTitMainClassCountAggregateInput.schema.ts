import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ClassCode: z.literal(true).optional(),
  ClassDesc: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const DictTitMainClassCountAggregateInputObjectSchema: z.ZodType<Prisma.DictTitMainClassCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictTitMainClassCountAggregateInputType>;
export const DictTitMainClassCountAggregateInputObjectZodSchema = makeSchema();
