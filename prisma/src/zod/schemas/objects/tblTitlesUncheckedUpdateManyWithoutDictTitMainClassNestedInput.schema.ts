import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesCreateWithoutDictTitMainClassInputObjectSchema as tblTitlesCreateWithoutDictTitMainClassInputObjectSchema } from './tblTitlesCreateWithoutDictTitMainClassInput.schema';
import { tblTitlesUncheckedCreateWithoutDictTitMainClassInputObjectSchema as tblTitlesUncheckedCreateWithoutDictTitMainClassInputObjectSchema } from './tblTitlesUncheckedCreateWithoutDictTitMainClassInput.schema';
import { tblTitlesCreateOrConnectWithoutDictTitMainClassInputObjectSchema as tblTitlesCreateOrConnectWithoutDictTitMainClassInputObjectSchema } from './tblTitlesCreateOrConnectWithoutDictTitMainClassInput.schema';
import { tblTitlesUpsertWithWhereUniqueWithoutDictTitMainClassInputObjectSchema as tblTitlesUpsertWithWhereUniqueWithoutDictTitMainClassInputObjectSchema } from './tblTitlesUpsertWithWhereUniqueWithoutDictTitMainClassInput.schema';
import { tblTitlesCreateManyDictTitMainClassInputEnvelopeObjectSchema as tblTitlesCreateManyDictTitMainClassInputEnvelopeObjectSchema } from './tblTitlesCreateManyDictTitMainClassInputEnvelope.schema';
import { tblTitlesWhereUniqueInputObjectSchema as tblTitlesWhereUniqueInputObjectSchema } from './tblTitlesWhereUniqueInput.schema';
import { tblTitlesUpdateWithWhereUniqueWithoutDictTitMainClassInputObjectSchema as tblTitlesUpdateWithWhereUniqueWithoutDictTitMainClassInputObjectSchema } from './tblTitlesUpdateWithWhereUniqueWithoutDictTitMainClassInput.schema';
import { tblTitlesUpdateManyWithWhereWithoutDictTitMainClassInputObjectSchema as tblTitlesUpdateManyWithWhereWithoutDictTitMainClassInputObjectSchema } from './tblTitlesUpdateManyWithWhereWithoutDictTitMainClassInput.schema';
import { tblTitlesScalarWhereInputObjectSchema as tblTitlesScalarWhereInputObjectSchema } from './tblTitlesScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblTitlesCreateWithoutDictTitMainClassInputObjectSchema), z.lazy(() => tblTitlesCreateWithoutDictTitMainClassInputObjectSchema).array(), z.lazy(() => tblTitlesUncheckedCreateWithoutDictTitMainClassInputObjectSchema), z.lazy(() => tblTitlesUncheckedCreateWithoutDictTitMainClassInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblTitlesCreateOrConnectWithoutDictTitMainClassInputObjectSchema), z.lazy(() => tblTitlesCreateOrConnectWithoutDictTitMainClassInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblTitlesUpsertWithWhereUniqueWithoutDictTitMainClassInputObjectSchema), z.lazy(() => tblTitlesUpsertWithWhereUniqueWithoutDictTitMainClassInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblTitlesCreateManyDictTitMainClassInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblTitlesWhereUniqueInputObjectSchema), z.lazy(() => tblTitlesWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblTitlesWhereUniqueInputObjectSchema), z.lazy(() => tblTitlesWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblTitlesWhereUniqueInputObjectSchema), z.lazy(() => tblTitlesWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblTitlesWhereUniqueInputObjectSchema), z.lazy(() => tblTitlesWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblTitlesUpdateWithWhereUniqueWithoutDictTitMainClassInputObjectSchema), z.lazy(() => tblTitlesUpdateWithWhereUniqueWithoutDictTitMainClassInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblTitlesUpdateManyWithWhereWithoutDictTitMainClassInputObjectSchema), z.lazy(() => tblTitlesUpdateManyWithWhereWithoutDictTitMainClassInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblTitlesScalarWhereInputObjectSchema), z.lazy(() => tblTitlesScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblTitlesUncheckedUpdateManyWithoutDictTitMainClassNestedInputObjectSchema: z.ZodType<Prisma.tblTitlesUncheckedUpdateManyWithoutDictTitMainClassNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesUncheckedUpdateManyWithoutDictTitMainClassNestedInput>;
export const tblTitlesUncheckedUpdateManyWithoutDictTitMainClassNestedInputObjectZodSchema = makeSchema();
