import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  MatTypeID: z.literal(true).optional()
}).strict();
export const DictMatTypeAvgAggregateInputObjectSchema: z.ZodType<Prisma.DictMatTypeAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictMatTypeAvgAggregateInputType>;
export const DictMatTypeAvgAggregateInputObjectZodSchema = makeSchema();
