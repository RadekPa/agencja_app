import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DictRepModesCountOutputTypeSelectObjectSchema as DictRepModesCountOutputTypeSelectObjectSchema } from './DictRepModesCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DictRepModesCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const DictRepModesCountOutputTypeArgsObjectSchema = makeSchema();
export const DictRepModesCountOutputTypeArgsObjectZodSchema = makeSchema();
