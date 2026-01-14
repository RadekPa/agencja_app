import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblRoyRatesCreateWithoutTblAgrRightsInputObjectSchema as tblRoyRatesCreateWithoutTblAgrRightsInputObjectSchema } from './tblRoyRatesCreateWithoutTblAgrRightsInput.schema';
import { tblRoyRatesUncheckedCreateWithoutTblAgrRightsInputObjectSchema as tblRoyRatesUncheckedCreateWithoutTblAgrRightsInputObjectSchema } from './tblRoyRatesUncheckedCreateWithoutTblAgrRightsInput.schema';
import { tblRoyRatesCreateOrConnectWithoutTblAgrRightsInputObjectSchema as tblRoyRatesCreateOrConnectWithoutTblAgrRightsInputObjectSchema } from './tblRoyRatesCreateOrConnectWithoutTblAgrRightsInput.schema';
import { tblRoyRatesCreateManyTblAgrRightsInputEnvelopeObjectSchema as tblRoyRatesCreateManyTblAgrRightsInputEnvelopeObjectSchema } from './tblRoyRatesCreateManyTblAgrRightsInputEnvelope.schema';
import { tblRoyRatesWhereUniqueInputObjectSchema as tblRoyRatesWhereUniqueInputObjectSchema } from './tblRoyRatesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblRoyRatesCreateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => tblRoyRatesCreateWithoutTblAgrRightsInputObjectSchema).array(), z.lazy(() => tblRoyRatesUncheckedCreateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => tblRoyRatesUncheckedCreateWithoutTblAgrRightsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblRoyRatesCreateOrConnectWithoutTblAgrRightsInputObjectSchema), z.lazy(() => tblRoyRatesCreateOrConnectWithoutTblAgrRightsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblRoyRatesCreateManyTblAgrRightsInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblRoyRatesWhereUniqueInputObjectSchema), z.lazy(() => tblRoyRatesWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblRoyRatesUncheckedCreateNestedManyWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.tblRoyRatesUncheckedCreateNestedManyWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblRoyRatesUncheckedCreateNestedManyWithoutTblAgrRightsInput>;
export const tblRoyRatesUncheckedCreateNestedManyWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
