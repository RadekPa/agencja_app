import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DictRoyPriceTypeCountOutputTypeSelectObjectSchema as DictRoyPriceTypeCountOutputTypeSelectObjectSchema } from './DictRoyPriceTypeCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DictRoyPriceTypeCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const DictRoyPriceTypeCountOutputTypeArgsObjectSchema = makeSchema();
export const DictRoyPriceTypeCountOutputTypeArgsObjectZodSchema = makeSchema();
