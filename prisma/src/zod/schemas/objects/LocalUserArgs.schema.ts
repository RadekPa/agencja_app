import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocalUserSelectObjectSchema as LocalUserSelectObjectSchema } from './LocalUserSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => LocalUserSelectObjectSchema).optional()
}).strict();
export const LocalUserArgsObjectSchema = makeSchema();
export const LocalUserArgsObjectZodSchema = makeSchema();
