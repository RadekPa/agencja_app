import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  SubClassCode: z.literal(true).optional(),
  ClassCode: z.literal(true).optional(),
  SubClassDesc: z.literal(true).optional()
}).strict();
export const DictTitSubClassMinAggregateInputObjectSchema: z.ZodType<Prisma.DictTitSubClassMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictTitSubClassMinAggregateInputType>;
export const DictTitSubClassMinAggregateInputObjectZodSchema = makeSchema();
