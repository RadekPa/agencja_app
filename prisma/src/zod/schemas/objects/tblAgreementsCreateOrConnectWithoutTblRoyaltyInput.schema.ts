import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './tblAgreementsWhereUniqueInput.schema';
import { tblAgreementsCreateWithoutTblRoyaltyInputObjectSchema as tblAgreementsCreateWithoutTblRoyaltyInputObjectSchema } from './tblAgreementsCreateWithoutTblRoyaltyInput.schema';
import { tblAgreementsUncheckedCreateWithoutTblRoyaltyInputObjectSchema as tblAgreementsUncheckedCreateWithoutTblRoyaltyInputObjectSchema } from './tblAgreementsUncheckedCreateWithoutTblRoyaltyInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblAgreementsCreateWithoutTblRoyaltyInputObjectSchema), z.lazy(() => tblAgreementsUncheckedCreateWithoutTblRoyaltyInputObjectSchema)])
}).strict();
export const tblAgreementsCreateOrConnectWithoutTblRoyaltyInputObjectSchema: z.ZodType<Prisma.tblAgreementsCreateOrConnectWithoutTblRoyaltyInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsCreateOrConnectWithoutTblRoyaltyInput>;
export const tblAgreementsCreateOrConnectWithoutTblRoyaltyInputObjectZodSchema = makeSchema();
