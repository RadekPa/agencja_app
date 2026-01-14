import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTypeSelectObjectSchema as ArTypeSelectObjectSchema } from './ArTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ArTypeSelectObjectSchema).optional()
}).strict();
export const ArTypeArgsObjectSchema = makeSchema();
export const ArTypeArgsObjectZodSchema = makeSchema();
