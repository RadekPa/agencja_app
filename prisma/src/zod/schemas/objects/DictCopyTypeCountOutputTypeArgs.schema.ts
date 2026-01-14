import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DictCopyTypeCountOutputTypeSelectObjectSchema as DictCopyTypeCountOutputTypeSelectObjectSchema } from './DictCopyTypeCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DictCopyTypeCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const DictCopyTypeCountOutputTypeArgsObjectSchema = makeSchema();
export const DictCopyTypeCountOutputTypeArgsObjectZodSchema = makeSchema();
