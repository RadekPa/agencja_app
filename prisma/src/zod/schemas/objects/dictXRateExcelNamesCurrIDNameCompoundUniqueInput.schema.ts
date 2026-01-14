import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CurrID: z.string(),
  Name: z.string()
}).strict();
export const dictXRateExcelNamesCurrIDNameCompoundUniqueInputObjectSchema: z.ZodType<Prisma.dictXRateExcelNamesCurrIDNameCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.dictXRateExcelNamesCurrIDNameCompoundUniqueInput>;
export const dictXRateExcelNamesCurrIDNameCompoundUniqueInputObjectZodSchema = makeSchema();
