import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CurrID: z.string().max(3),
  Name: z.string().max(50)
}).strict();
export const dictXRateExcelNamesUncheckedCreateInputObjectSchema: z.ZodType<Prisma.dictXRateExcelNamesUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictXRateExcelNamesUncheckedCreateInput>;
export const dictXRateExcelNamesUncheckedCreateInputObjectZodSchema = makeSchema();
