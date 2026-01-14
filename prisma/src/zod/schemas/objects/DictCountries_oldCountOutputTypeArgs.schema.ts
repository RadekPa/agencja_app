import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DictCountries_oldCountOutputTypeSelectObjectSchema as DictCountries_oldCountOutputTypeSelectObjectSchema } from './DictCountries_oldCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DictCountries_oldCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const DictCountries_oldCountOutputTypeArgsObjectSchema = makeSchema();
export const DictCountries_oldCountOutputTypeArgsObjectZodSchema = makeSchema();
