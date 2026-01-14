import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { pdxBilansSelectObjectSchema as pdxBilansSelectObjectSchema } from './pdxBilansSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => pdxBilansSelectObjectSchema).optional()
}).strict();
export const pdxBilansArgsObjectSchema = makeSchema();
export const pdxBilansArgsObjectZodSchema = makeSchema();
