import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DictCustTypesCountOutputTypeSelectObjectSchema as DictCustTypesCountOutputTypeSelectObjectSchema } from './DictCustTypesCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DictCustTypesCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const DictCustTypesCountOutputTypeArgsObjectSchema = makeSchema();
export const DictCustTypesCountOutputTypeArgsObjectZodSchema = makeSchema();
