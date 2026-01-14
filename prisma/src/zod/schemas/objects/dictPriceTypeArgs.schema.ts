import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictPriceTypeSelectObjectSchema as dictPriceTypeSelectObjectSchema } from './dictPriceTypeSelect.schema';
import { dictPriceTypeIncludeObjectSchema as dictPriceTypeIncludeObjectSchema } from './dictPriceTypeInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => dictPriceTypeSelectObjectSchema).optional(),
  include: z.lazy(() => dictPriceTypeIncludeObjectSchema).optional()
}).strict();
export const dictPriceTypeArgsObjectSchema = makeSchema();
export const dictPriceTypeArgsObjectZodSchema = makeSchema();
