import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPubLocalCreateWithoutTblAgreementsInputObjectSchema as tblPubLocalCreateWithoutTblAgreementsInputObjectSchema } from './tblPubLocalCreateWithoutTblAgreementsInput.schema';
import { tblPubLocalUncheckedCreateWithoutTblAgreementsInputObjectSchema as tblPubLocalUncheckedCreateWithoutTblAgreementsInputObjectSchema } from './tblPubLocalUncheckedCreateWithoutTblAgreementsInput.schema';
import { tblPubLocalCreateOrConnectWithoutTblAgreementsInputObjectSchema as tblPubLocalCreateOrConnectWithoutTblAgreementsInputObjectSchema } from './tblPubLocalCreateOrConnectWithoutTblAgreementsInput.schema';
import { tblPubLocalCreateManyTblAgreementsInputEnvelopeObjectSchema as tblPubLocalCreateManyTblAgreementsInputEnvelopeObjectSchema } from './tblPubLocalCreateManyTblAgreementsInputEnvelope.schema';
import { tblPubLocalWhereUniqueInputObjectSchema as tblPubLocalWhereUniqueInputObjectSchema } from './tblPubLocalWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblPubLocalCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblPubLocalCreateWithoutTblAgreementsInputObjectSchema).array(), z.lazy(() => tblPubLocalUncheckedCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblPubLocalUncheckedCreateWithoutTblAgreementsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblPubLocalCreateOrConnectWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblPubLocalCreateOrConnectWithoutTblAgreementsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblPubLocalCreateManyTblAgreementsInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblPubLocalWhereUniqueInputObjectSchema), z.lazy(() => tblPubLocalWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblPubLocalCreateNestedManyWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblPubLocalCreateNestedManyWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPubLocalCreateNestedManyWithoutTblAgreementsInput>;
export const tblPubLocalCreateNestedManyWithoutTblAgreementsInputObjectZodSchema = makeSchema();
