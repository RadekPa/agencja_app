import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictMatTypeSelectObjectSchema as dictMatTypeSelectObjectSchema } from './dictMatTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => dictMatTypeSelectObjectSchema).optional()
}).strict();
export const dictMatTypeArgsObjectSchema = makeSchema();
export const dictMatTypeArgsObjectZodSchema = makeSchema();
