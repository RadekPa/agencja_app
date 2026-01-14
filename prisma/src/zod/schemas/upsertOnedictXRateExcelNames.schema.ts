import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictXRateExcelNamesSelectObjectSchema as dictXRateExcelNamesSelectObjectSchema } from './objects/dictXRateExcelNamesSelect.schema';
import { dictXRateExcelNamesWhereUniqueInputObjectSchema as dictXRateExcelNamesWhereUniqueInputObjectSchema } from './objects/dictXRateExcelNamesWhereUniqueInput.schema';
import { dictXRateExcelNamesCreateInputObjectSchema as dictXRateExcelNamesCreateInputObjectSchema } from './objects/dictXRateExcelNamesCreateInput.schema';
import { dictXRateExcelNamesUncheckedCreateInputObjectSchema as dictXRateExcelNamesUncheckedCreateInputObjectSchema } from './objects/dictXRateExcelNamesUncheckedCreateInput.schema';
import { dictXRateExcelNamesUpdateInputObjectSchema as dictXRateExcelNamesUpdateInputObjectSchema } from './objects/dictXRateExcelNamesUpdateInput.schema';
import { dictXRateExcelNamesUncheckedUpdateInputObjectSchema as dictXRateExcelNamesUncheckedUpdateInputObjectSchema } from './objects/dictXRateExcelNamesUncheckedUpdateInput.schema';

export const dictXRateExcelNamesUpsertOneSchema: z.ZodType<Prisma.dictXRateExcelNamesUpsertArgs> = z.object({ select: dictXRateExcelNamesSelectObjectSchema.optional(),  where: dictXRateExcelNamesWhereUniqueInputObjectSchema, create: z.union([ dictXRateExcelNamesCreateInputObjectSchema, dictXRateExcelNamesUncheckedCreateInputObjectSchema ]), update: z.union([ dictXRateExcelNamesUpdateInputObjectSchema, dictXRateExcelNamesUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.dictXRateExcelNamesUpsertArgs>;

export const dictXRateExcelNamesUpsertOneZodSchema = z.object({ select: dictXRateExcelNamesSelectObjectSchema.optional(),  where: dictXRateExcelNamesWhereUniqueInputObjectSchema, create: z.union([ dictXRateExcelNamesCreateInputObjectSchema, dictXRateExcelNamesUncheckedCreateInputObjectSchema ]), update: z.union([ dictXRateExcelNamesUpdateInputObjectSchema, dictXRateExcelNamesUncheckedUpdateInputObjectSchema ]) }).strict();