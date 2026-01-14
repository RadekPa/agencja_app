import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DictEventsCountOutputTypeSelectObjectSchema as DictEventsCountOutputTypeSelectObjectSchema } from './DictEventsCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DictEventsCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const DictEventsCountOutputTypeArgsObjectSchema = makeSchema();
export const DictEventsCountOutputTypeArgsObjectZodSchema = makeSchema();
