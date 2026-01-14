import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DictRightsFormCountOutputTypeSelectObjectSchema as DictRightsFormCountOutputTypeSelectObjectSchema } from './DictRightsFormCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DictRightsFormCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const DictRightsFormCountOutputTypeArgsObjectSchema = makeSchema();
export const DictRightsFormCountOutputTypeArgsObjectZodSchema = makeSchema();
