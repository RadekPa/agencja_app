import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './tblAgreementsWhereUniqueInput.schema';
import { tblAgreementsCreateWithoutDictCurrenciesInputObjectSchema as tblAgreementsCreateWithoutDictCurrenciesInputObjectSchema } from './tblAgreementsCreateWithoutDictCurrenciesInput.schema';
import { tblAgreementsUncheckedCreateWithoutDictCurrenciesInputObjectSchema as tblAgreementsUncheckedCreateWithoutDictCurrenciesInputObjectSchema } from './tblAgreementsUncheckedCreateWithoutDictCurrenciesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblAgreementsCreateWithoutDictCurrenciesInputObjectSchema), z.lazy(() => tblAgreementsUncheckedCreateWithoutDictCurrenciesInputObjectSchema)])
}).strict();
export const tblAgreementsCreateOrConnectWithoutDictCurrenciesInputObjectSchema: z.ZodType<Prisma.tblAgreementsCreateOrConnectWithoutDictCurrenciesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsCreateOrConnectWithoutDictCurrenciesInput>;
export const tblAgreementsCreateOrConnectWithoutDictCurrenciesInputObjectZodSchema = makeSchema();
