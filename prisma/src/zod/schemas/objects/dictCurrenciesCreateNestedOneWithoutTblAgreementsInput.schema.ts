import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCurrenciesCreateWithoutTblAgreementsInputObjectSchema as dictCurrenciesCreateWithoutTblAgreementsInputObjectSchema } from './dictCurrenciesCreateWithoutTblAgreementsInput.schema';
import { dictCurrenciesUncheckedCreateWithoutTblAgreementsInputObjectSchema as dictCurrenciesUncheckedCreateWithoutTblAgreementsInputObjectSchema } from './dictCurrenciesUncheckedCreateWithoutTblAgreementsInput.schema';
import { dictCurrenciesCreateOrConnectWithoutTblAgreementsInputObjectSchema as dictCurrenciesCreateOrConnectWithoutTblAgreementsInputObjectSchema } from './dictCurrenciesCreateOrConnectWithoutTblAgreementsInput.schema';
import { dictCurrenciesWhereUniqueInputObjectSchema as dictCurrenciesWhereUniqueInputObjectSchema } from './dictCurrenciesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictCurrenciesCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => dictCurrenciesUncheckedCreateWithoutTblAgreementsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictCurrenciesCreateOrConnectWithoutTblAgreementsInputObjectSchema).optional(),
  connect: z.lazy(() => dictCurrenciesWhereUniqueInputObjectSchema).optional()
}).strict();
export const dictCurrenciesCreateNestedOneWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.dictCurrenciesCreateNestedOneWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCurrenciesCreateNestedOneWithoutTblAgreementsInput>;
export const dictCurrenciesCreateNestedOneWithoutTblAgreementsInputObjectZodSchema = makeSchema();
