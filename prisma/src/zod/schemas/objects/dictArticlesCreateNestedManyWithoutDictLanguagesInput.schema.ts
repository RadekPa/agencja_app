import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictArticlesCreateWithoutDictLanguagesInputObjectSchema as dictArticlesCreateWithoutDictLanguagesInputObjectSchema } from './dictArticlesCreateWithoutDictLanguagesInput.schema';
import { dictArticlesUncheckedCreateWithoutDictLanguagesInputObjectSchema as dictArticlesUncheckedCreateWithoutDictLanguagesInputObjectSchema } from './dictArticlesUncheckedCreateWithoutDictLanguagesInput.schema';
import { dictArticlesCreateOrConnectWithoutDictLanguagesInputObjectSchema as dictArticlesCreateOrConnectWithoutDictLanguagesInputObjectSchema } from './dictArticlesCreateOrConnectWithoutDictLanguagesInput.schema';
import { dictArticlesCreateManyDictLanguagesInputEnvelopeObjectSchema as dictArticlesCreateManyDictLanguagesInputEnvelopeObjectSchema } from './dictArticlesCreateManyDictLanguagesInputEnvelope.schema';
import { dictArticlesWhereUniqueInputObjectSchema as dictArticlesWhereUniqueInputObjectSchema } from './dictArticlesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictArticlesCreateWithoutDictLanguagesInputObjectSchema), z.lazy(() => dictArticlesCreateWithoutDictLanguagesInputObjectSchema).array(), z.lazy(() => dictArticlesUncheckedCreateWithoutDictLanguagesInputObjectSchema), z.lazy(() => dictArticlesUncheckedCreateWithoutDictLanguagesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => dictArticlesCreateOrConnectWithoutDictLanguagesInputObjectSchema), z.lazy(() => dictArticlesCreateOrConnectWithoutDictLanguagesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => dictArticlesCreateManyDictLanguagesInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => dictArticlesWhereUniqueInputObjectSchema), z.lazy(() => dictArticlesWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const dictArticlesCreateNestedManyWithoutDictLanguagesInputObjectSchema: z.ZodType<Prisma.dictArticlesCreateNestedManyWithoutDictLanguagesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictArticlesCreateNestedManyWithoutDictLanguagesInput>;
export const dictArticlesCreateNestedManyWithoutDictLanguagesInputObjectZodSchema = makeSchema();
