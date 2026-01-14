import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  SubClassCode: z.literal(true).optional(),
  ClassCode: z.literal(true).optional(),
  SubClassDesc: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const DictTitSubClassCountAggregateInputObjectSchema: z.ZodType<Prisma.DictTitSubClassCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictTitSubClassCountAggregateInputType>;
export const DictTitSubClassCountAggregateInputObjectZodSchema = makeSchema();
