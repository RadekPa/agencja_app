import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  MatTypeID: z.literal(true).optional()
}).strict();
export const DictMatTypeSumAggregateInputObjectSchema: z.ZodType<Prisma.DictMatTypeSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictMatTypeSumAggregateInputType>;
export const DictMatTypeSumAggregateInputObjectZodSchema = makeSchema();
