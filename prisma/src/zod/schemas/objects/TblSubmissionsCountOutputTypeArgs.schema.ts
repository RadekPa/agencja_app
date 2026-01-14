import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TblSubmissionsCountOutputTypeSelectObjectSchema as TblSubmissionsCountOutputTypeSelectObjectSchema } from './TblSubmissionsCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TblSubmissionsCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const TblSubmissionsCountOutputTypeArgsObjectSchema = makeSchema();
export const TblSubmissionsCountOutputTypeArgsObjectZodSchema = makeSchema();
