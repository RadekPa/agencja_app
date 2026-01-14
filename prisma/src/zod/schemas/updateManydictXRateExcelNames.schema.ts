import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictXRateExcelNamesUpdateManyMutationInputObjectSchema as dictXRateExcelNamesUpdateManyMutationInputObjectSchema } from './objects/dictXRateExcelNamesUpdateManyMutationInput.schema';
import { dictXRateExcelNamesWhereInputObjectSchema as dictXRateExcelNamesWhereInputObjectSchema } from './objects/dictXRateExcelNamesWhereInput.schema';

export const dictXRateExcelNamesUpdateManySchema: z.ZodType<Prisma.dictXRateExcelNamesUpdateManyArgs> = z.object({ data: dictXRateExcelNamesUpdateManyMutationInputObjectSchema, where: dictXRateExcelNamesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictXRateExcelNamesUpdateManyArgs>;

export const dictXRateExcelNamesUpdateManyZodSchema = z.object({ data: dictXRateExcelNamesUpdateManyMutationInputObjectSchema, where: dictXRateExcelNamesWhereInputObjectSchema.optional() }).strict();