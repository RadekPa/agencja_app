import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsCreateWithoutTblAgrEventsInputObjectSchema as tblAgreementsCreateWithoutTblAgrEventsInputObjectSchema } from './tblAgreementsCreateWithoutTblAgrEventsInput.schema';
import { tblAgreementsUncheckedCreateWithoutTblAgrEventsInputObjectSchema as tblAgreementsUncheckedCreateWithoutTblAgrEventsInputObjectSchema } from './tblAgreementsUncheckedCreateWithoutTblAgrEventsInput.schema';
import { tblAgreementsCreateOrConnectWithoutTblAgrEventsInputObjectSchema as tblAgreementsCreateOrConnectWithoutTblAgrEventsInputObjectSchema } from './tblAgreementsCreateOrConnectWithoutTblAgrEventsInput.schema';
import { tblAgreementsUpsertWithoutTblAgrEventsInputObjectSchema as tblAgreementsUpsertWithoutTblAgrEventsInputObjectSchema } from './tblAgreementsUpsertWithoutTblAgrEventsInput.schema';
import { tblAgreementsWhereInputObjectSchema as tblAgreementsWhereInputObjectSchema } from './tblAgreementsWhereInput.schema';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './tblAgreementsWhereUniqueInput.schema';
import { tblAgreementsUpdateToOneWithWhereWithoutTblAgrEventsInputObjectSchema as tblAgreementsUpdateToOneWithWhereWithoutTblAgrEventsInputObjectSchema } from './tblAgreementsUpdateToOneWithWhereWithoutTblAgrEventsInput.schema';
import { tblAgreementsUpdateWithoutTblAgrEventsInputObjectSchema as tblAgreementsUpdateWithoutTblAgrEventsInputObjectSchema } from './tblAgreementsUpdateWithoutTblAgrEventsInput.schema';
import { tblAgreementsUncheckedUpdateWithoutTblAgrEventsInputObjectSchema as tblAgreementsUncheckedUpdateWithoutTblAgrEventsInputObjectSchema } from './tblAgreementsUncheckedUpdateWithoutTblAgrEventsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblAgreementsCreateWithoutTblAgrEventsInputObjectSchema), z.lazy(() => tblAgreementsUncheckedCreateWithoutTblAgrEventsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblAgreementsCreateOrConnectWithoutTblAgrEventsInputObjectSchema).optional(),
  upsert: z.lazy(() => tblAgreementsUpsertWithoutTblAgrEventsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => tblAgreementsWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => tblAgreementsWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => tblAgreementsUpdateToOneWithWhereWithoutTblAgrEventsInputObjectSchema), z.lazy(() => tblAgreementsUpdateWithoutTblAgrEventsInputObjectSchema), z.lazy(() => tblAgreementsUncheckedUpdateWithoutTblAgrEventsInputObjectSchema)]).optional()
}).strict();
export const tblAgreementsUpdateOneWithoutTblAgrEventsNestedInputObjectSchema: z.ZodType<Prisma.tblAgreementsUpdateOneWithoutTblAgrEventsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsUpdateOneWithoutTblAgrEventsNestedInput>;
export const tblAgreementsUpdateOneWithoutTblAgrEventsNestedInputObjectZodSchema = makeSchema();
