import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsCreateWithoutDictRoyPriceTypeInputObjectSchema as tblAgrRightsCreateWithoutDictRoyPriceTypeInputObjectSchema } from './tblAgrRightsCreateWithoutDictRoyPriceTypeInput.schema';
import { tblAgrRightsUncheckedCreateWithoutDictRoyPriceTypeInputObjectSchema as tblAgrRightsUncheckedCreateWithoutDictRoyPriceTypeInputObjectSchema } from './tblAgrRightsUncheckedCreateWithoutDictRoyPriceTypeInput.schema';
import { tblAgrRightsCreateOrConnectWithoutDictRoyPriceTypeInputObjectSchema as tblAgrRightsCreateOrConnectWithoutDictRoyPriceTypeInputObjectSchema } from './tblAgrRightsCreateOrConnectWithoutDictRoyPriceTypeInput.schema';
import { tblAgrRightsUpsertWithWhereUniqueWithoutDictRoyPriceTypeInputObjectSchema as tblAgrRightsUpsertWithWhereUniqueWithoutDictRoyPriceTypeInputObjectSchema } from './tblAgrRightsUpsertWithWhereUniqueWithoutDictRoyPriceTypeInput.schema';
import { tblAgrRightsCreateManyDictRoyPriceTypeInputEnvelopeObjectSchema as tblAgrRightsCreateManyDictRoyPriceTypeInputEnvelopeObjectSchema } from './tblAgrRightsCreateManyDictRoyPriceTypeInputEnvelope.schema';
import { tblAgrRightsWhereUniqueInputObjectSchema as tblAgrRightsWhereUniqueInputObjectSchema } from './tblAgrRightsWhereUniqueInput.schema';
import { tblAgrRightsUpdateWithWhereUniqueWithoutDictRoyPriceTypeInputObjectSchema as tblAgrRightsUpdateWithWhereUniqueWithoutDictRoyPriceTypeInputObjectSchema } from './tblAgrRightsUpdateWithWhereUniqueWithoutDictRoyPriceTypeInput.schema';
import { tblAgrRightsUpdateManyWithWhereWithoutDictRoyPriceTypeInputObjectSchema as tblAgrRightsUpdateManyWithWhereWithoutDictRoyPriceTypeInputObjectSchema } from './tblAgrRightsUpdateManyWithWhereWithoutDictRoyPriceTypeInput.schema';
import { tblAgrRightsScalarWhereInputObjectSchema as tblAgrRightsScalarWhereInputObjectSchema } from './tblAgrRightsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblAgrRightsCreateWithoutDictRoyPriceTypeInputObjectSchema), z.lazy(() => tblAgrRightsCreateWithoutDictRoyPriceTypeInputObjectSchema).array(), z.lazy(() => tblAgrRightsUncheckedCreateWithoutDictRoyPriceTypeInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedCreateWithoutDictRoyPriceTypeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblAgrRightsCreateOrConnectWithoutDictRoyPriceTypeInputObjectSchema), z.lazy(() => tblAgrRightsCreateOrConnectWithoutDictRoyPriceTypeInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblAgrRightsUpsertWithWhereUniqueWithoutDictRoyPriceTypeInputObjectSchema), z.lazy(() => tblAgrRightsUpsertWithWhereUniqueWithoutDictRoyPriceTypeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblAgrRightsCreateManyDictRoyPriceTypeInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema), z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema), z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema), z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema), z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblAgrRightsUpdateWithWhereUniqueWithoutDictRoyPriceTypeInputObjectSchema), z.lazy(() => tblAgrRightsUpdateWithWhereUniqueWithoutDictRoyPriceTypeInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblAgrRightsUpdateManyWithWhereWithoutDictRoyPriceTypeInputObjectSchema), z.lazy(() => tblAgrRightsUpdateManyWithWhereWithoutDictRoyPriceTypeInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblAgrRightsScalarWhereInputObjectSchema), z.lazy(() => tblAgrRightsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblAgrRightsUncheckedUpdateManyWithoutDictRoyPriceTypeNestedInputObjectSchema: z.ZodType<Prisma.tblAgrRightsUncheckedUpdateManyWithoutDictRoyPriceTypeNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsUncheckedUpdateManyWithoutDictRoyPriceTypeNestedInput>;
export const tblAgrRightsUncheckedUpdateManyWithoutDictRoyPriceTypeNestedInputObjectZodSchema = makeSchema();
