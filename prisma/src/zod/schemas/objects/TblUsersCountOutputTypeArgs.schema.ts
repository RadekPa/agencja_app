import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TblUsersCountOutputTypeSelectObjectSchema as TblUsersCountOutputTypeSelectObjectSchema } from './TblUsersCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TblUsersCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const TblUsersCountOutputTypeArgsObjectSchema = makeSchema();
export const TblUsersCountOutputTypeArgsObjectZodSchema = makeSchema();
