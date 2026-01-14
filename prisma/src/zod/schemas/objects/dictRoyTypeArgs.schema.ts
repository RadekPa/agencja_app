import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictRoyTypeSelectObjectSchema as dictRoyTypeSelectObjectSchema } from './dictRoyTypeSelect.schema';
import { dictRoyTypeIncludeObjectSchema as dictRoyTypeIncludeObjectSchema } from './dictRoyTypeInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => dictRoyTypeSelectObjectSchema).optional(),
  include: z.lazy(() => dictRoyTypeIncludeObjectSchema).optional()
}).strict();
export const dictRoyTypeArgsObjectSchema = makeSchema();
export const dictRoyTypeArgsObjectZodSchema = makeSchema();
