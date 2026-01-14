import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArDefaultAccountSelectObjectSchema as ArDefaultAccountSelectObjectSchema } from './ArDefaultAccountSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ArDefaultAccountSelectObjectSchema).optional()
}).strict();
export const ArDefaultAccountArgsObjectSchema = makeSchema();
export const ArDefaultAccountArgsObjectZodSchema = makeSchema();
