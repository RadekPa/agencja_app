import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dbo_LocalUserSelectObjectSchema as dbo_LocalUserSelectObjectSchema } from './dbo_LocalUserSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => dbo_LocalUserSelectObjectSchema).optional()
}).strict();
export const dbo_LocalUserArgsObjectSchema = makeSchema();
export const dbo_LocalUserArgsObjectZodSchema = makeSchema();
