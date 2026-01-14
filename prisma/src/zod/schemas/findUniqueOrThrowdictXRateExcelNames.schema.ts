import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictXRateExcelNamesSelectObjectSchema as dictXRateExcelNamesSelectObjectSchema } from './objects/dictXRateExcelNamesSelect.schema';
import { dictXRateExcelNamesWhereUniqueInputObjectSchema as dictXRateExcelNamesWhereUniqueInputObjectSchema } from './objects/dictXRateExcelNamesWhereUniqueInput.schema';

export const dictXRateExcelNamesFindUniqueOrThrowSchema: z.ZodType<Prisma.dictXRateExcelNamesFindUniqueOrThrowArgs> = z.object({ select: dictXRateExcelNamesSelectObjectSchema.optional(),  where: dictXRateExcelNamesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictXRateExcelNamesFindUniqueOrThrowArgs>;

export const dictXRateExcelNamesFindUniqueOrThrowZodSchema = z.object({ select: dictXRateExcelNamesSelectObjectSchema.optional(),  where: dictXRateExcelNamesWhereUniqueInputObjectSchema }).strict();