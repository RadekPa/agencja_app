import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TargetGroupID: z.literal(true).optional()
}).strict();
export const DictTargetGroupsSumAggregateInputObjectSchema: z.ZodType<Prisma.DictTargetGroupsSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictTargetGroupsSumAggregateInputType>;
export const DictTargetGroupsSumAggregateInputObjectZodSchema = makeSchema();
