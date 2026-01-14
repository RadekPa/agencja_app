import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArAccountSelectObjectSchema as ArAccountSelectObjectSchema } from './ArAccountSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ArAccountSelectObjectSchema).optional()
}).strict();
export const ArAccountArgsObjectSchema = makeSchema();
export const ArAccountArgsObjectZodSchema = makeSchema();
