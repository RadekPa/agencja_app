import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblRoyaltyWhereUniqueInputObjectSchema as tblRoyaltyWhereUniqueInputObjectSchema } from './tblRoyaltyWhereUniqueInput.schema';
import { tblRoyaltyUpdateWithoutTblAgreementsInputObjectSchema as tblRoyaltyUpdateWithoutTblAgreementsInputObjectSchema } from './tblRoyaltyUpdateWithoutTblAgreementsInput.schema';
import { tblRoyaltyUncheckedUpdateWithoutTblAgreementsInputObjectSchema as tblRoyaltyUncheckedUpdateWithoutTblAgreementsInputObjectSchema } from './tblRoyaltyUncheckedUpdateWithoutTblAgreementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblRoyaltyWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblRoyaltyUpdateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblRoyaltyUncheckedUpdateWithoutTblAgreementsInputObjectSchema)])
}).strict();
export const tblRoyaltyUpdateWithWhereUniqueWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblRoyaltyUpdateWithWhereUniqueWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblRoyaltyUpdateWithWhereUniqueWithoutTblAgreementsInput>;
export const tblRoyaltyUpdateWithWhereUniqueWithoutTblAgreementsInputObjectZodSchema = makeSchema();
