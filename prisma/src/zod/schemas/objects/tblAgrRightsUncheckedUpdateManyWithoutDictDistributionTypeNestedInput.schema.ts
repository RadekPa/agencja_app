import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsCreateWithoutDictDistributionTypeInputObjectSchema as tblAgrRightsCreateWithoutDictDistributionTypeInputObjectSchema } from './tblAgrRightsCreateWithoutDictDistributionTypeInput.schema';
import { tblAgrRightsUncheckedCreateWithoutDictDistributionTypeInputObjectSchema as tblAgrRightsUncheckedCreateWithoutDictDistributionTypeInputObjectSchema } from './tblAgrRightsUncheckedCreateWithoutDictDistributionTypeInput.schema';
import { tblAgrRightsCreateOrConnectWithoutDictDistributionTypeInputObjectSchema as tblAgrRightsCreateOrConnectWithoutDictDistributionTypeInputObjectSchema } from './tblAgrRightsCreateOrConnectWithoutDictDistributionTypeInput.schema';
import { tblAgrRightsUpsertWithWhereUniqueWithoutDictDistributionTypeInputObjectSchema as tblAgrRightsUpsertWithWhereUniqueWithoutDictDistributionTypeInputObjectSchema } from './tblAgrRightsUpsertWithWhereUniqueWithoutDictDistributionTypeInput.schema';
import { tblAgrRightsCreateManyDictDistributionTypeInputEnvelopeObjectSchema as tblAgrRightsCreateManyDictDistributionTypeInputEnvelopeObjectSchema } from './tblAgrRightsCreateManyDictDistributionTypeInputEnvelope.schema';
import { tblAgrRightsWhereUniqueInputObjectSchema as tblAgrRightsWhereUniqueInputObjectSchema } from './tblAgrRightsWhereUniqueInput.schema';
import { tblAgrRightsUpdateWithWhereUniqueWithoutDictDistributionTypeInputObjectSchema as tblAgrRightsUpdateWithWhereUniqueWithoutDictDistributionTypeInputObjectSchema } from './tblAgrRightsUpdateWithWhereUniqueWithoutDictDistributionTypeInput.schema';
import { tblAgrRightsUpdateManyWithWhereWithoutDictDistributionTypeInputObjectSchema as tblAgrRightsUpdateManyWithWhereWithoutDictDistributionTypeInputObjectSchema } from './tblAgrRightsUpdateManyWithWhereWithoutDictDistributionTypeInput.schema';
import { tblAgrRightsScalarWhereInputObjectSchema as tblAgrRightsScalarWhereInputObjectSchema } from './tblAgrRightsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblAgrRightsCreateWithoutDictDistributionTypeInputObjectSchema), z.lazy(() => tblAgrRightsCreateWithoutDictDistributionTypeInputObjectSchema).array(), z.lazy(() => tblAgrRightsUncheckedCreateWithoutDictDistributionTypeInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedCreateWithoutDictDistributionTypeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblAgrRightsCreateOrConnectWithoutDictDistributionTypeInputObjectSchema), z.lazy(() => tblAgrRightsCreateOrConnectWithoutDictDistributionTypeInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblAgrRightsUpsertWithWhereUniqueWithoutDictDistributionTypeInputObjectSchema), z.lazy(() => tblAgrRightsUpsertWithWhereUniqueWithoutDictDistributionTypeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblAgrRightsCreateManyDictDistributionTypeInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema), z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema), z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema), z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema), z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblAgrRightsUpdateWithWhereUniqueWithoutDictDistributionTypeInputObjectSchema), z.lazy(() => tblAgrRightsUpdateWithWhereUniqueWithoutDictDistributionTypeInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblAgrRightsUpdateManyWithWhereWithoutDictDistributionTypeInputObjectSchema), z.lazy(() => tblAgrRightsUpdateManyWithWhereWithoutDictDistributionTypeInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblAgrRightsScalarWhereInputObjectSchema), z.lazy(() => tblAgrRightsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblAgrRightsUncheckedUpdateManyWithoutDictDistributionTypeNestedInputObjectSchema: z.ZodType<Prisma.tblAgrRightsUncheckedUpdateManyWithoutDictDistributionTypeNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsUncheckedUpdateManyWithoutDictDistributionTypeNestedInput>;
export const tblAgrRightsUncheckedUpdateManyWithoutDictDistributionTypeNestedInputObjectZodSchema = makeSchema();
