import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictRoyTypeCreateWithoutTblAgrRightsInputObjectSchema as dictRoyTypeCreateWithoutTblAgrRightsInputObjectSchema } from './dictRoyTypeCreateWithoutTblAgrRightsInput.schema';
import { dictRoyTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema as dictRoyTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema } from './dictRoyTypeUncheckedCreateWithoutTblAgrRightsInput.schema';
import { dictRoyTypeCreateOrConnectWithoutTblAgrRightsInputObjectSchema as dictRoyTypeCreateOrConnectWithoutTblAgrRightsInputObjectSchema } from './dictRoyTypeCreateOrConnectWithoutTblAgrRightsInput.schema';
import { dictRoyTypeUpsertWithWhereUniqueWithoutTblAgrRightsInputObjectSchema as dictRoyTypeUpsertWithWhereUniqueWithoutTblAgrRightsInputObjectSchema } from './dictRoyTypeUpsertWithWhereUniqueWithoutTblAgrRightsInput.schema';
import { dictRoyTypeCreateManyTblAgrRightsInputEnvelopeObjectSchema as dictRoyTypeCreateManyTblAgrRightsInputEnvelopeObjectSchema } from './dictRoyTypeCreateManyTblAgrRightsInputEnvelope.schema';
import { dictRoyTypeWhereUniqueInputObjectSchema as dictRoyTypeWhereUniqueInputObjectSchema } from './dictRoyTypeWhereUniqueInput.schema';
import { dictRoyTypeUpdateWithWhereUniqueWithoutTblAgrRightsInputObjectSchema as dictRoyTypeUpdateWithWhereUniqueWithoutTblAgrRightsInputObjectSchema } from './dictRoyTypeUpdateWithWhereUniqueWithoutTblAgrRightsInput.schema';
import { dictRoyTypeUpdateManyWithWhereWithoutTblAgrRightsInputObjectSchema as dictRoyTypeUpdateManyWithWhereWithoutTblAgrRightsInputObjectSchema } from './dictRoyTypeUpdateManyWithWhereWithoutTblAgrRightsInput.schema';
import { dictRoyTypeScalarWhereInputObjectSchema as dictRoyTypeScalarWhereInputObjectSchema } from './dictRoyTypeScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictRoyTypeCreateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictRoyTypeCreateWithoutTblAgrRightsInputObjectSchema).array(), z.lazy(() => dictRoyTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictRoyTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => dictRoyTypeCreateOrConnectWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictRoyTypeCreateOrConnectWithoutTblAgrRightsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => dictRoyTypeUpsertWithWhereUniqueWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictRoyTypeUpsertWithWhereUniqueWithoutTblAgrRightsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => dictRoyTypeCreateManyTblAgrRightsInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => dictRoyTypeWhereUniqueInputObjectSchema), z.lazy(() => dictRoyTypeWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => dictRoyTypeWhereUniqueInputObjectSchema), z.lazy(() => dictRoyTypeWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => dictRoyTypeWhereUniqueInputObjectSchema), z.lazy(() => dictRoyTypeWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => dictRoyTypeWhereUniqueInputObjectSchema), z.lazy(() => dictRoyTypeWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => dictRoyTypeUpdateWithWhereUniqueWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictRoyTypeUpdateWithWhereUniqueWithoutTblAgrRightsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => dictRoyTypeUpdateManyWithWhereWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictRoyTypeUpdateManyWithWhereWithoutTblAgrRightsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => dictRoyTypeScalarWhereInputObjectSchema), z.lazy(() => dictRoyTypeScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const dictRoyTypeUncheckedUpdateManyWithoutTblAgrRightsNestedInputObjectSchema: z.ZodType<Prisma.dictRoyTypeUncheckedUpdateManyWithoutTblAgrRightsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyTypeUncheckedUpdateManyWithoutTblAgrRightsNestedInput>;
export const dictRoyTypeUncheckedUpdateManyWithoutTblAgrRightsNestedInputObjectZodSchema = makeSchema();
