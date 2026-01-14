import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblMailingListsCreateWithoutDictTitMainClassInputObjectSchema as tblMailingListsCreateWithoutDictTitMainClassInputObjectSchema } from './tblMailingListsCreateWithoutDictTitMainClassInput.schema';
import { tblMailingListsUncheckedCreateWithoutDictTitMainClassInputObjectSchema as tblMailingListsUncheckedCreateWithoutDictTitMainClassInputObjectSchema } from './tblMailingListsUncheckedCreateWithoutDictTitMainClassInput.schema';
import { tblMailingListsCreateOrConnectWithoutDictTitMainClassInputObjectSchema as tblMailingListsCreateOrConnectWithoutDictTitMainClassInputObjectSchema } from './tblMailingListsCreateOrConnectWithoutDictTitMainClassInput.schema';
import { tblMailingListsUpsertWithWhereUniqueWithoutDictTitMainClassInputObjectSchema as tblMailingListsUpsertWithWhereUniqueWithoutDictTitMainClassInputObjectSchema } from './tblMailingListsUpsertWithWhereUniqueWithoutDictTitMainClassInput.schema';
import { tblMailingListsCreateManyDictTitMainClassInputEnvelopeObjectSchema as tblMailingListsCreateManyDictTitMainClassInputEnvelopeObjectSchema } from './tblMailingListsCreateManyDictTitMainClassInputEnvelope.schema';
import { tblMailingListsWhereUniqueInputObjectSchema as tblMailingListsWhereUniqueInputObjectSchema } from './tblMailingListsWhereUniqueInput.schema';
import { tblMailingListsUpdateWithWhereUniqueWithoutDictTitMainClassInputObjectSchema as tblMailingListsUpdateWithWhereUniqueWithoutDictTitMainClassInputObjectSchema } from './tblMailingListsUpdateWithWhereUniqueWithoutDictTitMainClassInput.schema';
import { tblMailingListsUpdateManyWithWhereWithoutDictTitMainClassInputObjectSchema as tblMailingListsUpdateManyWithWhereWithoutDictTitMainClassInputObjectSchema } from './tblMailingListsUpdateManyWithWhereWithoutDictTitMainClassInput.schema';
import { tblMailingListsScalarWhereInputObjectSchema as tblMailingListsScalarWhereInputObjectSchema } from './tblMailingListsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblMailingListsCreateWithoutDictTitMainClassInputObjectSchema), z.lazy(() => tblMailingListsCreateWithoutDictTitMainClassInputObjectSchema).array(), z.lazy(() => tblMailingListsUncheckedCreateWithoutDictTitMainClassInputObjectSchema), z.lazy(() => tblMailingListsUncheckedCreateWithoutDictTitMainClassInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblMailingListsCreateOrConnectWithoutDictTitMainClassInputObjectSchema), z.lazy(() => tblMailingListsCreateOrConnectWithoutDictTitMainClassInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblMailingListsUpsertWithWhereUniqueWithoutDictTitMainClassInputObjectSchema), z.lazy(() => tblMailingListsUpsertWithWhereUniqueWithoutDictTitMainClassInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblMailingListsCreateManyDictTitMainClassInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblMailingListsWhereUniqueInputObjectSchema), z.lazy(() => tblMailingListsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblMailingListsWhereUniqueInputObjectSchema), z.lazy(() => tblMailingListsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblMailingListsWhereUniqueInputObjectSchema), z.lazy(() => tblMailingListsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblMailingListsWhereUniqueInputObjectSchema), z.lazy(() => tblMailingListsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblMailingListsUpdateWithWhereUniqueWithoutDictTitMainClassInputObjectSchema), z.lazy(() => tblMailingListsUpdateWithWhereUniqueWithoutDictTitMainClassInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblMailingListsUpdateManyWithWhereWithoutDictTitMainClassInputObjectSchema), z.lazy(() => tblMailingListsUpdateManyWithWhereWithoutDictTitMainClassInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblMailingListsScalarWhereInputObjectSchema), z.lazy(() => tblMailingListsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblMailingListsUpdateManyWithoutDictTitMainClassNestedInputObjectSchema: z.ZodType<Prisma.tblMailingListsUpdateManyWithoutDictTitMainClassNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsUpdateManyWithoutDictTitMainClassNestedInput>;
export const tblMailingListsUpdateManyWithoutDictTitMainClassNestedInputObjectZodSchema = makeSchema();
