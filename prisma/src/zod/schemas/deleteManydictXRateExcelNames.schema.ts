import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictXRateExcelNamesWhereInputObjectSchema as dictXRateExcelNamesWhereInputObjectSchema } from './objects/dictXRateExcelNamesWhereInput.schema';

export const dictXRateExcelNamesDeleteManySchema: z.ZodType<Prisma.dictXRateExcelNamesDeleteManyArgs> = z.object({ where: dictXRateExcelNamesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictXRateExcelNamesDeleteManyArgs>;

export const dictXRateExcelNamesDeleteManyZodSchema = z.object({ where: dictXRateExcelNamesWhereInputObjectSchema.optional() }).strict();