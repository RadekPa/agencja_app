import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblMailingListsCreateWithoutDictTitSubClassInputObjectSchema as tblMailingListsCreateWithoutDictTitSubClassInputObjectSchema } from './tblMailingListsCreateWithoutDictTitSubClassInput.schema';
import { tblMailingListsUncheckedCreateWithoutDictTitSubClassInputObjectSchema as tblMailingListsUncheckedCreateWithoutDictTitSubClassInputObjectSchema } from './tblMailingListsUncheckedCreateWithoutDictTitSubClassInput.schema';
import { tblMailingListsCreateOrConnectWithoutDictTitSubClassInputObjectSchema as tblMailingListsCreateOrConnectWithoutDictTitSubClassInputObjectSchema } from './tblMailingListsCreateOrConnectWithoutDictTitSubClassInput.schema';
import { tblMailingListsUpsertWithWhereUniqueWithoutDictTitSubClassInputObjectSchema as tblMailingListsUpsertWithWhereUniqueWithoutDictTitSubClassInputObjectSchema } from './tblMailingListsUpsertWithWhereUniqueWithoutDictTitSubClassInput.schema';
import { tblMailingListsCreateManyDictTitSubClassInputEnvelopeObjectSchema as tblMailingListsCreateManyDictTitSubClassInputEnvelopeObjectSchema } from './tblMailingListsCreateManyDictTitSubClassInputEnvelope.schema';
import { tblMailingListsWhereUniqueInputObjectSchema as tblMailingListsWhereUniqueInputObjectSchema } from './tblMailingListsWhereUniqueInput.schema';
import { tblMailingListsUpdateWithWhereUniqueWithoutDictTitSubClassInputObjectSchema as tblMailingListsUpdateWithWhereUniqueWithoutDictTitSubClassInputObjectSchema } from './tblMailingListsUpdateWithWhereUniqueWithoutDictTitSubClassInput.schema';
import { tblMailingListsUpdateManyWithWhereWithoutDictTitSubClassInputObjectSchema as tblMailingListsUpdateManyWithWhereWithoutDictTitSubClassInputObjectSchema } from './tblMailingListsUpdateManyWithWhereWithoutDictTitSubClassInput.schema';
import { tblMailingListsScalarWhereInputObjectSchema as tblMailingListsScalarWhereInputObjectSchema } from './tblMailingListsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblMailingListsCreateWithoutDictTitSubClassInputObjectSchema), z.lazy(() => tblMailingListsCreateWithoutDictTitSubClassInputObjectSchema).array(), z.lazy(() => tblMailingListsUncheckedCreateWithoutDictTitSubClassInputObjectSchema), z.lazy(() => tblMailingListsUncheckedCreateWithoutDictTitSubClassInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblMailingListsCreateOrConnectWithoutDictTitSubClassInputObjectSchema), z.lazy(() => tblMailingListsCreateOrConnectWithoutDictTitSubClassInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblMailingListsUpsertWithWhereUniqueWithoutDictTitSubClassInputObjectSchema), z.lazy(() => tblMailingListsUpsertWithWhereUniqueWithoutDictTitSubClassInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblMailingListsCreateManyDictTitSubClassInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblMailingListsWhereUniqueInputObjectSchema), z.lazy(() => tblMailingListsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblMailingListsWhereUniqueInputObjectSchema), z.lazy(() => tblMailingListsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblMailingListsWhereUniqueInputObjectSchema), z.lazy(() => tblMailingListsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblMailingListsWhereUniqueInputObjectSchema), z.lazy(() => tblMailingListsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblMailingListsUpdateWithWhereUniqueWithoutDictTitSubClassInputObjectSchema), z.lazy(() => tblMailingListsUpdateWithWhereUniqueWithoutDictTitSubClassInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblMailingListsUpdateManyWithWhereWithoutDictTitSubClassInputObjectSchema), z.lazy(() => tblMailingListsUpdateManyWithWhereWithoutDictTitSubClassInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblMailingListsScalarWhereInputObjectSchema), z.lazy(() => tblMailingListsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblMailingListsUncheckedUpdateManyWithoutDictTitSubClassNestedInputObjectSchema: z.ZodType<Prisma.tblMailingListsUncheckedUpdateManyWithoutDictTitSubClassNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsUncheckedUpdateManyWithoutDictTitSubClassNestedInput>;
export const tblMailingListsUncheckedUpdateManyWithoutDictTitSubClassNestedInputObjectZodSchema = makeSchema();
