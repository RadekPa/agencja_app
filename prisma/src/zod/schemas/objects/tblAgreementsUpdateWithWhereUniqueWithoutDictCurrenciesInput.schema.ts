import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './tblAgreementsWhereUniqueInput.schema';
import { tblAgreementsUpdateWithoutDictCurrenciesInputObjectSchema as tblAgreementsUpdateWithoutDictCurrenciesInputObjectSchema } from './tblAgreementsUpdateWithoutDictCurrenciesInput.schema';
import { tblAgreementsUncheckedUpdateWithoutDictCurrenciesInputObjectSchema as tblAgreementsUncheckedUpdateWithoutDictCurrenciesInputObjectSchema } from './tblAgreementsUncheckedUpdateWithoutDictCurrenciesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblAgreementsUpdateWithoutDictCurrenciesInputObjectSchema), z.lazy(() => tblAgreementsUncheckedUpdateWithoutDictCurrenciesInputObjectSchema)])
}).strict();
export const tblAgreementsUpdateWithWhereUniqueWithoutDictCurrenciesInputObjectSchema: z.ZodType<Prisma.tblAgreementsUpdateWithWhereUniqueWithoutDictCurrenciesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsUpdateWithWhereUniqueWithoutDictCurrenciesInput>;
export const tblAgreementsUpdateWithWhereUniqueWithoutDictCurrenciesInputObjectZodSchema = makeSchema();
