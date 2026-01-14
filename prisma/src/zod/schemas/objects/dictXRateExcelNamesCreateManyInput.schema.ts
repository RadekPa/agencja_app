import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CurrID: z.string().max(3),
  Name: z.string().max(50)
}).strict();
export const dictXRateExcelNamesCreateManyInputObjectSchema: z.ZodType<Prisma.dictXRateExcelNamesCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.dictXRateExcelNamesCreateManyInput>;
export const dictXRateExcelNamesCreateManyInputObjectZodSchema = makeSchema();
