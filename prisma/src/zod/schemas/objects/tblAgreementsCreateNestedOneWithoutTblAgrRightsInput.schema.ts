import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsCreateWithoutTblAgrRightsInputObjectSchema as tblAgreementsCreateWithoutTblAgrRightsInputObjectSchema } from './tblAgreementsCreateWithoutTblAgrRightsInput.schema';
import { tblAgreementsUncheckedCreateWithoutTblAgrRightsInputObjectSchema as tblAgreementsUncheckedCreateWithoutTblAgrRightsInputObjectSchema } from './tblAgreementsUncheckedCreateWithoutTblAgrRightsInput.schema';
import { tblAgreementsCreateOrConnectWithoutTblAgrRightsInputObjectSchema as tblAgreementsCreateOrConnectWithoutTblAgrRightsInputObjectSchema } from './tblAgreementsCreateOrConnectWithoutTblAgrRightsInput.schema';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './tblAgreementsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblAgreementsCreateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => tblAgreementsUncheckedCreateWithoutTblAgrRightsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblAgreementsCreateOrConnectWithoutTblAgrRightsInputObjectSchema).optional(),
  connect: z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema).optional()
}).strict();
export const tblAgreementsCreateNestedOneWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.tblAgreementsCreateNestedOneWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsCreateNestedOneWithoutTblAgrRightsInput>;
export const tblAgreementsCreateNestedOneWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
