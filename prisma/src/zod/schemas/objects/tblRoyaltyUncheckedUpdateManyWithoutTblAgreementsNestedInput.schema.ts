import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblRoyaltyCreateWithoutTblAgreementsInputObjectSchema as tblRoyaltyCreateWithoutTblAgreementsInputObjectSchema } from './tblRoyaltyCreateWithoutTblAgreementsInput.schema';
import { tblRoyaltyUncheckedCreateWithoutTblAgreementsInputObjectSchema as tblRoyaltyUncheckedCreateWithoutTblAgreementsInputObjectSchema } from './tblRoyaltyUncheckedCreateWithoutTblAgreementsInput.schema';
import { tblRoyaltyCreateOrConnectWithoutTblAgreementsInputObjectSchema as tblRoyaltyCreateOrConnectWithoutTblAgreementsInputObjectSchema } from './tblRoyaltyCreateOrConnectWithoutTblAgreementsInput.schema';
import { tblRoyaltyUpsertWithWhereUniqueWithoutTblAgreementsInputObjectSchema as tblRoyaltyUpsertWithWhereUniqueWithoutTblAgreementsInputObjectSchema } from './tblRoyaltyUpsertWithWhereUniqueWithoutTblAgreementsInput.schema';
import { tblRoyaltyCreateManyTblAgreementsInputEnvelopeObjectSchema as tblRoyaltyCreateManyTblAgreementsInputEnvelopeObjectSchema } from './tblRoyaltyCreateManyTblAgreementsInputEnvelope.schema';
import { tblRoyaltyWhereUniqueInputObjectSchema as tblRoyaltyWhereUniqueInputObjectSchema } from './tblRoyaltyWhereUniqueInput.schema';
import { tblRoyaltyUpdateWithWhereUniqueWithoutTblAgreementsInputObjectSchema as tblRoyaltyUpdateWithWhereUniqueWithoutTblAgreementsInputObjectSchema } from './tblRoyaltyUpdateWithWhereUniqueWithoutTblAgreementsInput.schema';
import { tblRoyaltyUpdateManyWithWhereWithoutTblAgreementsInputObjectSchema as tblRoyaltyUpdateManyWithWhereWithoutTblAgreementsInputObjectSchema } from './tblRoyaltyUpdateManyWithWhereWithoutTblAgreementsInput.schema';
import { tblRoyaltyScalarWhereInputObjectSchema as tblRoyaltyScalarWhereInputObjectSchema } from './tblRoyaltyScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblRoyaltyCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblRoyaltyCreateWithoutTblAgreementsInputObjectSchema).array(), z.lazy(() => tblRoyaltyUncheckedCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblRoyaltyUncheckedCreateWithoutTblAgreementsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblRoyaltyCreateOrConnectWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblRoyaltyCreateOrConnectWithoutTblAgreementsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblRoyaltyUpsertWithWhereUniqueWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblRoyaltyUpsertWithWhereUniqueWithoutTblAgreementsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblRoyaltyCreateManyTblAgreementsInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblRoyaltyWhereUniqueInputObjectSchema), z.lazy(() => tblRoyaltyWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblRoyaltyWhereUniqueInputObjectSchema), z.lazy(() => tblRoyaltyWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblRoyaltyWhereUniqueInputObjectSchema), z.lazy(() => tblRoyaltyWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblRoyaltyWhereUniqueInputObjectSchema), z.lazy(() => tblRoyaltyWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblRoyaltyUpdateWithWhereUniqueWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblRoyaltyUpdateWithWhereUniqueWithoutTblAgreementsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblRoyaltyUpdateManyWithWhereWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblRoyaltyUpdateManyWithWhereWithoutTblAgreementsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblRoyaltyScalarWhereInputObjectSchema), z.lazy(() => tblRoyaltyScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblRoyaltyUncheckedUpdateManyWithoutTblAgreementsNestedInputObjectSchema: z.ZodType<Prisma.tblRoyaltyUncheckedUpdateManyWithoutTblAgreementsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblRoyaltyUncheckedUpdateManyWithoutTblAgreementsNestedInput>;
export const tblRoyaltyUncheckedUpdateManyWithoutTblAgreementsNestedInputObjectZodSchema = makeSchema();
