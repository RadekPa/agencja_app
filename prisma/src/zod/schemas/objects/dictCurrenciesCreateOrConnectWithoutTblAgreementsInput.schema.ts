import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCurrenciesWhereUniqueInputObjectSchema as dictCurrenciesWhereUniqueInputObjectSchema } from './dictCurrenciesWhereUniqueInput.schema';
import { dictCurrenciesCreateWithoutTblAgreementsInputObjectSchema as dictCurrenciesCreateWithoutTblAgreementsInputObjectSchema } from './dictCurrenciesCreateWithoutTblAgreementsInput.schema';
import { dictCurrenciesUncheckedCreateWithoutTblAgreementsInputObjectSchema as dictCurrenciesUncheckedCreateWithoutTblAgreementsInputObjectSchema } from './dictCurrenciesUncheckedCreateWithoutTblAgreementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictCurrenciesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => dictCurrenciesCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => dictCurrenciesUncheckedCreateWithoutTblAgreementsInputObjectSchema)])
}).strict();
export const dictCurrenciesCreateOrConnectWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.dictCurrenciesCreateOrConnectWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCurrenciesCreateOrConnectWithoutTblAgreementsInput>;
export const dictCurrenciesCreateOrConnectWithoutTblAgreementsInputObjectZodSchema = makeSchema();
