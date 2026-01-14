import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArApplySelectObjectSchema as ArApplySelectObjectSchema } from './ArApplySelect.schema';
import { ArApplyIncludeObjectSchema as ArApplyIncludeObjectSchema } from './ArApplyInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ArApplySelectObjectSchema).optional(),
  include: z.lazy(() => ArApplyIncludeObjectSchema).optional()
}).strict();
export const ArApplyArgsObjectSchema = makeSchema();
export const ArApplyArgsObjectZodSchema = makeSchema();
