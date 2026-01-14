import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCurrenciesSelectObjectSchema as dictCurrenciesSelectObjectSchema } from './dictCurrenciesSelect.schema';
import { dictCurrenciesIncludeObjectSchema as dictCurrenciesIncludeObjectSchema } from './dictCurrenciesInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => dictCurrenciesSelectObjectSchema).optional(),
  include: z.lazy(() => dictCurrenciesIncludeObjectSchema).optional()
}).strict();
export const dictCurrenciesArgsObjectSchema = makeSchema();
export const dictCurrenciesArgsObjectZodSchema = makeSchema();
