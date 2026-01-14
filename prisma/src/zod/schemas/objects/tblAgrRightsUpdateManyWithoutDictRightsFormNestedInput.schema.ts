import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsCreateWithoutDictRightsFormInputObjectSchema as tblAgrRightsCreateWithoutDictRightsFormInputObjectSchema } from './tblAgrRightsCreateWithoutDictRightsFormInput.schema';
import { tblAgrRightsUncheckedCreateWithoutDictRightsFormInputObjectSchema as tblAgrRightsUncheckedCreateWithoutDictRightsFormInputObjectSchema } from './tblAgrRightsUncheckedCreateWithoutDictRightsFormInput.schema';
import { tblAgrRightsCreateOrConnectWithoutDictRightsFormInputObjectSchema as tblAgrRightsCreateOrConnectWithoutDictRightsFormInputObjectSchema } from './tblAgrRightsCreateOrConnectWithoutDictRightsFormInput.schema';
import { tblAgrRightsUpsertWithWhereUniqueWithoutDictRightsFormInputObjectSchema as tblAgrRightsUpsertWithWhereUniqueWithoutDictRightsFormInputObjectSchema } from './tblAgrRightsUpsertWithWhereUniqueWithoutDictRightsFormInput.schema';
import { tblAgrRightsCreateManyDictRightsFormInputEnvelopeObjectSchema as tblAgrRightsCreateManyDictRightsFormInputEnvelopeObjectSchema } from './tblAgrRightsCreateManyDictRightsFormInputEnvelope.schema';
import { tblAgrRightsWhereUniqueInputObjectSchema as tblAgrRightsWhereUniqueInputObjectSchema } from './tblAgrRightsWhereUniqueInput.schema';
import { tblAgrRightsUpdateWithWhereUniqueWithoutDictRightsFormInputObjectSchema as tblAgrRightsUpdateWithWhereUniqueWithoutDictRightsFormInputObjectSchema } from './tblAgrRightsUpdateWithWhereUniqueWithoutDictRightsFormInput.schema';
import { tblAgrRightsUpdateManyWithWhereWithoutDictRightsFormInputObjectSchema as tblAgrRightsUpdateManyWithWhereWithoutDictRightsFormInputObjectSchema } from './tblAgrRightsUpdateManyWithWhereWithoutDictRightsFormInput.schema';
import { tblAgrRightsScalarWhereInputObjectSchema as tblAgrRightsScalarWhereInputObjectSchema } from './tblAgrRightsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblAgrRightsCreateWithoutDictRightsFormInputObjectSchema), z.lazy(() => tblAgrRightsCreateWithoutDictRightsFormInputObjectSchema).array(), z.lazy(() => tblAgrRightsUncheckedCreateWithoutDictRightsFormInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedCreateWithoutDictRightsFormInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblAgrRightsCreateOrConnectWithoutDictRightsFormInputObjectSchema), z.lazy(() => tblAgrRightsCreateOrConnectWithoutDictRightsFormInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblAgrRightsUpsertWithWhereUniqueWithoutDictRightsFormInputObjectSchema), z.lazy(() => tblAgrRightsUpsertWithWhereUniqueWithoutDictRightsFormInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblAgrRightsCreateManyDictRightsFormInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema), z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema), z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema), z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema), z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblAgrRightsUpdateWithWhereUniqueWithoutDictRightsFormInputObjectSchema), z.lazy(() => tblAgrRightsUpdateWithWhereUniqueWithoutDictRightsFormInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblAgrRightsUpdateManyWithWhereWithoutDictRightsFormInputObjectSchema), z.lazy(() => tblAgrRightsUpdateManyWithWhereWithoutDictRightsFormInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblAgrRightsScalarWhereInputObjectSchema), z.lazy(() => tblAgrRightsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblAgrRightsUpdateManyWithoutDictRightsFormNestedInputObjectSchema: z.ZodType<Prisma.tblAgrRightsUpdateManyWithoutDictRightsFormNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsUpdateManyWithoutDictRightsFormNestedInput>;
export const tblAgrRightsUpdateManyWithoutDictRightsFormNestedInputObjectZodSchema = makeSchema();
