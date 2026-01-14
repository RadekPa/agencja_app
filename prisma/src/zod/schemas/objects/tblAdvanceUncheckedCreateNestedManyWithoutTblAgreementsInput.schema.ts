import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAdvanceCreateWithoutTblAgreementsInputObjectSchema as tblAdvanceCreateWithoutTblAgreementsInputObjectSchema } from './tblAdvanceCreateWithoutTblAgreementsInput.schema';
import { tblAdvanceUncheckedCreateWithoutTblAgreementsInputObjectSchema as tblAdvanceUncheckedCreateWithoutTblAgreementsInputObjectSchema } from './tblAdvanceUncheckedCreateWithoutTblAgreementsInput.schema';
import { tblAdvanceCreateOrConnectWithoutTblAgreementsInputObjectSchema as tblAdvanceCreateOrConnectWithoutTblAgreementsInputObjectSchema } from './tblAdvanceCreateOrConnectWithoutTblAgreementsInput.schema';
import { tblAdvanceCreateManyTblAgreementsInputEnvelopeObjectSchema as tblAdvanceCreateManyTblAgreementsInputEnvelopeObjectSchema } from './tblAdvanceCreateManyTblAgreementsInputEnvelope.schema';
import { tblAdvanceWhereUniqueInputObjectSchema as tblAdvanceWhereUniqueInputObjectSchema } from './tblAdvanceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblAdvanceCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblAdvanceCreateWithoutTblAgreementsInputObjectSchema).array(), z.lazy(() => tblAdvanceUncheckedCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblAdvanceUncheckedCreateWithoutTblAgreementsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblAdvanceCreateOrConnectWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblAdvanceCreateOrConnectWithoutTblAgreementsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblAdvanceCreateManyTblAgreementsInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblAdvanceWhereUniqueInputObjectSchema), z.lazy(() => tblAdvanceWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblAdvanceUncheckedCreateNestedManyWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblAdvanceUncheckedCreateNestedManyWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAdvanceUncheckedCreateNestedManyWithoutTblAgreementsInput>;
export const tblAdvanceUncheckedCreateNestedManyWithoutTblAgreementsInputObjectZodSchema = makeSchema();
