import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CurrID: z.boolean().optional(),
  Name: z.boolean().optional()
}).strict();
export const dictXRateExcelNamesSelectObjectSchema: z.ZodType<Prisma.dictXRateExcelNamesSelect> = makeSchema() as unknown as z.ZodType<Prisma.dictXRateExcelNamesSelect>;
export const dictXRateExcelNamesSelectObjectZodSchema = makeSchema();
