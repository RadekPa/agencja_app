import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TargetGroupID: z.literal(true).optional(),
  TargetGroupDesc: z.literal(true).optional()
}).strict();
export const DictTargetGroupsMaxAggregateInputObjectSchema: z.ZodType<Prisma.DictTargetGroupsMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictTargetGroupsMaxAggregateInputType>;
export const DictTargetGroupsMaxAggregateInputObjectZodSchema = makeSchema();
