import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictXRateExcelNamesSelectObjectSchema as dictXRateExcelNamesSelectObjectSchema } from './dictXRateExcelNamesSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => dictXRateExcelNamesSelectObjectSchema).optional()
}).strict();
export const dictXRateExcelNamesArgsObjectSchema = makeSchema();
export const dictXRateExcelNamesArgsObjectZodSchema = makeSchema();
