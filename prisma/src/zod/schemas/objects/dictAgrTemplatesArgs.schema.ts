import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictAgrTemplatesSelectObjectSchema as dictAgrTemplatesSelectObjectSchema } from './dictAgrTemplatesSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => dictAgrTemplatesSelectObjectSchema).optional()
}).strict();
export const dictAgrTemplatesArgsObjectSchema = makeSchema();
export const dictAgrTemplatesArgsObjectZodSchema = makeSchema();
