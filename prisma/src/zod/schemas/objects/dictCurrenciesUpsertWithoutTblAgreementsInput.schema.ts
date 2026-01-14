import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCurrenciesUpdateWithoutTblAgreementsInputObjectSchema as dictCurrenciesUpdateWithoutTblAgreementsInputObjectSchema } from './dictCurrenciesUpdateWithoutTblAgreementsInput.schema';
import { dictCurrenciesUncheckedUpdateWithoutTblAgreementsInputObjectSchema as dictCurrenciesUncheckedUpdateWithoutTblAgreementsInputObjectSchema } from './dictCurrenciesUncheckedUpdateWithoutTblAgreementsInput.schema';
import { dictCurrenciesCreateWithoutTblAgreementsInputObjectSchema as dictCurrenciesCreateWithoutTblAgreementsInputObjectSchema } from './dictCurrenciesCreateWithoutTblAgreementsInput.schema';
import { dictCurrenciesUncheckedCreateWithoutTblAgreementsInputObjectSchema as dictCurrenciesUncheckedCreateWithoutTblAgreementsInputObjectSchema } from './dictCurrenciesUncheckedCreateWithoutTblAgreementsInput.schema';
import { dictCurrenciesWhereInputObjectSchema as dictCurrenciesWhereInputObjectSchema } from './dictCurrenciesWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => dictCurrenciesUpdateWithoutTblAgreementsInputObjectSchema), z.lazy(() => dictCurrenciesUncheckedUpdateWithoutTblAgreementsInputObjectSchema)]),
  create: z.union([z.lazy(() => dictCurrenciesCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => dictCurrenciesUncheckedCreateWithoutTblAgreementsInputObjectSchema)]),
  where: z.lazy(() => dictCurrenciesWhereInputObjectSchema).optional()
}).strict();
export const dictCurrenciesUpsertWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.dictCurrenciesUpsertWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCurrenciesUpsertWithoutTblAgreementsInput>;
export const dictCurrenciesUpsertWithoutTblAgreementsInputObjectZodSchema = makeSchema();
