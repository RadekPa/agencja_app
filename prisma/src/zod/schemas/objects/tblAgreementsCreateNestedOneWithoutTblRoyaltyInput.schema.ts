import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsCreateWithoutTblRoyaltyInputObjectSchema as tblAgreementsCreateWithoutTblRoyaltyInputObjectSchema } from './tblAgreementsCreateWithoutTblRoyaltyInput.schema';
import { tblAgreementsUncheckedCreateWithoutTblRoyaltyInputObjectSchema as tblAgreementsUncheckedCreateWithoutTblRoyaltyInputObjectSchema } from './tblAgreementsUncheckedCreateWithoutTblRoyaltyInput.schema';
import { tblAgreementsCreateOrConnectWithoutTblRoyaltyInputObjectSchema as tblAgreementsCreateOrConnectWithoutTblRoyaltyInputObjectSchema } from './tblAgreementsCreateOrConnectWithoutTblRoyaltyInput.schema';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './tblAgreementsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblAgreementsCreateWithoutTblRoyaltyInputObjectSchema), z.lazy(() => tblAgreementsUncheckedCreateWithoutTblRoyaltyInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblAgreementsCreateOrConnectWithoutTblRoyaltyInputObjectSchema).optional(),
  connect: z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema).optional()
}).strict();
export const tblAgreementsCreateNestedOneWithoutTblRoyaltyInputObjectSchema: z.ZodType<Prisma.tblAgreementsCreateNestedOneWithoutTblRoyaltyInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsCreateNestedOneWithoutTblRoyaltyInput>;
export const tblAgreementsCreateNestedOneWithoutTblRoyaltyInputObjectZodSchema = makeSchema();
