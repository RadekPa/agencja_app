import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CurrID: z.string().max(3),
  Name: z.string().max(50)
}).strict();
export const dictXRateExcelNamesCreateInputObjectSchema: z.ZodType<Prisma.dictXRateExcelNamesCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictXRateExcelNamesCreateInput>;
export const dictXRateExcelNamesCreateInputObjectZodSchema = makeSchema();
