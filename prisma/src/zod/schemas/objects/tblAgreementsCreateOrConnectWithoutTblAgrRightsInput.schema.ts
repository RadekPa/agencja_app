import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './tblAgreementsWhereUniqueInput.schema';
import { tblAgreementsCreateWithoutTblAgrRightsInputObjectSchema as tblAgreementsCreateWithoutTblAgrRightsInputObjectSchema } from './tblAgreementsCreateWithoutTblAgrRightsInput.schema';
import { tblAgreementsUncheckedCreateWithoutTblAgrRightsInputObjectSchema as tblAgreementsUncheckedCreateWithoutTblAgrRightsInputObjectSchema } from './tblAgreementsUncheckedCreateWithoutTblAgrRightsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblAgreementsCreateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => tblAgreementsUncheckedCreateWithoutTblAgrRightsInputObjectSchema)])
}).strict();
export const tblAgreementsCreateOrConnectWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.tblAgreementsCreateOrConnectWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsCreateOrConnectWithoutTblAgrRightsInput>;
export const tblAgreementsCreateOrConnectWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
