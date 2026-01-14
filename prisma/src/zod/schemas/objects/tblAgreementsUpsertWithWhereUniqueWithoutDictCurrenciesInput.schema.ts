import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './tblAgreementsWhereUniqueInput.schema';
import { tblAgreementsUpdateWithoutDictCurrenciesInputObjectSchema as tblAgreementsUpdateWithoutDictCurrenciesInputObjectSchema } from './tblAgreementsUpdateWithoutDictCurrenciesInput.schema';
import { tblAgreementsUncheckedUpdateWithoutDictCurrenciesInputObjectSchema as tblAgreementsUncheckedUpdateWithoutDictCurrenciesInputObjectSchema } from './tblAgreementsUncheckedUpdateWithoutDictCurrenciesInput.schema';
import { tblAgreementsCreateWithoutDictCurrenciesInputObjectSchema as tblAgreementsCreateWithoutDictCurrenciesInputObjectSchema } from './tblAgreementsCreateWithoutDictCurrenciesInput.schema';
import { tblAgreementsUncheckedCreateWithoutDictCurrenciesInputObjectSchema as tblAgreementsUncheckedCreateWithoutDictCurrenciesInputObjectSchema } from './tblAgreementsUncheckedCreateWithoutDictCurrenciesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblAgreementsUpdateWithoutDictCurrenciesInputObjectSchema), z.lazy(() => tblAgreementsUncheckedUpdateWithoutDictCurrenciesInputObjectSchema)]),
  create: z.union([z.lazy(() => tblAgreementsCreateWithoutDictCurrenciesInputObjectSchema), z.lazy(() => tblAgreementsUncheckedCreateWithoutDictCurrenciesInputObjectSchema)])
}).strict();
export const tblAgreementsUpsertWithWhereUniqueWithoutDictCurrenciesInputObjectSchema: z.ZodType<Prisma.tblAgreementsUpsertWithWhereUniqueWithoutDictCurrenciesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsUpsertWithWhereUniqueWithoutDictCurrenciesInput>;
export const tblAgreementsUpsertWithWhereUniqueWithoutDictCurrenciesInputObjectZodSchema = makeSchema();
