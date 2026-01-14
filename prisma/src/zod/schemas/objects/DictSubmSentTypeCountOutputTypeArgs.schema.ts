import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DictSubmSentTypeCountOutputTypeSelectObjectSchema as DictSubmSentTypeCountOutputTypeSelectObjectSchema } from './DictSubmSentTypeCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DictSubmSentTypeCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const DictSubmSentTypeCountOutputTypeArgsObjectSchema = makeSchema();
export const DictSubmSentTypeCountOutputTypeArgsObjectZodSchema = makeSchema();
