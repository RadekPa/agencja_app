import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsCreateWithoutDictPriceTypeInputObjectSchema as tblAgrRightsCreateWithoutDictPriceTypeInputObjectSchema } from './tblAgrRightsCreateWithoutDictPriceTypeInput.schema';
import { tblAgrRightsUncheckedCreateWithoutDictPriceTypeInputObjectSchema as tblAgrRightsUncheckedCreateWithoutDictPriceTypeInputObjectSchema } from './tblAgrRightsUncheckedCreateWithoutDictPriceTypeInput.schema';
import { tblAgrRightsCreateOrConnectWithoutDictPriceTypeInputObjectSchema as tblAgrRightsCreateOrConnectWithoutDictPriceTypeInputObjectSchema } from './tblAgrRightsCreateOrConnectWithoutDictPriceTypeInput.schema';
import { tblAgrRightsUpsertWithWhereUniqueWithoutDictPriceTypeInputObjectSchema as tblAgrRightsUpsertWithWhereUniqueWithoutDictPriceTypeInputObjectSchema } from './tblAgrRightsUpsertWithWhereUniqueWithoutDictPriceTypeInput.schema';
import { tblAgrRightsCreateManyDictPriceTypeInputEnvelopeObjectSchema as tblAgrRightsCreateManyDictPriceTypeInputEnvelopeObjectSchema } from './tblAgrRightsCreateManyDictPriceTypeInputEnvelope.schema';
import { tblAgrRightsWhereUniqueInputObjectSchema as tblAgrRightsWhereUniqueInputObjectSchema } from './tblAgrRightsWhereUniqueInput.schema';
import { tblAgrRightsUpdateWithWhereUniqueWithoutDictPriceTypeInputObjectSchema as tblAgrRightsUpdateWithWhereUniqueWithoutDictPriceTypeInputObjectSchema } from './tblAgrRightsUpdateWithWhereUniqueWithoutDictPriceTypeInput.schema';
import { tblAgrRightsUpdateManyWithWhereWithoutDictPriceTypeInputObjectSchema as tblAgrRightsUpdateManyWithWhereWithoutDictPriceTypeInputObjectSchema } from './tblAgrRightsUpdateManyWithWhereWithoutDictPriceTypeInput.schema';
import { tblAgrRightsScalarWhereInputObjectSchema as tblAgrRightsScalarWhereInputObjectSchema } from './tblAgrRightsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblAgrRightsCreateWithoutDictPriceTypeInputObjectSchema), z.lazy(() => tblAgrRightsCreateWithoutDictPriceTypeInputObjectSchema).array(), z.lazy(() => tblAgrRightsUncheckedCreateWithoutDictPriceTypeInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedCreateWithoutDictPriceTypeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblAgrRightsCreateOrConnectWithoutDictPriceTypeInputObjectSchema), z.lazy(() => tblAgrRightsCreateOrConnectWithoutDictPriceTypeInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblAgrRightsUpsertWithWhereUniqueWithoutDictPriceTypeInputObjectSchema), z.lazy(() => tblAgrRightsUpsertWithWhereUniqueWithoutDictPriceTypeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblAgrRightsCreateManyDictPriceTypeInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema), z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema), z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema), z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema), z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblAgrRightsUpdateWithWhereUniqueWithoutDictPriceTypeInputObjectSchema), z.lazy(() => tblAgrRightsUpdateWithWhereUniqueWithoutDictPriceTypeInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblAgrRightsUpdateManyWithWhereWithoutDictPriceTypeInputObjectSchema), z.lazy(() => tblAgrRightsUpdateManyWithWhereWithoutDictPriceTypeInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblAgrRightsScalarWhereInputObjectSchema), z.lazy(() => tblAgrRightsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblAgrRightsUncheckedUpdateManyWithoutDictPriceTypeNestedInputObjectSchema: z.ZodType<Prisma.tblAgrRightsUncheckedUpdateManyWithoutDictPriceTypeNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsUncheckedUpdateManyWithoutDictPriceTypeNestedInput>;
export const tblAgrRightsUncheckedUpdateManyWithoutDictPriceTypeNestedInputObjectZodSchema = makeSchema();
