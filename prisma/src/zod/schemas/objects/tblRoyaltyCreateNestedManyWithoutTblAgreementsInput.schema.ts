import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblRoyaltyCreateWithoutTblAgreementsInputObjectSchema as tblRoyaltyCreateWithoutTblAgreementsInputObjectSchema } from './tblRoyaltyCreateWithoutTblAgreementsInput.schema';
import { tblRoyaltyUncheckedCreateWithoutTblAgreementsInputObjectSchema as tblRoyaltyUncheckedCreateWithoutTblAgreementsInputObjectSchema } from './tblRoyaltyUncheckedCreateWithoutTblAgreementsInput.schema';
import { tblRoyaltyCreateOrConnectWithoutTblAgreementsInputObjectSchema as tblRoyaltyCreateOrConnectWithoutTblAgreementsInputObjectSchema } from './tblRoyaltyCreateOrConnectWithoutTblAgreementsInput.schema';
import { tblRoyaltyCreateManyTblAgreementsInputEnvelopeObjectSchema as tblRoyaltyCreateManyTblAgreementsInputEnvelopeObjectSchema } from './tblRoyaltyCreateManyTblAgreementsInputEnvelope.schema';
import { tblRoyaltyWhereUniqueInputObjectSchema as tblRoyaltyWhereUniqueInputObjectSchema } from './tblRoyaltyWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblRoyaltyCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblRoyaltyCreateWithoutTblAgreementsInputObjectSchema).array(), z.lazy(() => tblRoyaltyUncheckedCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblRoyaltyUncheckedCreateWithoutTblAgreementsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblRoyaltyCreateOrConnectWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblRoyaltyCreateOrConnectWithoutTblAgreementsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblRoyaltyCreateManyTblAgreementsInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblRoyaltyWhereUniqueInputObjectSchema), z.lazy(() => tblRoyaltyWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblRoyaltyCreateNestedManyWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblRoyaltyCreateNestedManyWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblRoyaltyCreateNestedManyWithoutTblAgreementsInput>;
export const tblRoyaltyCreateNestedManyWithoutTblAgreementsInputObjectZodSchema = makeSchema();
