import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsCreateWithoutTblAgrEventsInputObjectSchema as tblAgreementsCreateWithoutTblAgrEventsInputObjectSchema } from './tblAgreementsCreateWithoutTblAgrEventsInput.schema';
import { tblAgreementsUncheckedCreateWithoutTblAgrEventsInputObjectSchema as tblAgreementsUncheckedCreateWithoutTblAgrEventsInputObjectSchema } from './tblAgreementsUncheckedCreateWithoutTblAgrEventsInput.schema';
import { tblAgreementsCreateOrConnectWithoutTblAgrEventsInputObjectSchema as tblAgreementsCreateOrConnectWithoutTblAgrEventsInputObjectSchema } from './tblAgreementsCreateOrConnectWithoutTblAgrEventsInput.schema';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './tblAgreementsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblAgreementsCreateWithoutTblAgrEventsInputObjectSchema), z.lazy(() => tblAgreementsUncheckedCreateWithoutTblAgrEventsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblAgreementsCreateOrConnectWithoutTblAgrEventsInputObjectSchema).optional(),
  connect: z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema).optional()
}).strict();
export const tblAgreementsCreateNestedOneWithoutTblAgrEventsInputObjectSchema: z.ZodType<Prisma.tblAgreementsCreateNestedOneWithoutTblAgrEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsCreateNestedOneWithoutTblAgrEventsInput>;
export const tblAgreementsCreateNestedOneWithoutTblAgrEventsInputObjectZodSchema = makeSchema();
