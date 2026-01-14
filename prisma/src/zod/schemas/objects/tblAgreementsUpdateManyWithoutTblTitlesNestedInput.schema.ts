import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsCreateWithoutTblTitlesInputObjectSchema as tblAgreementsCreateWithoutTblTitlesInputObjectSchema } from './tblAgreementsCreateWithoutTblTitlesInput.schema';
import { tblAgreementsUncheckedCreateWithoutTblTitlesInputObjectSchema as tblAgreementsUncheckedCreateWithoutTblTitlesInputObjectSchema } from './tblAgreementsUncheckedCreateWithoutTblTitlesInput.schema';
import { tblAgreementsCreateOrConnectWithoutTblTitlesInputObjectSchema as tblAgreementsCreateOrConnectWithoutTblTitlesInputObjectSchema } from './tblAgreementsCreateOrConnectWithoutTblTitlesInput.schema';
import { tblAgreementsUpsertWithWhereUniqueWithoutTblTitlesInputObjectSchema as tblAgreementsUpsertWithWhereUniqueWithoutTblTitlesInputObjectSchema } from './tblAgreementsUpsertWithWhereUniqueWithoutTblTitlesInput.schema';
import { tblAgreementsCreateManyTblTitlesInputEnvelopeObjectSchema as tblAgreementsCreateManyTblTitlesInputEnvelopeObjectSchema } from './tblAgreementsCreateManyTblTitlesInputEnvelope.schema';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './tblAgreementsWhereUniqueInput.schema';
import { tblAgreementsUpdateWithWhereUniqueWithoutTblTitlesInputObjectSchema as tblAgreementsUpdateWithWhereUniqueWithoutTblTitlesInputObjectSchema } from './tblAgreementsUpdateWithWhereUniqueWithoutTblTitlesInput.schema';
import { tblAgreementsUpdateManyWithWhereWithoutTblTitlesInputObjectSchema as tblAgreementsUpdateManyWithWhereWithoutTblTitlesInputObjectSchema } from './tblAgreementsUpdateManyWithWhereWithoutTblTitlesInput.schema';
import { tblAgreementsScalarWhereInputObjectSchema as tblAgreementsScalarWhereInputObjectSchema } from './tblAgreementsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblAgreementsCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblAgreementsCreateWithoutTblTitlesInputObjectSchema).array(), z.lazy(() => tblAgreementsUncheckedCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblAgreementsUncheckedCreateWithoutTblTitlesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblAgreementsCreateOrConnectWithoutTblTitlesInputObjectSchema), z.lazy(() => tblAgreementsCreateOrConnectWithoutTblTitlesInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblAgreementsUpsertWithWhereUniqueWithoutTblTitlesInputObjectSchema), z.lazy(() => tblAgreementsUpsertWithWhereUniqueWithoutTblTitlesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblAgreementsCreateManyTblTitlesInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema), z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema), z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema), z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema), z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblAgreementsUpdateWithWhereUniqueWithoutTblTitlesInputObjectSchema), z.lazy(() => tblAgreementsUpdateWithWhereUniqueWithoutTblTitlesInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblAgreementsUpdateManyWithWhereWithoutTblTitlesInputObjectSchema), z.lazy(() => tblAgreementsUpdateManyWithWhereWithoutTblTitlesInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblAgreementsScalarWhereInputObjectSchema), z.lazy(() => tblAgreementsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblAgreementsUpdateManyWithoutTblTitlesNestedInputObjectSchema: z.ZodType<Prisma.tblAgreementsUpdateManyWithoutTblTitlesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsUpdateManyWithoutTblTitlesNestedInput>;
export const tblAgreementsUpdateManyWithoutTblTitlesNestedInputObjectZodSchema = makeSchema();
