import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TargetGroupID: z.literal(true).optional(),
  TargetGroupDesc: z.literal(true).optional()
}).strict();
export const DictTargetGroupsMinAggregateInputObjectSchema: z.ZodType<Prisma.DictTargetGroupsMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictTargetGroupsMinAggregateInputType>;
export const DictTargetGroupsMinAggregateInputObjectZodSchema = makeSchema();
