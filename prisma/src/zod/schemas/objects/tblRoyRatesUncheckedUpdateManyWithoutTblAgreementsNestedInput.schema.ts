import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblRoyRatesCreateWithoutTblAgreementsInputObjectSchema as tblRoyRatesCreateWithoutTblAgreementsInputObjectSchema } from './tblRoyRatesCreateWithoutTblAgreementsInput.schema';
import { tblRoyRatesUncheckedCreateWithoutTblAgreementsInputObjectSchema as tblRoyRatesUncheckedCreateWithoutTblAgreementsInputObjectSchema } from './tblRoyRatesUncheckedCreateWithoutTblAgreementsInput.schema';
import { tblRoyRatesCreateOrConnectWithoutTblAgreementsInputObjectSchema as tblRoyRatesCreateOrConnectWithoutTblAgreementsInputObjectSchema } from './tblRoyRatesCreateOrConnectWithoutTblAgreementsInput.schema';
import { tblRoyRatesUpsertWithWhereUniqueWithoutTblAgreementsInputObjectSchema as tblRoyRatesUpsertWithWhereUniqueWithoutTblAgreementsInputObjectSchema } from './tblRoyRatesUpsertWithWhereUniqueWithoutTblAgreementsInput.schema';
import { tblRoyRatesCreateManyTblAgreementsInputEnvelopeObjectSchema as tblRoyRatesCreateManyTblAgreementsInputEnvelopeObjectSchema } from './tblRoyRatesCreateManyTblAgreementsInputEnvelope.schema';
import { tblRoyRatesWhereUniqueInputObjectSchema as tblRoyRatesWhereUniqueInputObjectSchema } from './tblRoyRatesWhereUniqueInput.schema';
import { tblRoyRatesUpdateWithWhereUniqueWithoutTblAgreementsInputObjectSchema as tblRoyRatesUpdateWithWhereUniqueWithoutTblAgreementsInputObjectSchema } from './tblRoyRatesUpdateWithWhereUniqueWithoutTblAgreementsInput.schema';
import { tblRoyRatesUpdateManyWithWhereWithoutTblAgreementsInputObjectSchema as tblRoyRatesUpdateManyWithWhereWithoutTblAgreementsInputObjectSchema } from './tblRoyRatesUpdateManyWithWhereWithoutTblAgreementsInput.schema';
import { tblRoyRatesScalarWhereInputObjectSchema as tblRoyRatesScalarWhereInputObjectSchema } from './tblRoyRatesScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblRoyRatesCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblRoyRatesCreateWithoutTblAgreementsInputObjectSchema).array(), z.lazy(() => tblRoyRatesUncheckedCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblRoyRatesUncheckedCreateWithoutTblAgreementsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblRoyRatesCreateOrConnectWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblRoyRatesCreateOrConnectWithoutTblAgreementsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblRoyRatesUpsertWithWhereUniqueWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblRoyRatesUpsertWithWhereUniqueWithoutTblAgreementsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblRoyRatesCreateManyTblAgreementsInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblRoyRatesWhereUniqueInputObjectSchema), z.lazy(() => tblRoyRatesWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblRoyRatesWhereUniqueInputObjectSchema), z.lazy(() => tblRoyRatesWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblRoyRatesWhereUniqueInputObjectSchema), z.lazy(() => tblRoyRatesWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblRoyRatesWhereUniqueInputObjectSchema), z.lazy(() => tblRoyRatesWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblRoyRatesUpdateWithWhereUniqueWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblRoyRatesUpdateWithWhereUniqueWithoutTblAgreementsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblRoyRatesUpdateManyWithWhereWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblRoyRatesUpdateManyWithWhereWithoutTblAgreementsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblRoyRatesScalarWhereInputObjectSchema), z.lazy(() => tblRoyRatesScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblRoyRatesUncheckedUpdateManyWithoutTblAgreementsNestedInputObjectSchema: z.ZodType<Prisma.tblRoyRatesUncheckedUpdateManyWithoutTblAgreementsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblRoyRatesUncheckedUpdateManyWithoutTblAgreementsNestedInput>;
export const tblRoyRatesUncheckedUpdateManyWithoutTblAgreementsNestedInputObjectZodSchema = makeSchema();
