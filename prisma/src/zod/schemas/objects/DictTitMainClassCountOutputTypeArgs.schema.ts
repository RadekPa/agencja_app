import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DictTitMainClassCountOutputTypeSelectObjectSchema as DictTitMainClassCountOutputTypeSelectObjectSchema } from './DictTitMainClassCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DictTitMainClassCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const DictTitMainClassCountOutputTypeArgsObjectSchema = makeSchema();
export const DictTitMainClassCountOutputTypeArgsObjectZodSchema = makeSchema();
