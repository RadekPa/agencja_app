import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TblTitlesCountOutputTypeSelectObjectSchema as TblTitlesCountOutputTypeSelectObjectSchema } from './TblTitlesCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TblTitlesCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const TblTitlesCountOutputTypeArgsObjectSchema = makeSchema();
export const TblTitlesCountOutputTypeArgsObjectZodSchema = makeSchema();
