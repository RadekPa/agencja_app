import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsCreateWithoutTblAgrRightsInputObjectSchema as tblAgreementsCreateWithoutTblAgrRightsInputObjectSchema } from './tblAgreementsCreateWithoutTblAgrRightsInput.schema';
import { tblAgreementsUncheckedCreateWithoutTblAgrRightsInputObjectSchema as tblAgreementsUncheckedCreateWithoutTblAgrRightsInputObjectSchema } from './tblAgreementsUncheckedCreateWithoutTblAgrRightsInput.schema';
import { tblAgreementsCreateOrConnectWithoutTblAgrRightsInputObjectSchema as tblAgreementsCreateOrConnectWithoutTblAgrRightsInputObjectSchema } from './tblAgreementsCreateOrConnectWithoutTblAgrRightsInput.schema';
import { tblAgreementsUpsertWithoutTblAgrRightsInputObjectSchema as tblAgreementsUpsertWithoutTblAgrRightsInputObjectSchema } from './tblAgreementsUpsertWithoutTblAgrRightsInput.schema';
import { tblAgreementsWhereInputObjectSchema as tblAgreementsWhereInputObjectSchema } from './tblAgreementsWhereInput.schema';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './tblAgreementsWhereUniqueInput.schema';
import { tblAgreementsUpdateToOneWithWhereWithoutTblAgrRightsInputObjectSchema as tblAgreementsUpdateToOneWithWhereWithoutTblAgrRightsInputObjectSchema } from './tblAgreementsUpdateToOneWithWhereWithoutTblAgrRightsInput.schema';
import { tblAgreementsUpdateWithoutTblAgrRightsInputObjectSchema as tblAgreementsUpdateWithoutTblAgrRightsInputObjectSchema } from './tblAgreementsUpdateWithoutTblAgrRightsInput.schema';
import { tblAgreementsUncheckedUpdateWithoutTblAgrRightsInputObjectSchema as tblAgreementsUncheckedUpdateWithoutTblAgrRightsInputObjectSchema } from './tblAgreementsUncheckedUpdateWithoutTblAgrRightsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblAgreementsCreateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => tblAgreementsUncheckedCreateWithoutTblAgrRightsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblAgreementsCreateOrConnectWithoutTblAgrRightsInputObjectSchema).optional(),
  upsert: z.lazy(() => tblAgreementsUpsertWithoutTblAgrRightsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => tblAgreementsWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => tblAgreementsWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => tblAgreementsUpdateToOneWithWhereWithoutTblAgrRightsInputObjectSchema), z.lazy(() => tblAgreementsUpdateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => tblAgreementsUncheckedUpdateWithoutTblAgrRightsInputObjectSchema)]).optional()
}).strict();
export const tblAgreementsUpdateOneWithoutTblAgrRightsNestedInputObjectSchema: z.ZodType<Prisma.tblAgreementsUpdateOneWithoutTblAgrRightsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsUpdateOneWithoutTblAgrRightsNestedInput>;
export const tblAgreementsUpdateOneWithoutTblAgrRightsNestedInputObjectZodSchema = makeSchema();
