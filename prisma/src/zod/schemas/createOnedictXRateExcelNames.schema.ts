import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictXRateExcelNamesSelectObjectSchema as dictXRateExcelNamesSelectObjectSchema } from './objects/dictXRateExcelNamesSelect.schema';
import { dictXRateExcelNamesCreateInputObjectSchema as dictXRateExcelNamesCreateInputObjectSchema } from './objects/dictXRateExcelNamesCreateInput.schema';
import { dictXRateExcelNamesUncheckedCreateInputObjectSchema as dictXRateExcelNamesUncheckedCreateInputObjectSchema } from './objects/dictXRateExcelNamesUncheckedCreateInput.schema';

export const dictXRateExcelNamesCreateOneSchema: z.ZodType<Prisma.dictXRateExcelNamesCreateArgs> = z.object({ select: dictXRateExcelNamesSelectObjectSchema.optional(),  data: z.union([dictXRateExcelNamesCreateInputObjectSchema, dictXRateExcelNamesUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.dictXRateExcelNamesCreateArgs>;

export const dictXRateExcelNamesCreateOneZodSchema = z.object({ select: dictXRateExcelNamesSelectObjectSchema.optional(),  data: z.union([dictXRateExcelNamesCreateInputObjectSchema, dictXRateExcelNamesUncheckedCreateInputObjectSchema]) }).strict();