import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblRoyRatesCreateWithoutTblAgrRightsInputObjectSchema as tblRoyRatesCreateWithoutTblAgrRightsInputObjectSchema } from './tblRoyRatesCreateWithoutTblAgrRightsInput.schema';
import { tblRoyRatesUncheckedCreateWithoutTblAgrRightsInputObjectSchema as tblRoyRatesUncheckedCreateWithoutTblAgrRightsInputObjectSchema } from './tblRoyRatesUncheckedCreateWithoutTblAgrRightsInput.schema';
import { tblRoyRatesCreateOrConnectWithoutTblAgrRightsInputObjectSchema as tblRoyRatesCreateOrConnectWithoutTblAgrRightsInputObjectSchema } from './tblRoyRatesCreateOrConnectWithoutTblAgrRightsInput.schema';
import { tblRoyRatesUpsertWithWhereUniqueWithoutTblAgrRightsInputObjectSchema as tblRoyRatesUpsertWithWhereUniqueWithoutTblAgrRightsInputObjectSchema } from './tblRoyRatesUpsertWithWhereUniqueWithoutTblAgrRightsInput.schema';
import { tblRoyRatesCreateManyTblAgrRightsInputEnvelopeObjectSchema as tblRoyRatesCreateManyTblAgrRightsInputEnvelopeObjectSchema } from './tblRoyRatesCreateManyTblAgrRightsInputEnvelope.schema';
import { tblRoyRatesWhereUniqueInputObjectSchema as tblRoyRatesWhereUniqueInputObjectSchema } from './tblRoyRatesWhereUniqueInput.schema';
import { tblRoyRatesUpdateWithWhereUniqueWithoutTblAgrRightsInputObjectSchema as tblRoyRatesUpdateWithWhereUniqueWithoutTblAgrRightsInputObjectSchema } from './tblRoyRatesUpdateWithWhereUniqueWithoutTblAgrRightsInput.schema';
import { tblRoyRatesUpdateManyWithWhereWithoutTblAgrRightsInputObjectSchema as tblRoyRatesUpdateManyWithWhereWithoutTblAgrRightsInputObjectSchema } from './tblRoyRatesUpdateManyWithWhereWithoutTblAgrRightsInput.schema';
import { tblRoyRatesScalarWhereInputObjectSchema as tblRoyRatesScalarWhereInputObjectSchema } from './tblRoyRatesScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblRoyRatesCreateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => tblRoyRatesCreateWithoutTblAgrRightsInputObjectSchema).array(), z.lazy(() => tblRoyRatesUncheckedCreateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => tblRoyRatesUncheckedCreateWithoutTblAgrRightsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblRoyRatesCreateOrConnectWithoutTblAgrRightsInputObjectSchema), z.lazy(() => tblRoyRatesCreateOrConnectWithoutTblAgrRightsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblRoyRatesUpsertWithWhereUniqueWithoutTblAgrRightsInputObjectSchema), z.lazy(() => tblRoyRatesUpsertWithWhereUniqueWithoutTblAgrRightsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblRoyRatesCreateManyTblAgrRightsInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblRoyRatesWhereUniqueInputObjectSchema), z.lazy(() => tblRoyRatesWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblRoyRatesWhereUniqueInputObjectSchema), z.lazy(() => tblRoyRatesWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblRoyRatesWhereUniqueInputObjectSchema), z.lazy(() => tblRoyRatesWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblRoyRatesWhereUniqueInputObjectSchema), z.lazy(() => tblRoyRatesWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblRoyRatesUpdateWithWhereUniqueWithoutTblAgrRightsInputObjectSchema), z.lazy(() => tblRoyRatesUpdateWithWhereUniqueWithoutTblAgrRightsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblRoyRatesUpdateManyWithWhereWithoutTblAgrRightsInputObjectSchema), z.lazy(() => tblRoyRatesUpdateManyWithWhereWithoutTblAgrRightsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblRoyRatesScalarWhereInputObjectSchema), z.lazy(() => tblRoyRatesScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblRoyRatesUncheckedUpdateManyWithoutTblAgrRightsNestedInputObjectSchema: z.ZodType<Prisma.tblRoyRatesUncheckedUpdateManyWithoutTblAgrRightsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblRoyRatesUncheckedUpdateManyWithoutTblAgrRightsNestedInput>;
export const tblRoyRatesUncheckedUpdateManyWithoutTblAgrRightsNestedInputObjectZodSchema = makeSchema();
