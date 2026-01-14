import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  SubClassCode: z.literal(true).optional(),
  ClassCode: z.literal(true).optional(),
  SubClassDesc: z.literal(true).optional()
}).strict();
export const DictTitSubClassMaxAggregateInputObjectSchema: z.ZodType<Prisma.DictTitSubClassMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictTitSubClassMaxAggregateInputType>;
export const DictTitSubClassMaxAggregateInputObjectZodSchema = makeSchema();
