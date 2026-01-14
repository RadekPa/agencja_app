import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrEventsWhereUniqueInputObjectSchema as tblAgrEventsWhereUniqueInputObjectSchema } from './tblAgrEventsWhereUniqueInput.schema';
import { tblAgrEventsCreateWithoutTblAgreementsInputObjectSchema as tblAgrEventsCreateWithoutTblAgreementsInputObjectSchema } from './tblAgrEventsCreateWithoutTblAgreementsInput.schema';
import { tblAgrEventsUncheckedCreateWithoutTblAgreementsInputObjectSchema as tblAgrEventsUncheckedCreateWithoutTblAgreementsInputObjectSchema } from './tblAgrEventsUncheckedCreateWithoutTblAgreementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgrEventsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblAgrEventsCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblAgrEventsUncheckedCreateWithoutTblAgreementsInputObjectSchema)])
}).strict();
export const tblAgrEventsCreateOrConnectWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblAgrEventsCreateOrConnectWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrEventsCreateOrConnectWithoutTblAgreementsInput>;
export const tblAgrEventsCreateOrConnectWithoutTblAgreementsInputObjectZodSchema = makeSchema();
