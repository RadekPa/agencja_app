import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AdvTermId: z.literal(true).optional(),
  AdvTermDesc: z.literal(true).optional(),
  AdvTermPL: z.literal(true).optional()
}).strict();
export const DictAdvTermMinAggregateInputObjectSchema: z.ZodType<Prisma.DictAdvTermMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictAdvTermMinAggregateInputType>;
export const DictAdvTermMinAggregateInputObjectZodSchema = makeSchema();
