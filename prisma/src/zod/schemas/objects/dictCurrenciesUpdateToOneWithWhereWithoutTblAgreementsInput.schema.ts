import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCurrenciesWhereInputObjectSchema as dictCurrenciesWhereInputObjectSchema } from './dictCurrenciesWhereInput.schema';
import { dictCurrenciesUpdateWithoutTblAgreementsInputObjectSchema as dictCurrenciesUpdateWithoutTblAgreementsInputObjectSchema } from './dictCurrenciesUpdateWithoutTblAgreementsInput.schema';
import { dictCurrenciesUncheckedUpdateWithoutTblAgreementsInputObjectSchema as dictCurrenciesUncheckedUpdateWithoutTblAgreementsInputObjectSchema } from './dictCurrenciesUncheckedUpdateWithoutTblAgreementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictCurrenciesWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => dictCurrenciesUpdateWithoutTblAgreementsInputObjectSchema), z.lazy(() => dictCurrenciesUncheckedUpdateWithoutTblAgreementsInputObjectSchema)])
}).strict();
export const dictCurrenciesUpdateToOneWithWhereWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.dictCurrenciesUpdateToOneWithWhereWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCurrenciesUpdateToOneWithWhereWithoutTblAgreementsInput>;
export const dictCurrenciesUpdateToOneWithWhereWithoutTblAgreementsInputObjectZodSchema = makeSchema();
