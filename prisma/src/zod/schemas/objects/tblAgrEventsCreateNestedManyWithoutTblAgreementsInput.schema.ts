import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrEventsCreateWithoutTblAgreementsInputObjectSchema as tblAgrEventsCreateWithoutTblAgreementsInputObjectSchema } from './tblAgrEventsCreateWithoutTblAgreementsInput.schema';
import { tblAgrEventsUncheckedCreateWithoutTblAgreementsInputObjectSchema as tblAgrEventsUncheckedCreateWithoutTblAgreementsInputObjectSchema } from './tblAgrEventsUncheckedCreateWithoutTblAgreementsInput.schema';
import { tblAgrEventsCreateOrConnectWithoutTblAgreementsInputObjectSchema as tblAgrEventsCreateOrConnectWithoutTblAgreementsInputObjectSchema } from './tblAgrEventsCreateOrConnectWithoutTblAgreementsInput.schema';
import { tblAgrEventsCreateManyTblAgreementsInputEnvelopeObjectSchema as tblAgrEventsCreateManyTblAgreementsInputEnvelopeObjectSchema } from './tblAgrEventsCreateManyTblAgreementsInputEnvelope.schema';
import { tblAgrEventsWhereUniqueInputObjectSchema as tblAgrEventsWhereUniqueInputObjectSchema } from './tblAgrEventsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblAgrEventsCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblAgrEventsCreateWithoutTblAgreementsInputObjectSchema).array(), z.lazy(() => tblAgrEventsUncheckedCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblAgrEventsUncheckedCreateWithoutTblAgreementsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblAgrEventsCreateOrConnectWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblAgrEventsCreateOrConnectWithoutTblAgreementsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblAgrEventsCreateManyTblAgreementsInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblAgrEventsWhereUniqueInputObjectSchema), z.lazy(() => tblAgrEventsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblAgrEventsCreateNestedManyWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblAgrEventsCreateNestedManyWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrEventsCreateNestedManyWithoutTblAgreementsInput>;
export const tblAgrEventsCreateNestedManyWithoutTblAgreementsInputObjectZodSchema = makeSchema();
