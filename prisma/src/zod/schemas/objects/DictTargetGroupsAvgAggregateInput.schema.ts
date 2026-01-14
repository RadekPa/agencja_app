import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TargetGroupID: z.literal(true).optional()
}).strict();
export const DictTargetGroupsAvgAggregateInputObjectSchema: z.ZodType<Prisma.DictTargetGroupsAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictTargetGroupsAvgAggregateInputType>;
export const DictTargetGroupsAvgAggregateInputObjectZodSchema = makeSchema();
