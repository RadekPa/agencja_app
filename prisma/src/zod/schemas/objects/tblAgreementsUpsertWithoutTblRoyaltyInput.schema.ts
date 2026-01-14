import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsUpdateWithoutTblRoyaltyInputObjectSchema as tblAgreementsUpdateWithoutTblRoyaltyInputObjectSchema } from './tblAgreementsUpdateWithoutTblRoyaltyInput.schema';
import { tblAgreementsUncheckedUpdateWithoutTblRoyaltyInputObjectSchema as tblAgreementsUncheckedUpdateWithoutTblRoyaltyInputObjectSchema } from './tblAgreementsUncheckedUpdateWithoutTblRoyaltyInput.schema';
import { tblAgreementsCreateWithoutTblRoyaltyInputObjectSchema as tblAgreementsCreateWithoutTblRoyaltyInputObjectSchema } from './tblAgreementsCreateWithoutTblRoyaltyInput.schema';
import { tblAgreementsUncheckedCreateWithoutTblRoyaltyInputObjectSchema as tblAgreementsUncheckedCreateWithoutTblRoyaltyInputObjectSchema } from './tblAgreementsUncheckedCreateWithoutTblRoyaltyInput.schema';
import { tblAgreementsWhereInputObjectSchema as tblAgreementsWhereInputObjectSchema } from './tblAgreementsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => tblAgreementsUpdateWithoutTblRoyaltyInputObjectSchema), z.lazy(() => tblAgreementsUncheckedUpdateWithoutTblRoyaltyInputObjectSchema)]),
  create: z.union([z.lazy(() => tblAgreementsCreateWithoutTblRoyaltyInputObjectSchema), z.lazy(() => tblAgreementsUncheckedCreateWithoutTblRoyaltyInputObjectSchema)]),
  where: z.lazy(() => tblAgreementsWhereInputObjectSchema).optional()
}).strict();
export const tblAgreementsUpsertWithoutTblRoyaltyInputObjectSchema: z.ZodType<Prisma.tblAgreementsUpsertWithoutTblRoyaltyInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsUpsertWithoutTblRoyaltyInput>;
export const tblAgreementsUpsertWithoutTblRoyaltyInputObjectZodSchema = makeSchema();
