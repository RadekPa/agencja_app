import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsCreateWithoutDictCountries_oldInputObjectSchema as tblAgreementsCreateWithoutDictCountries_oldInputObjectSchema } from './tblAgreementsCreateWithoutDictCountries_oldInput.schema';
import { tblAgreementsUncheckedCreateWithoutDictCountries_oldInputObjectSchema as tblAgreementsUncheckedCreateWithoutDictCountries_oldInputObjectSchema } from './tblAgreementsUncheckedCreateWithoutDictCountries_oldInput.schema';
import { tblAgreementsCreateOrConnectWithoutDictCountries_oldInputObjectSchema as tblAgreementsCreateOrConnectWithoutDictCountries_oldInputObjectSchema } from './tblAgreementsCreateOrConnectWithoutDictCountries_oldInput.schema';
import { tblAgreementsUpsertWithWhereUniqueWithoutDictCountries_oldInputObjectSchema as tblAgreementsUpsertWithWhereUniqueWithoutDictCountries_oldInputObjectSchema } from './tblAgreementsUpsertWithWhereUniqueWithoutDictCountries_oldInput.schema';
import { tblAgreementsCreateManyDictCountries_oldInputEnvelopeObjectSchema as tblAgreementsCreateManyDictCountries_oldInputEnvelopeObjectSchema } from './tblAgreementsCreateManyDictCountries_oldInputEnvelope.schema';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './tblAgreementsWhereUniqueInput.schema';
import { tblAgreementsUpdateWithWhereUniqueWithoutDictCountries_oldInputObjectSchema as tblAgreementsUpdateWithWhereUniqueWithoutDictCountries_oldInputObjectSchema } from './tblAgreementsUpdateWithWhereUniqueWithoutDictCountries_oldInput.schema';
import { tblAgreementsUpdateManyWithWhereWithoutDictCountries_oldInputObjectSchema as tblAgreementsUpdateManyWithWhereWithoutDictCountries_oldInputObjectSchema } from './tblAgreementsUpdateManyWithWhereWithoutDictCountries_oldInput.schema';
import { tblAgreementsScalarWhereInputObjectSchema as tblAgreementsScalarWhereInputObjectSchema } from './tblAgreementsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblAgreementsCreateWithoutDictCountries_oldInputObjectSchema), z.lazy(() => tblAgreementsCreateWithoutDictCountries_oldInputObjectSchema).array(), z.lazy(() => tblAgreementsUncheckedCreateWithoutDictCountries_oldInputObjectSchema), z.lazy(() => tblAgreementsUncheckedCreateWithoutDictCountries_oldInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblAgreementsCreateOrConnectWithoutDictCountries_oldInputObjectSchema), z.lazy(() => tblAgreementsCreateOrConnectWithoutDictCountries_oldInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblAgreementsUpsertWithWhereUniqueWithoutDictCountries_oldInputObjectSchema), z.lazy(() => tblAgreementsUpsertWithWhereUniqueWithoutDictCountries_oldInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblAgreementsCreateManyDictCountries_oldInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema), z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema), z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema), z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema), z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblAgreementsUpdateWithWhereUniqueWithoutDictCountries_oldInputObjectSchema), z.lazy(() => tblAgreementsUpdateWithWhereUniqueWithoutDictCountries_oldInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblAgreementsUpdateManyWithWhereWithoutDictCountries_oldInputObjectSchema), z.lazy(() => tblAgreementsUpdateManyWithWhereWithoutDictCountries_oldInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblAgreementsScalarWhereInputObjectSchema), z.lazy(() => tblAgreementsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblAgreementsUncheckedUpdateManyWithoutDictCountries_oldNestedInputObjectSchema: z.ZodType<Prisma.tblAgreementsUncheckedUpdateManyWithoutDictCountries_oldNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsUncheckedUpdateManyWithoutDictCountries_oldNestedInput>;
export const tblAgreementsUncheckedUpdateManyWithoutDictCountries_oldNestedInputObjectZodSchema = makeSchema();
