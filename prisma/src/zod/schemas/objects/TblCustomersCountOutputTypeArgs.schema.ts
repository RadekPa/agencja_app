import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TblCustomersCountOutputTypeSelectObjectSchema as TblCustomersCountOutputTypeSelectObjectSchema } from './TblCustomersCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TblCustomersCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const TblCustomersCountOutputTypeArgsObjectSchema = makeSchema();
export const TblCustomersCountOutputTypeArgsObjectZodSchema = makeSchema();
