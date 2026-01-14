import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitSubClassSelectObjectSchema as dictTitSubClassSelectObjectSchema } from './dictTitSubClassSelect.schema';
import { dictTitSubClassIncludeObjectSchema as dictTitSubClassIncludeObjectSchema } from './dictTitSubClassInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => dictTitSubClassSelectObjectSchema).optional(),
  include: z.lazy(() => dictTitSubClassIncludeObjectSchema).optional()
}).strict();
export const dictTitSubClassArgsObjectSchema = makeSchema();
export const dictTitSubClassArgsObjectZodSchema = makeSchema();
