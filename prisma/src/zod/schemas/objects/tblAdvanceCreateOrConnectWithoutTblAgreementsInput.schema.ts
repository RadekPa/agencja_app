import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAdvanceWhereUniqueInputObjectSchema as tblAdvanceWhereUniqueInputObjectSchema } from './tblAdvanceWhereUniqueInput.schema';
import { tblAdvanceCreateWithoutTblAgreementsInputObjectSchema as tblAdvanceCreateWithoutTblAgreementsInputObjectSchema } from './tblAdvanceCreateWithoutTblAgreementsInput.schema';
import { tblAdvanceUncheckedCreateWithoutTblAgreementsInputObjectSchema as tblAdvanceUncheckedCreateWithoutTblAgreementsInputObjectSchema } from './tblAdvanceUncheckedCreateWithoutTblAgreementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAdvanceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblAdvanceCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblAdvanceUncheckedCreateWithoutTblAgreementsInputObjectSchema)])
}).strict();
export const tblAdvanceCreateOrConnectWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblAdvanceCreateOrConnectWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAdvanceCreateOrConnectWithoutTblAgreementsInput>;
export const tblAdvanceCreateOrConnectWithoutTblAgreementsInputObjectZodSchema = makeSchema();
