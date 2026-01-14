import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DictPriceTypeCountOutputTypeSelectObjectSchema as DictPriceTypeCountOutputTypeSelectObjectSchema } from './DictPriceTypeCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DictPriceTypeCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const DictPriceTypeCountOutputTypeArgsObjectSchema = makeSchema();
export const DictPriceTypeCountOutputTypeArgsObjectZodSchema = makeSchema();
