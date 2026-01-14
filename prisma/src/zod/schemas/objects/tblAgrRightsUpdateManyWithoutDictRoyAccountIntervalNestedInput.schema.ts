import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsCreateWithoutDictRoyAccountIntervalInputObjectSchema as tblAgrRightsCreateWithoutDictRoyAccountIntervalInputObjectSchema } from './tblAgrRightsCreateWithoutDictRoyAccountIntervalInput.schema';
import { tblAgrRightsUncheckedCreateWithoutDictRoyAccountIntervalInputObjectSchema as tblAgrRightsUncheckedCreateWithoutDictRoyAccountIntervalInputObjectSchema } from './tblAgrRightsUncheckedCreateWithoutDictRoyAccountIntervalInput.schema';
import { tblAgrRightsCreateOrConnectWithoutDictRoyAccountIntervalInputObjectSchema as tblAgrRightsCreateOrConnectWithoutDictRoyAccountIntervalInputObjectSchema } from './tblAgrRightsCreateOrConnectWithoutDictRoyAccountIntervalInput.schema';
import { tblAgrRightsUpsertWithWhereUniqueWithoutDictRoyAccountIntervalInputObjectSchema as tblAgrRightsUpsertWithWhereUniqueWithoutDictRoyAccountIntervalInputObjectSchema } from './tblAgrRightsUpsertWithWhereUniqueWithoutDictRoyAccountIntervalInput.schema';
import { tblAgrRightsCreateManyDictRoyAccountIntervalInputEnvelopeObjectSchema as tblAgrRightsCreateManyDictRoyAccountIntervalInputEnvelopeObjectSchema } from './tblAgrRightsCreateManyDictRoyAccountIntervalInputEnvelope.schema';
import { tblAgrRightsWhereUniqueInputObjectSchema as tblAgrRightsWhereUniqueInputObjectSchema } from './tblAgrRightsWhereUniqueInput.schema';
import { tblAgrRightsUpdateWithWhereUniqueWithoutDictRoyAccountIntervalInputObjectSchema as tblAgrRightsUpdateWithWhereUniqueWithoutDictRoyAccountIntervalInputObjectSchema } from './tblAgrRightsUpdateWithWhereUniqueWithoutDictRoyAccountIntervalInput.schema';
import { tblAgrRightsUpdateManyWithWhereWithoutDictRoyAccountIntervalInputObjectSchema as tblAgrRightsUpdateManyWithWhereWithoutDictRoyAccountIntervalInputObjectSchema } from './tblAgrRightsUpdateManyWithWhereWithoutDictRoyAccountIntervalInput.schema';
import { tblAgrRightsScalarWhereInputObjectSchema as tblAgrRightsScalarWhereInputObjectSchema } from './tblAgrRightsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblAgrRightsCreateWithoutDictRoyAccountIntervalInputObjectSchema), z.lazy(() => tblAgrRightsCreateWithoutDictRoyAccountIntervalInputObjectSchema).array(), z.lazy(() => tblAgrRightsUncheckedCreateWithoutDictRoyAccountIntervalInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedCreateWithoutDictRoyAccountIntervalInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblAgrRightsCreateOrConnectWithoutDictRoyAccountIntervalInputObjectSchema), z.lazy(() => tblAgrRightsCreateOrConnectWithoutDictRoyAccountIntervalInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblAgrRightsUpsertWithWhereUniqueWithoutDictRoyAccountIntervalInputObjectSchema), z.lazy(() => tblAgrRightsUpsertWithWhereUniqueWithoutDictRoyAccountIntervalInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblAgrRightsCreateManyDictRoyAccountIntervalInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema), z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema), z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema), z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema), z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblAgrRightsUpdateWithWhereUniqueWithoutDictRoyAccountIntervalInputObjectSchema), z.lazy(() => tblAgrRightsUpdateWithWhereUniqueWithoutDictRoyAccountIntervalInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblAgrRightsUpdateManyWithWhereWithoutDictRoyAccountIntervalInputObjectSchema), z.lazy(() => tblAgrRightsUpdateManyWithWhereWithoutDictRoyAccountIntervalInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblAgrRightsScalarWhereInputObjectSchema), z.lazy(() => tblAgrRightsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblAgrRightsUpdateManyWithoutDictRoyAccountIntervalNestedInputObjectSchema: z.ZodType<Prisma.tblAgrRightsUpdateManyWithoutDictRoyAccountIntervalNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsUpdateManyWithoutDictRoyAccountIntervalNestedInput>;
export const tblAgrRightsUpdateManyWithoutDictRoyAccountIntervalNestedInputObjectZodSchema = makeSchema();
