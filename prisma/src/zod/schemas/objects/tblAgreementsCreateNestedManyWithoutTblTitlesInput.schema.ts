import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsCreateWithoutTblTitlesInputObjectSchema as tblAgreementsCreateWithoutTblTitlesInputObjectSchema } from './tblAgreementsCreateWithoutTblTitlesInput.schema';
import { tblAgreementsUncheckedCreateWithoutTblTitlesInputObjectSchema as tblAgreementsUncheckedCreateWithoutTblTitlesInputObjectSchema } from './tblAgreementsUncheckedCreateWithoutTblTitlesInput.schema';
import { tblAgreementsCreateOrConnectWithoutTblTitlesInputObjectSchema as tblAgreementsCreateOrConnectWithoutTblTitlesInputObjectSchema } from './tblAgreementsCreateOrConnectWithoutTblTitlesInput.schema';
import { tblAgreementsCreateManyTblTitlesInputEnvelopeObjectSchema as tblAgreementsCreateManyTblTitlesInputEnvelopeObjectSchema } from './tblAgreementsCreateManyTblTitlesInputEnvelope.schema';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './tblAgreementsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblAgreementsCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblAgreementsCreateWithoutTblTitlesInputObjectSchema).array(), z.lazy(() => tblAgreementsUncheckedCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblAgreementsUncheckedCreateWithoutTblTitlesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblAgreementsCreateOrConnectWithoutTblTitlesInputObjectSchema), z.lazy(() => tblAgreementsCreateOrConnectWithoutTblTitlesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblAgreementsCreateManyTblTitlesInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema), z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblAgreementsCreateNestedManyWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.tblAgreementsCreateNestedManyWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsCreateNestedManyWithoutTblTitlesInput>;
export const tblAgreementsCreateNestedManyWithoutTblTitlesInputObjectZodSchema = makeSchema();
