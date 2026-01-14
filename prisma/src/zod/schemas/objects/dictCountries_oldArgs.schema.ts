import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCountries_oldSelectObjectSchema as dictCountries_oldSelectObjectSchema } from './dictCountries_oldSelect.schema';
import { dictCountries_oldIncludeObjectSchema as dictCountries_oldIncludeObjectSchema } from './dictCountries_oldInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => dictCountries_oldSelectObjectSchema).optional(),
  include: z.lazy(() => dictCountries_oldIncludeObjectSchema).optional()
}).strict();
export const dictCountries_oldArgsObjectSchema = makeSchema();
export const dictCountries_oldArgsObjectZodSchema = makeSchema();
