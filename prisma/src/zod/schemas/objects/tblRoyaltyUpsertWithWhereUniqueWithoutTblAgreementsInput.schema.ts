import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblRoyaltyWhereUniqueInputObjectSchema as tblRoyaltyWhereUniqueInputObjectSchema } from './tblRoyaltyWhereUniqueInput.schema';
import { tblRoyaltyUpdateWithoutTblAgreementsInputObjectSchema as tblRoyaltyUpdateWithoutTblAgreementsInputObjectSchema } from './tblRoyaltyUpdateWithoutTblAgreementsInput.schema';
import { tblRoyaltyUncheckedUpdateWithoutTblAgreementsInputObjectSchema as tblRoyaltyUncheckedUpdateWithoutTblAgreementsInputObjectSchema } from './tblRoyaltyUncheckedUpdateWithoutTblAgreementsInput.schema';
import { tblRoyaltyCreateWithoutTblAgreementsInputObjectSchema as tblRoyaltyCreateWithoutTblAgreementsInputObjectSchema } from './tblRoyaltyCreateWithoutTblAgreementsInput.schema';
import { tblRoyaltyUncheckedCreateWithoutTblAgreementsInputObjectSchema as tblRoyaltyUncheckedCreateWithoutTblAgreementsInputObjectSchema } from './tblRoyaltyUncheckedCreateWithoutTblAgreementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblRoyaltyWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblRoyaltyUpdateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblRoyaltyUncheckedUpdateWithoutTblAgreementsInputObjectSchema)]),
  create: z.union([z.lazy(() => tblRoyaltyCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblRoyaltyUncheckedCreateWithoutTblAgreementsInputObjectSchema)])
}).strict();
export const tblRoyaltyUpsertWithWhereUniqueWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblRoyaltyUpsertWithWhereUniqueWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblRoyaltyUpsertWithWhereUniqueWithoutTblAgreementsInput>;
export const tblRoyaltyUpsertWithWhereUniqueWithoutTblAgreementsInputObjectZodSchema = makeSchema();
