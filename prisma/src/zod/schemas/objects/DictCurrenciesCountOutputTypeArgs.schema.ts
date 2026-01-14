import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DictCurrenciesCountOutputTypeSelectObjectSchema as DictCurrenciesCountOutputTypeSelectObjectSchema } from './DictCurrenciesCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DictCurrenciesCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const DictCurrenciesCountOutputTypeArgsObjectSchema = makeSchema();
export const DictCurrenciesCountOutputTypeArgsObjectZodSchema = makeSchema();
