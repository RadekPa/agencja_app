import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DictRoyAccountIntervalCountOutputTypeSelectObjectSchema as DictRoyAccountIntervalCountOutputTypeSelectObjectSchema } from './DictRoyAccountIntervalCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DictRoyAccountIntervalCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const DictRoyAccountIntervalCountOutputTypeArgsObjectSchema = makeSchema();
export const DictRoyAccountIntervalCountOutputTypeArgsObjectZodSchema = makeSchema();
