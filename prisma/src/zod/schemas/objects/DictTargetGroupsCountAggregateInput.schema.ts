import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TargetGroupID: z.literal(true).optional(),
  TargetGroupDesc: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const DictTargetGroupsCountAggregateInputObjectSchema: z.ZodType<Prisma.DictTargetGroupsCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictTargetGroupsCountAggregateInputType>;
export const DictTargetGroupsCountAggregateInputObjectZodSchema = makeSchema();
