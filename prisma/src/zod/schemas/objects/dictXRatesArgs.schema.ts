import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictXRatesSelectObjectSchema as dictXRatesSelectObjectSchema } from './dictXRatesSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => dictXRatesSelectObjectSchema).optional()
}).strict();
export const dictXRatesArgsObjectSchema = makeSchema();
export const dictXRatesArgsObjectZodSchema = makeSchema();
