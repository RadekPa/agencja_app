import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustTypesCreateWithoutDictCustTypesInputObjectSchema as tblCustTypesCreateWithoutDictCustTypesInputObjectSchema } from './tblCustTypesCreateWithoutDictCustTypesInput.schema';
import { tblCustTypesUncheckedCreateWithoutDictCustTypesInputObjectSchema as tblCustTypesUncheckedCreateWithoutDictCustTypesInputObjectSchema } from './tblCustTypesUncheckedCreateWithoutDictCustTypesInput.schema';
import { tblCustTypesCreateOrConnectWithoutDictCustTypesInputObjectSchema as tblCustTypesCreateOrConnectWithoutDictCustTypesInputObjectSchema } from './tblCustTypesCreateOrConnectWithoutDictCustTypesInput.schema';
import { tblCustTypesUpsertWithWhereUniqueWithoutDictCustTypesInputObjectSchema as tblCustTypesUpsertWithWhereUniqueWithoutDictCustTypesInputObjectSchema } from './tblCustTypesUpsertWithWhereUniqueWithoutDictCustTypesInput.schema';
import { tblCustTypesCreateManyDictCustTypesInputEnvelopeObjectSchema as tblCustTypesCreateManyDictCustTypesInputEnvelopeObjectSchema } from './tblCustTypesCreateManyDictCustTypesInputEnvelope.schema';
import { tblCustTypesWhereUniqueInputObjectSchema as tblCustTypesWhereUniqueInputObjectSchema } from './tblCustTypesWhereUniqueInput.schema';
import { tblCustTypesUpdateWithWhereUniqueWithoutDictCustTypesInputObjectSchema as tblCustTypesUpdateWithWhereUniqueWithoutDictCustTypesInputObjectSchema } from './tblCustTypesUpdateWithWhereUniqueWithoutDictCustTypesInput.schema';
import { tblCustTypesUpdateManyWithWhereWithoutDictCustTypesInputObjectSchema as tblCustTypesUpdateManyWithWhereWithoutDictCustTypesInputObjectSchema } from './tblCustTypesUpdateManyWithWhereWithoutDictCustTypesInput.schema';
import { tblCustTypesScalarWhereInputObjectSchema as tblCustTypesScalarWhereInputObjectSchema } from './tblCustTypesScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblCustTypesCreateWithoutDictCustTypesInputObjectSchema), z.lazy(() => tblCustTypesCreateWithoutDictCustTypesInputObjectSchema).array(), z.lazy(() => tblCustTypesUncheckedCreateWithoutDictCustTypesInputObjectSchema), z.lazy(() => tblCustTypesUncheckedCreateWithoutDictCustTypesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblCustTypesCreateOrConnectWithoutDictCustTypesInputObjectSchema), z.lazy(() => tblCustTypesCreateOrConnectWithoutDictCustTypesInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblCustTypesUpsertWithWhereUniqueWithoutDictCustTypesInputObjectSchema), z.lazy(() => tblCustTypesUpsertWithWhereUniqueWithoutDictCustTypesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblCustTypesCreateManyDictCustTypesInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblCustTypesWhereUniqueInputObjectSchema), z.lazy(() => tblCustTypesWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblCustTypesWhereUniqueInputObjectSchema), z.lazy(() => tblCustTypesWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblCustTypesWhereUniqueInputObjectSchema), z.lazy(() => tblCustTypesWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblCustTypesWhereUniqueInputObjectSchema), z.lazy(() => tblCustTypesWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblCustTypesUpdateWithWhereUniqueWithoutDictCustTypesInputObjectSchema), z.lazy(() => tblCustTypesUpdateWithWhereUniqueWithoutDictCustTypesInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblCustTypesUpdateManyWithWhereWithoutDictCustTypesInputObjectSchema), z.lazy(() => tblCustTypesUpdateManyWithWhereWithoutDictCustTypesInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblCustTypesScalarWhereInputObjectSchema), z.lazy(() => tblCustTypesScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblCustTypesUpdateManyWithoutDictCustTypesNestedInputObjectSchema: z.ZodType<Prisma.tblCustTypesUpdateManyWithoutDictCustTypesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustTypesUpdateManyWithoutDictCustTypesNestedInput>;
export const tblCustTypesUpdateManyWithoutDictCustTypesNestedInputObjectZodSchema = makeSchema();
