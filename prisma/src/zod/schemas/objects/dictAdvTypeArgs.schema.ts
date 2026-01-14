import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictAdvTypeSelectObjectSchema as dictAdvTypeSelectObjectSchema } from './dictAdvTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => dictAdvTypeSelectObjectSchema).optional()
}).strict();
export const dictAdvTypeArgsObjectSchema = makeSchema();
export const dictAdvTypeArgsObjectZodSchema = makeSchema();
