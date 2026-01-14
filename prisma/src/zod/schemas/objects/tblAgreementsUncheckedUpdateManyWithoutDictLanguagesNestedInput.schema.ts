import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsCreateWithoutDictLanguagesInputObjectSchema as tblAgreementsCreateWithoutDictLanguagesInputObjectSchema } from './tblAgreementsCreateWithoutDictLanguagesInput.schema';
import { tblAgreementsUncheckedCreateWithoutDictLanguagesInputObjectSchema as tblAgreementsUncheckedCreateWithoutDictLanguagesInputObjectSchema } from './tblAgreementsUncheckedCreateWithoutDictLanguagesInput.schema';
import { tblAgreementsCreateOrConnectWithoutDictLanguagesInputObjectSchema as tblAgreementsCreateOrConnectWithoutDictLanguagesInputObjectSchema } from './tblAgreementsCreateOrConnectWithoutDictLanguagesInput.schema';
import { tblAgreementsUpsertWithWhereUniqueWithoutDictLanguagesInputObjectSchema as tblAgreementsUpsertWithWhereUniqueWithoutDictLanguagesInputObjectSchema } from './tblAgreementsUpsertWithWhereUniqueWithoutDictLanguagesInput.schema';
import { tblAgreementsCreateManyDictLanguagesInputEnvelopeObjectSchema as tblAgreementsCreateManyDictLanguagesInputEnvelopeObjectSchema } from './tblAgreementsCreateManyDictLanguagesInputEnvelope.schema';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './tblAgreementsWhereUniqueInput.schema';
import { tblAgreementsUpdateWithWhereUniqueWithoutDictLanguagesInputObjectSchema as tblAgreementsUpdateWithWhereUniqueWithoutDictLanguagesInputObjectSchema } from './tblAgreementsUpdateWithWhereUniqueWithoutDictLanguagesInput.schema';
import { tblAgreementsUpdateManyWithWhereWithoutDictLanguagesInputObjectSchema as tblAgreementsUpdateManyWithWhereWithoutDictLanguagesInputObjectSchema } from './tblAgreementsUpdateManyWithWhereWithoutDictLanguagesInput.schema';
import { tblAgreementsScalarWhereInputObjectSchema as tblAgreementsScalarWhereInputObjectSchema } from './tblAgreementsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblAgreementsCreateWithoutDictLanguagesInputObjectSchema), z.lazy(() => tblAgreementsCreateWithoutDictLanguagesInputObjectSchema).array(), z.lazy(() => tblAgreementsUncheckedCreateWithoutDictLanguagesInputObjectSchema), z.lazy(() => tblAgreementsUncheckedCreateWithoutDictLanguagesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblAgreementsCreateOrConnectWithoutDictLanguagesInputObjectSchema), z.lazy(() => tblAgreementsCreateOrConnectWithoutDictLanguagesInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblAgreementsUpsertWithWhereUniqueWithoutDictLanguagesInputObjectSchema), z.lazy(() => tblAgreementsUpsertWithWhereUniqueWithoutDictLanguagesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblAgreementsCreateManyDictLanguagesInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema), z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema), z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema), z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema), z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblAgreementsUpdateWithWhereUniqueWithoutDictLanguagesInputObjectSchema), z.lazy(() => tblAgreementsUpdateWithWhereUniqueWithoutDictLanguagesInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblAgreementsUpdateManyWithWhereWithoutDictLanguagesInputObjectSchema), z.lazy(() => tblAgreementsUpdateManyWithWhereWithoutDictLanguagesInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblAgreementsScalarWhereInputObjectSchema), z.lazy(() => tblAgreementsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblAgreementsUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema: z.ZodType<Prisma.tblAgreementsUncheckedUpdateManyWithoutDictLanguagesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsUncheckedUpdateManyWithoutDictLanguagesNestedInput>;
export const tblAgreementsUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectZodSchema = makeSchema();
