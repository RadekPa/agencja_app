import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCoverFormatSelectObjectSchema as dictCoverFormatSelectObjectSchema } from './dictCoverFormatSelect.schema';
import { dictCoverFormatIncludeObjectSchema as dictCoverFormatIncludeObjectSchema } from './dictCoverFormatInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => dictCoverFormatSelectObjectSchema).optional(),
  include: z.lazy(() => dictCoverFormatIncludeObjectSchema).optional()
}).strict();
export const dictCoverFormatArgsObjectSchema = makeSchema();
export const dictCoverFormatArgsObjectZodSchema = makeSchema();
