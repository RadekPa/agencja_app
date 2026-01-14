import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblRoyaltyWhereUniqueInputObjectSchema as tblRoyaltyWhereUniqueInputObjectSchema } from './tblRoyaltyWhereUniqueInput.schema';
import { tblRoyaltyCreateWithoutTblAgreementsInputObjectSchema as tblRoyaltyCreateWithoutTblAgreementsInputObjectSchema } from './tblRoyaltyCreateWithoutTblAgreementsInput.schema';
import { tblRoyaltyUncheckedCreateWithoutTblAgreementsInputObjectSchema as tblRoyaltyUncheckedCreateWithoutTblAgreementsInputObjectSchema } from './tblRoyaltyUncheckedCreateWithoutTblAgreementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblRoyaltyWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblRoyaltyCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblRoyaltyUncheckedCreateWithoutTblAgreementsInputObjectSchema)])
}).strict();
export const tblRoyaltyCreateOrConnectWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblRoyaltyCreateOrConnectWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblRoyaltyCreateOrConnectWithoutTblAgreementsInput>;
export const tblRoyaltyCreateOrConnectWithoutTblAgreementsInputObjectZodSchema = makeSchema();
