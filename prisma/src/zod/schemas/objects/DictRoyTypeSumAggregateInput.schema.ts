import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  RoyTypeID: z.literal(true).optional(),
  AgrRightID: z.literal(true).optional()
}).strict();
export const DictRoyTypeSumAggregateInputObjectSchema: z.ZodType<Prisma.DictRoyTypeSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictRoyTypeSumAggregateInputType>;
export const DictRoyTypeSumAggregateInputObjectZodSchema = makeSchema();
