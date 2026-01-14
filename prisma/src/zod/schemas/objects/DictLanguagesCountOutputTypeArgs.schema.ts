import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DictLanguagesCountOutputTypeSelectObjectSchema as DictLanguagesCountOutputTypeSelectObjectSchema } from './DictLanguagesCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DictLanguagesCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const DictLanguagesCountOutputTypeArgsObjectSchema = makeSchema();
export const DictLanguagesCountOutputTypeArgsObjectZodSchema = makeSchema();
