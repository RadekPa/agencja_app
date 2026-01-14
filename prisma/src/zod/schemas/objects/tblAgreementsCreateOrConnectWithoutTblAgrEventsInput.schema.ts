import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './tblAgreementsWhereUniqueInput.schema';
import { tblAgreementsCreateWithoutTblAgrEventsInputObjectSchema as tblAgreementsCreateWithoutTblAgrEventsInputObjectSchema } from './tblAgreementsCreateWithoutTblAgrEventsInput.schema';
import { tblAgreementsUncheckedCreateWithoutTblAgrEventsInputObjectSchema as tblAgreementsUncheckedCreateWithoutTblAgrEventsInputObjectSchema } from './tblAgreementsUncheckedCreateWithoutTblAgrEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblAgreementsCreateWithoutTblAgrEventsInputObjectSchema), z.lazy(() => tblAgreementsUncheckedCreateWithoutTblAgrEventsInputObjectSchema)])
}).strict();
export const tblAgreementsCreateOrConnectWithoutTblAgrEventsInputObjectSchema: z.ZodType<Prisma.tblAgreementsCreateOrConnectWithoutTblAgrEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsCreateOrConnectWithoutTblAgrEventsInput>;
export const tblAgreementsCreateOrConnectWithoutTblAgrEventsInputObjectZodSchema = makeSchema();
