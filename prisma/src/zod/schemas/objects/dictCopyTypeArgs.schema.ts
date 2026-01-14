import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCopyTypeSelectObjectSchema as dictCopyTypeSelectObjectSchema } from './dictCopyTypeSelect.schema';
import { dictCopyTypeIncludeObjectSchema as dictCopyTypeIncludeObjectSchema } from './dictCopyTypeInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => dictCopyTypeSelectObjectSchema).optional(),
  include: z.lazy(() => dictCopyTypeIncludeObjectSchema).optional()
}).strict();
export const dictCopyTypeArgsObjectSchema = makeSchema();
export const dictCopyTypeArgsObjectZodSchema = makeSchema();
