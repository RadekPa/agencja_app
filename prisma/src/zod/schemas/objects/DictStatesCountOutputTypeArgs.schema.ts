import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DictStatesCountOutputTypeSelectObjectSchema as DictStatesCountOutputTypeSelectObjectSchema } from './DictStatesCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DictStatesCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const DictStatesCountOutputTypeArgsObjectSchema = makeSchema();
export const DictStatesCountOutputTypeArgsObjectZodSchema = makeSchema();
