import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AdvTermId: z.literal(true).optional(),
  AdvTermDesc: z.literal(true).optional(),
  AdvTermPL: z.literal(true).optional()
}).strict();
export const DictAdvTermMaxAggregateInputObjectSchema: z.ZodType<Prisma.DictAdvTermMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictAdvTermMaxAggregateInputType>;
export const DictAdvTermMaxAggregateInputObjectZodSchema = makeSchema();
