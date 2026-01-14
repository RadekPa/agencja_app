import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictArticlesCreateWithoutDictLanguagesInputObjectSchema as dictArticlesCreateWithoutDictLanguagesInputObjectSchema } from './dictArticlesCreateWithoutDictLanguagesInput.schema';
import { dictArticlesUncheckedCreateWithoutDictLanguagesInputObjectSchema as dictArticlesUncheckedCreateWithoutDictLanguagesInputObjectSchema } from './dictArticlesUncheckedCreateWithoutDictLanguagesInput.schema';
import { dictArticlesCreateOrConnectWithoutDictLanguagesInputObjectSchema as dictArticlesCreateOrConnectWithoutDictLanguagesInputObjectSchema } from './dictArticlesCreateOrConnectWithoutDictLanguagesInput.schema';
import { dictArticlesUpsertWithWhereUniqueWithoutDictLanguagesInputObjectSchema as dictArticlesUpsertWithWhereUniqueWithoutDictLanguagesInputObjectSchema } from './dictArticlesUpsertWithWhereUniqueWithoutDictLanguagesInput.schema';
import { dictArticlesCreateManyDictLanguagesInputEnvelopeObjectSchema as dictArticlesCreateManyDictLanguagesInputEnvelopeObjectSchema } from './dictArticlesCreateManyDictLanguagesInputEnvelope.schema';
import { dictArticlesWhereUniqueInputObjectSchema as dictArticlesWhereUniqueInputObjectSchema } from './dictArticlesWhereUniqueInput.schema';
import { dictArticlesUpdateWithWhereUniqueWithoutDictLanguagesInputObjectSchema as dictArticlesUpdateWithWhereUniqueWithoutDictLanguagesInputObjectSchema } from './dictArticlesUpdateWithWhereUniqueWithoutDictLanguagesInput.schema';
import { dictArticlesUpdateManyWithWhereWithoutDictLanguagesInputObjectSchema as dictArticlesUpdateManyWithWhereWithoutDictLanguagesInputObjectSchema } from './dictArticlesUpdateManyWithWhereWithoutDictLanguagesInput.schema';
import { dictArticlesScalarWhereInputObjectSchema as dictArticlesScalarWhereInputObjectSchema } from './dictArticlesScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictArticlesCreateWithoutDictLanguagesInputObjectSchema), z.lazy(() => dictArticlesCreateWithoutDictLanguagesInputObjectSchema).array(), z.lazy(() => dictArticlesUncheckedCreateWithoutDictLanguagesInputObjectSchema), z.lazy(() => dictArticlesUncheckedCreateWithoutDictLanguagesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => dictArticlesCreateOrConnectWithoutDictLanguagesInputObjectSchema), z.lazy(() => dictArticlesCreateOrConnectWithoutDictLanguagesInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => dictArticlesUpsertWithWhereUniqueWithoutDictLanguagesInputObjectSchema), z.lazy(() => dictArticlesUpsertWithWhereUniqueWithoutDictLanguagesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => dictArticlesCreateManyDictLanguagesInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => dictArticlesWhereUniqueInputObjectSchema), z.lazy(() => dictArticlesWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => dictArticlesWhereUniqueInputObjectSchema), z.lazy(() => dictArticlesWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => dictArticlesWhereUniqueInputObjectSchema), z.lazy(() => dictArticlesWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => dictArticlesWhereUniqueInputObjectSchema), z.lazy(() => dictArticlesWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => dictArticlesUpdateWithWhereUniqueWithoutDictLanguagesInputObjectSchema), z.lazy(() => dictArticlesUpdateWithWhereUniqueWithoutDictLanguagesInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => dictArticlesUpdateManyWithWhereWithoutDictLanguagesInputObjectSchema), z.lazy(() => dictArticlesUpdateManyWithWhereWithoutDictLanguagesInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => dictArticlesScalarWhereInputObjectSchema), z.lazy(() => dictArticlesScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const dictArticlesUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema: z.ZodType<Prisma.dictArticlesUncheckedUpdateManyWithoutDictLanguagesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.dictArticlesUncheckedUpdateManyWithoutDictLanguagesNestedInput>;
export const dictArticlesUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectZodSchema = makeSchema();
