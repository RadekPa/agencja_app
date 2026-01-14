import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictXRateExcelNamesSelectObjectSchema as dictXRateExcelNamesSelectObjectSchema } from './objects/dictXRateExcelNamesSelect.schema';
import { dictXRateExcelNamesUpdateInputObjectSchema as dictXRateExcelNamesUpdateInputObjectSchema } from './objects/dictXRateExcelNamesUpdateInput.schema';
import { dictXRateExcelNamesUncheckedUpdateInputObjectSchema as dictXRateExcelNamesUncheckedUpdateInputObjectSchema } from './objects/dictXRateExcelNamesUncheckedUpdateInput.schema';
import { dictXRateExcelNamesWhereUniqueInputObjectSchema as dictXRateExcelNamesWhereUniqueInputObjectSchema } from './objects/dictXRateExcelNamesWhereUniqueInput.schema';

export const dictXRateExcelNamesUpdateOneSchema: z.ZodType<Prisma.dictXRateExcelNamesUpdateArgs> = z.object({ select: dictXRateExcelNamesSelectObjectSchema.optional(),  data: z.union([dictXRateExcelNamesUpdateInputObjectSchema, dictXRateExcelNamesUncheckedUpdateInputObjectSchema]), where: dictXRateExcelNamesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictXRateExcelNamesUpdateArgs>;

export const dictXRateExcelNamesUpdateOneZodSchema = z.object({ select: dictXRateExcelNamesSelectObjectSchema.optional(),  data: z.union([dictXRateExcelNamesUpdateInputObjectSchema, dictXRateExcelNamesUncheckedUpdateInputObjectSchema]), where: dictXRateExcelNamesWhereUniqueInputObjectSchema }).strict();