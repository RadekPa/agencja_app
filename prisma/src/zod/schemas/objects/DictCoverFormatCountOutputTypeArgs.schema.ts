import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DictCoverFormatCountOutputTypeSelectObjectSchema as DictCoverFormatCountOutputTypeSelectObjectSchema } from './DictCoverFormatCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DictCoverFormatCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const DictCoverFormatCountOutputTypeArgsObjectSchema = makeSchema();
export const DictCoverFormatCountOutputTypeArgsObjectZodSchema = makeSchema();
