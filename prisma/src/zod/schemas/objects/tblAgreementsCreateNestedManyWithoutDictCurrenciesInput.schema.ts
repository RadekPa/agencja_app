import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsCreateWithoutDictCurrenciesInputObjectSchema as tblAgreementsCreateWithoutDictCurrenciesInputObjectSchema } from './tblAgreementsCreateWithoutDictCurrenciesInput.schema';
import { tblAgreementsUncheckedCreateWithoutDictCurrenciesInputObjectSchema as tblAgreementsUncheckedCreateWithoutDictCurrenciesInputObjectSchema } from './tblAgreementsUncheckedCreateWithoutDictCurrenciesInput.schema';
import { tblAgreementsCreateOrConnectWithoutDictCurrenciesInputObjectSchema as tblAgreementsCreateOrConnectWithoutDictCurrenciesInputObjectSchema } from './tblAgreementsCreateOrConnectWithoutDictCurrenciesInput.schema';
import { tblAgreementsCreateManyDictCurrenciesInputEnvelopeObjectSchema as tblAgreementsCreateManyDictCurrenciesInputEnvelopeObjectSchema } from './tblAgreementsCreateManyDictCurrenciesInputEnvelope.schema';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './tblAgreementsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblAgreementsCreateWithoutDictCurrenciesInputObjectSchema), z.lazy(() => tblAgreementsCreateWithoutDictCurrenciesInputObjectSchema).array(), z.lazy(() => tblAgreementsUncheckedCreateWithoutDictCurrenciesInputObjectSchema), z.lazy(() => tblAgreementsUncheckedCreateWithoutDictCurrenciesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblAgreementsCreateOrConnectWithoutDictCurrenciesInputObjectSchema), z.lazy(() => tblAgreementsCreateOrConnectWithoutDictCurrenciesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblAgreementsCreateManyDictCurrenciesInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema), z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblAgreementsCreateNestedManyWithoutDictCurrenciesInputObjectSchema: z.ZodType<Prisma.tblAgreementsCreateNestedManyWithoutDictCurrenciesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsCreateNestedManyWithoutDictCurrenciesInput>;
export const tblAgreementsCreateNestedManyWithoutDictCurrenciesInputObjectZodSchema = makeSchema();
