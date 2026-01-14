import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DictAgrEventsCountOutputTypeSelectObjectSchema as DictAgrEventsCountOutputTypeSelectObjectSchema } from './DictAgrEventsCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DictAgrEventsCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const DictAgrEventsCountOutputTypeArgsObjectSchema = makeSchema();
export const DictAgrEventsCountOutputTypeArgsObjectZodSchema = makeSchema();
