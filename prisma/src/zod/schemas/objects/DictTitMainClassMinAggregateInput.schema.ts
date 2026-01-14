import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ClassCode: z.literal(true).optional(),
  ClassDesc: z.literal(true).optional()
}).strict();
export const DictTitMainClassMinAggregateInputObjectSchema: z.ZodType<Prisma.DictTitMainClassMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictTitMainClassMinAggregateInputType>;
export const DictTitMainClassMinAggregateInputObjectZodSchema = makeSchema();
