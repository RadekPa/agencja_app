import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DictTitSubClassCountOutputTypeSelectObjectSchema as DictTitSubClassCountOutputTypeSelectObjectSchema } from './DictTitSubClassCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DictTitSubClassCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const DictTitSubClassCountOutputTypeArgsObjectSchema = makeSchema();
export const DictTitSubClassCountOutputTypeArgsObjectZodSchema = makeSchema();
