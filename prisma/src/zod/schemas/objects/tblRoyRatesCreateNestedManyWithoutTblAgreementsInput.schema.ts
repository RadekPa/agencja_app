import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblRoyRatesCreateWithoutTblAgreementsInputObjectSchema as tblRoyRatesCreateWithoutTblAgreementsInputObjectSchema } from './tblRoyRatesCreateWithoutTblAgreementsInput.schema';
import { tblRoyRatesUncheckedCreateWithoutTblAgreementsInputObjectSchema as tblRoyRatesUncheckedCreateWithoutTblAgreementsInputObjectSchema } from './tblRoyRatesUncheckedCreateWithoutTblAgreementsInput.schema';
import { tblRoyRatesCreateOrConnectWithoutTblAgreementsInputObjectSchema as tblRoyRatesCreateOrConnectWithoutTblAgreementsInputObjectSchema } from './tblRoyRatesCreateOrConnectWithoutTblAgreementsInput.schema';
import { tblRoyRatesCreateManyTblAgreementsInputEnvelopeObjectSchema as tblRoyRatesCreateManyTblAgreementsInputEnvelopeObjectSchema } from './tblRoyRatesCreateManyTblAgreementsInputEnvelope.schema';
import { tblRoyRatesWhereUniqueInputObjectSchema as tblRoyRatesWhereUniqueInputObjectSchema } from './tblRoyRatesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblRoyRatesCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblRoyRatesCreateWithoutTblAgreementsInputObjectSchema).array(), z.lazy(() => tblRoyRatesUncheckedCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblRoyRatesUncheckedCreateWithoutTblAgreementsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblRoyRatesCreateOrConnectWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblRoyRatesCreateOrConnectWithoutTblAgreementsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblRoyRatesCreateManyTblAgreementsInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblRoyRatesWhereUniqueInputObjectSchema), z.lazy(() => tblRoyRatesWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblRoyRatesCreateNestedManyWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblRoyRatesCreateNestedManyWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblRoyRatesCreateNestedManyWithoutTblAgreementsInput>;
export const tblRoyRatesCreateNestedManyWithoutTblAgreementsInputObjectZodSchema = makeSchema();
