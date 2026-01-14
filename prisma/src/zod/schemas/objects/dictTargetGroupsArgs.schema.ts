import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTargetGroupsSelectObjectSchema as dictTargetGroupsSelectObjectSchema } from './dictTargetGroupsSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => dictTargetGroupsSelectObjectSchema).optional()
}).strict();
export const dictTargetGroupsArgsObjectSchema = makeSchema();
export const dictTargetGroupsArgsObjectZodSchema = makeSchema();
