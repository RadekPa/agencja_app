import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TblContactsCountOutputTypeSelectObjectSchema as TblContactsCountOutputTypeSelectObjectSchema } from './TblContactsCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TblContactsCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const TblContactsCountOutputTypeArgsObjectSchema = makeSchema();
export const TblContactsCountOutputTypeArgsObjectZodSchema = makeSchema();
