import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPubLocalWhereUniqueInputObjectSchema as tblPubLocalWhereUniqueInputObjectSchema } from './tblPubLocalWhereUniqueInput.schema';
import { tblPubLocalCreateWithoutTblAgreementsInputObjectSchema as tblPubLocalCreateWithoutTblAgreementsInputObjectSchema } from './tblPubLocalCreateWithoutTblAgreementsInput.schema';
import { tblPubLocalUncheckedCreateWithoutTblAgreementsInputObjectSchema as tblPubLocalUncheckedCreateWithoutTblAgreementsInputObjectSchema } from './tblPubLocalUncheckedCreateWithoutTblAgreementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblPubLocalWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblPubLocalCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblPubLocalUncheckedCreateWithoutTblAgreementsInputObjectSchema)])
}).strict();
export const tblPubLocalCreateOrConnectWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblPubLocalCreateOrConnectWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPubLocalCreateOrConnectWithoutTblAgreementsInput>;
export const tblPubLocalCreateOrConnectWithoutTblAgreementsInputObjectZodSchema = makeSchema();
