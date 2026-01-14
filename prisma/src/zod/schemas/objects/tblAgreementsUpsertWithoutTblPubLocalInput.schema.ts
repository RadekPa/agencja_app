import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsUpdateWithoutTblPubLocalInputObjectSchema as tblAgreementsUpdateWithoutTblPubLocalInputObjectSchema } from './tblAgreementsUpdateWithoutTblPubLocalInput.schema';
import { tblAgreementsUncheckedUpdateWithoutTblPubLocalInputObjectSchema as tblAgreementsUncheckedUpdateWithoutTblPubLocalInputObjectSchema } from './tblAgreementsUncheckedUpdateWithoutTblPubLocalInput.schema';
import { tblAgreementsCreateWithoutTblPubLocalInputObjectSchema as tblAgreementsCreateWithoutTblPubLocalInputObjectSchema } from './tblAgreementsCreateWithoutTblPubLocalInput.schema';
import { tblAgreementsUncheckedCreateWithoutTblPubLocalInputObjectSchema as tblAgreementsUncheckedCreateWithoutTblPubLocalInputObjectSchema } from './tblAgreementsUncheckedCreateWithoutTblPubLocalInput.schema';
import { tblAgreementsWhereInputObjectSchema as tblAgreementsWhereInputObjectSchema } from './tblAgreementsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => tblAgreementsUpdateWithoutTblPubLocalInputObjectSchema), z.lazy(() => tblAgreementsUncheckedUpdateWithoutTblPubLocalInputObjectSchema)]),
  create: z.union([z.lazy(() => tblAgreementsCreateWithoutTblPubLocalInputObjectSchema), z.lazy(() => tblAgreementsUncheckedCreateWithoutTblPubLocalInputObjectSchema)]),
  where: z.lazy(() => tblAgreementsWhereInputObjectSchema).optional()
}).strict();
export const tblAgreementsUpsertWithoutTblPubLocalInputObjectSchema: z.ZodType<Prisma.tblAgreementsUpsertWithoutTblPubLocalInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsUpsertWithoutTblPubLocalInput>;
export const tblAgreementsUpsertWithoutTblPubLocalInputObjectZodSchema = makeSchema();
