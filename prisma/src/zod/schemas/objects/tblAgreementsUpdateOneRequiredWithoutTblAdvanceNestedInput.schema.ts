import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsCreateWithoutTblAdvanceInputObjectSchema as tblAgreementsCreateWithoutTblAdvanceInputObjectSchema } from './tblAgreementsCreateWithoutTblAdvanceInput.schema';
import { tblAgreementsUncheckedCreateWithoutTblAdvanceInputObjectSchema as tblAgreementsUncheckedCreateWithoutTblAdvanceInputObjectSchema } from './tblAgreementsUncheckedCreateWithoutTblAdvanceInput.schema';
import { tblAgreementsCreateOrConnectWithoutTblAdvanceInputObjectSchema as tblAgreementsCreateOrConnectWithoutTblAdvanceInputObjectSchema } from './tblAgreementsCreateOrConnectWithoutTblAdvanceInput.schema';
import { tblAgreementsUpsertWithoutTblAdvanceInputObjectSchema as tblAgreementsUpsertWithoutTblAdvanceInputObjectSchema } from './tblAgreementsUpsertWithoutTblAdvanceInput.schema';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './tblAgreementsWhereUniqueInput.schema';
import { tblAgreementsUpdateToOneWithWhereWithoutTblAdvanceInputObjectSchema as tblAgreementsUpdateToOneWithWhereWithoutTblAdvanceInputObjectSchema } from './tblAgreementsUpdateToOneWithWhereWithoutTblAdvanceInput.schema';
import { tblAgreementsUpdateWithoutTblAdvanceInputObjectSchema as tblAgreementsUpdateWithoutTblAdvanceInputObjectSchema } from './tblAgreementsUpdateWithoutTblAdvanceInput.schema';
import { tblAgreementsUncheckedUpdateWithoutTblAdvanceInputObjectSchema as tblAgreementsUncheckedUpdateWithoutTblAdvanceInputObjectSchema } from './tblAgreementsUncheckedUpdateWithoutTblAdvanceInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblAgreementsCreateWithoutTblAdvanceInputObjectSchema), z.lazy(() => tblAgreementsUncheckedCreateWithoutTblAdvanceInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblAgreementsCreateOrConnectWithoutTblAdvanceInputObjectSchema).optional(),
  upsert: z.lazy(() => tblAgreementsUpsertWithoutTblAdvanceInputObjectSchema).optional(),
  connect: z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => tblAgreementsUpdateToOneWithWhereWithoutTblAdvanceInputObjectSchema), z.lazy(() => tblAgreementsUpdateWithoutTblAdvanceInputObjectSchema), z.lazy(() => tblAgreementsUncheckedUpdateWithoutTblAdvanceInputObjectSchema)]).optional()
}).strict();
export const tblAgreementsUpdateOneRequiredWithoutTblAdvanceNestedInputObjectSchema: z.ZodType<Prisma.tblAgreementsUpdateOneRequiredWithoutTblAdvanceNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsUpdateOneRequiredWithoutTblAdvanceNestedInput>;
export const tblAgreementsUpdateOneRequiredWithoutTblAdvanceNestedInputObjectZodSchema = makeSchema();
