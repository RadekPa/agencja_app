import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictRightsFormSelectObjectSchema as dictRightsFormSelectObjectSchema } from './dictRightsFormSelect.schema';
import { dictRightsFormIncludeObjectSchema as dictRightsFormIncludeObjectSchema } from './dictRightsFormInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => dictRightsFormSelectObjectSchema).optional(),
  include: z.lazy(() => dictRightsFormIncludeObjectSchema).optional()
}).strict();
export const dictRightsFormArgsObjectSchema = makeSchema();
export const dictRightsFormArgsObjectZodSchema = makeSchema();
