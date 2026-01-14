import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitSubClassCreateWithoutDictTitMainClassInputObjectSchema as dictTitSubClassCreateWithoutDictTitMainClassInputObjectSchema } from './dictTitSubClassCreateWithoutDictTitMainClassInput.schema';
import { dictTitSubClassUncheckedCreateWithoutDictTitMainClassInputObjectSchema as dictTitSubClassUncheckedCreateWithoutDictTitMainClassInputObjectSchema } from './dictTitSubClassUncheckedCreateWithoutDictTitMainClassInput.schema';
import { dictTitSubClassCreateOrConnectWithoutDictTitMainClassInputObjectSchema as dictTitSubClassCreateOrConnectWithoutDictTitMainClassInputObjectSchema } from './dictTitSubClassCreateOrConnectWithoutDictTitMainClassInput.schema';
import { dictTitSubClassUpsertWithWhereUniqueWithoutDictTitMainClassInputObjectSchema as dictTitSubClassUpsertWithWhereUniqueWithoutDictTitMainClassInputObjectSchema } from './dictTitSubClassUpsertWithWhereUniqueWithoutDictTitMainClassInput.schema';
import { dictTitSubClassCreateManyDictTitMainClassInputEnvelopeObjectSchema as dictTitSubClassCreateManyDictTitMainClassInputEnvelopeObjectSchema } from './dictTitSubClassCreateManyDictTitMainClassInputEnvelope.schema';
import { dictTitSubClassWhereUniqueInputObjectSchema as dictTitSubClassWhereUniqueInputObjectSchema } from './dictTitSubClassWhereUniqueInput.schema';
import { dictTitSubClassUpdateWithWhereUniqueWithoutDictTitMainClassInputObjectSchema as dictTitSubClassUpdateWithWhereUniqueWithoutDictTitMainClassInputObjectSchema } from './dictTitSubClassUpdateWithWhereUniqueWithoutDictTitMainClassInput.schema';
import { dictTitSubClassUpdateManyWithWhereWithoutDictTitMainClassInputObjectSchema as dictTitSubClassUpdateManyWithWhereWithoutDictTitMainClassInputObjectSchema } from './dictTitSubClassUpdateManyWithWhereWithoutDictTitMainClassInput.schema';
import { dictTitSubClassScalarWhereInputObjectSchema as dictTitSubClassScalarWhereInputObjectSchema } from './dictTitSubClassScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictTitSubClassCreateWithoutDictTitMainClassInputObjectSchema), z.lazy(() => dictTitSubClassCreateWithoutDictTitMainClassInputObjectSchema).array(), z.lazy(() => dictTitSubClassUncheckedCreateWithoutDictTitMainClassInputObjectSchema), z.lazy(() => dictTitSubClassUncheckedCreateWithoutDictTitMainClassInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => dictTitSubClassCreateOrConnectWithoutDictTitMainClassInputObjectSchema), z.lazy(() => dictTitSubClassCreateOrConnectWithoutDictTitMainClassInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => dictTitSubClassUpsertWithWhereUniqueWithoutDictTitMainClassInputObjectSchema), z.lazy(() => dictTitSubClassUpsertWithWhereUniqueWithoutDictTitMainClassInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => dictTitSubClassCreateManyDictTitMainClassInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => dictTitSubClassWhereUniqueInputObjectSchema), z.lazy(() => dictTitSubClassWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => dictTitSubClassWhereUniqueInputObjectSchema), z.lazy(() => dictTitSubClassWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => dictTitSubClassWhereUniqueInputObjectSchema), z.lazy(() => dictTitSubClassWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => dictTitSubClassWhereUniqueInputObjectSchema), z.lazy(() => dictTitSubClassWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => dictTitSubClassUpdateWithWhereUniqueWithoutDictTitMainClassInputObjectSchema), z.lazy(() => dictTitSubClassUpdateWithWhereUniqueWithoutDictTitMainClassInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => dictTitSubClassUpdateManyWithWhereWithoutDictTitMainClassInputObjectSchema), z.lazy(() => dictTitSubClassUpdateManyWithWhereWithoutDictTitMainClassInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => dictTitSubClassScalarWhereInputObjectSchema), z.lazy(() => dictTitSubClassScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const dictTitSubClassUncheckedUpdateManyWithoutDictTitMainClassNestedInputObjectSchema: z.ZodType<Prisma.dictTitSubClassUncheckedUpdateManyWithoutDictTitMainClassNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitSubClassUncheckedUpdateManyWithoutDictTitMainClassNestedInput>;
export const dictTitSubClassUncheckedUpdateManyWithoutDictTitMainClassNestedInputObjectZodSchema = makeSchema();
