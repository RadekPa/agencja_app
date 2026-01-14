import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsCreateWithoutDictCurrenciesInputObjectSchema as tblAgreementsCreateWithoutDictCurrenciesInputObjectSchema } from './tblAgreementsCreateWithoutDictCurrenciesInput.schema';
import { tblAgreementsUncheckedCreateWithoutDictCurrenciesInputObjectSchema as tblAgreementsUncheckedCreateWithoutDictCurrenciesInputObjectSchema } from './tblAgreementsUncheckedCreateWithoutDictCurrenciesInput.schema';
import { tblAgreementsCreateOrConnectWithoutDictCurrenciesInputObjectSchema as tblAgreementsCreateOrConnectWithoutDictCurrenciesInputObjectSchema } from './tblAgreementsCreateOrConnectWithoutDictCurrenciesInput.schema';
import { tblAgreementsUpsertWithWhereUniqueWithoutDictCurrenciesInputObjectSchema as tblAgreementsUpsertWithWhereUniqueWithoutDictCurrenciesInputObjectSchema } from './tblAgreementsUpsertWithWhereUniqueWithoutDictCurrenciesInput.schema';
import { tblAgreementsCreateManyDictCurrenciesInputEnvelopeObjectSchema as tblAgreementsCreateManyDictCurrenciesInputEnvelopeObjectSchema } from './tblAgreementsCreateManyDictCurrenciesInputEnvelope.schema';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './tblAgreementsWhereUniqueInput.schema';
import { tblAgreementsUpdateWithWhereUniqueWithoutDictCurrenciesInputObjectSchema as tblAgreementsUpdateWithWhereUniqueWithoutDictCurrenciesInputObjectSchema } from './tblAgreementsUpdateWithWhereUniqueWithoutDictCurrenciesInput.schema';
import { tblAgreementsUpdateManyWithWhereWithoutDictCurrenciesInputObjectSchema as tblAgreementsUpdateManyWithWhereWithoutDictCurrenciesInputObjectSchema } from './tblAgreementsUpdateManyWithWhereWithoutDictCurrenciesInput.schema';
import { tblAgreementsScalarWhereInputObjectSchema as tblAgreementsScalarWhereInputObjectSchema } from './tblAgreementsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblAgreementsCreateWithoutDictCurrenciesInputObjectSchema), z.lazy(() => tblAgreementsCreateWithoutDictCurrenciesInputObjectSchema).array(), z.lazy(() => tblAgreementsUncheckedCreateWithoutDictCurrenciesInputObjectSchema), z.lazy(() => tblAgreementsUncheckedCreateWithoutDictCurrenciesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblAgreementsCreateOrConnectWithoutDictCurrenciesInputObjectSchema), z.lazy(() => tblAgreementsCreateOrConnectWithoutDictCurrenciesInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblAgreementsUpsertWithWhereUniqueWithoutDictCurrenciesInputObjectSchema), z.lazy(() => tblAgreementsUpsertWithWhereUniqueWithoutDictCurrenciesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblAgreementsCreateManyDictCurrenciesInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema), z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema), z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema), z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema), z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblAgreementsUpdateWithWhereUniqueWithoutDictCurrenciesInputObjectSchema), z.lazy(() => tblAgreementsUpdateWithWhereUniqueWithoutDictCurrenciesInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblAgreementsUpdateManyWithWhereWithoutDictCurrenciesInputObjectSchema), z.lazy(() => tblAgreementsUpdateManyWithWhereWithoutDictCurrenciesInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblAgreementsScalarWhereInputObjectSchema), z.lazy(() => tblAgreementsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblAgreementsUpdateManyWithoutDictCurrenciesNestedInputObjectSchema: z.ZodType<Prisma.tblAgreementsUpdateManyWithoutDictCurrenciesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsUpdateManyWithoutDictCurrenciesNestedInput>;
export const tblAgreementsUpdateManyWithoutDictCurrenciesNestedInputObjectZodSchema = makeSchema();
