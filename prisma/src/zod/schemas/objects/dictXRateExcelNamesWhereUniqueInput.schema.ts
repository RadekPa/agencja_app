import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictXRateExcelNamesCurrIDNameCompoundUniqueInputObjectSchema as dictXRateExcelNamesCurrIDNameCompoundUniqueInputObjectSchema } from './dictXRateExcelNamesCurrIDNameCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  CurrID_Name: z.lazy(() => dictXRateExcelNamesCurrIDNameCompoundUniqueInputObjectSchema).optional()
}).strict();
export const dictXRateExcelNamesWhereUniqueInputObjectSchema: z.ZodType<Prisma.dictXRateExcelNamesWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.dictXRateExcelNamesWhereUniqueInput>;
export const dictXRateExcelNamesWhereUniqueInputObjectZodSchema = makeSchema();
