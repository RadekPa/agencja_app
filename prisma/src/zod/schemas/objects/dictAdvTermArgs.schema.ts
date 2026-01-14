import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictAdvTermSelectObjectSchema as dictAdvTermSelectObjectSchema } from './dictAdvTermSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => dictAdvTermSelectObjectSchema).optional()
}).strict();
export const dictAdvTermArgsObjectSchema = makeSchema();
export const dictAdvTermArgsObjectZodSchema = makeSchema();
