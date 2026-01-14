import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictRoyPriceTypeSelectObjectSchema as dictRoyPriceTypeSelectObjectSchema } from './dictRoyPriceTypeSelect.schema';
import { dictRoyPriceTypeIncludeObjectSchema as dictRoyPriceTypeIncludeObjectSchema } from './dictRoyPriceTypeInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => dictRoyPriceTypeSelectObjectSchema).optional(),
  include: z.lazy(() => dictRoyPriceTypeIncludeObjectSchema).optional()
}).strict();
export const dictRoyPriceTypeArgsObjectSchema = makeSchema();
export const dictRoyPriceTypeArgsObjectZodSchema = makeSchema();
