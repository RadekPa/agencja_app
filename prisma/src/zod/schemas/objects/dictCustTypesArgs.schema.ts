import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCustTypesSelectObjectSchema as dictCustTypesSelectObjectSchema } from './dictCustTypesSelect.schema';
import { dictCustTypesIncludeObjectSchema as dictCustTypesIncludeObjectSchema } from './dictCustTypesInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => dictCustTypesSelectObjectSchema).optional(),
  include: z.lazy(() => dictCustTypesIncludeObjectSchema).optional()
}).strict();
export const dictCustTypesArgsObjectSchema = makeSchema();
export const dictCustTypesArgsObjectZodSchema = makeSchema();
