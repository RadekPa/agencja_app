import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TargetGroupID: z.boolean().optional(),
  TargetGroupDesc: z.boolean().optional()
}).strict();
export const dictTargetGroupsSelectObjectSchema: z.ZodType<Prisma.dictTargetGroupsSelect> = makeSchema() as unknown as z.ZodType<Prisma.dictTargetGroupsSelect>;
export const dictTargetGroupsSelectObjectZodSchema = makeSchema();
