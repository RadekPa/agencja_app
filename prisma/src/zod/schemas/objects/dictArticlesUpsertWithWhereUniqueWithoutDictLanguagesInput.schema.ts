import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictArticlesWhereUniqueInputObjectSchema as dictArticlesWhereUniqueInputObjectSchema } from './dictArticlesWhereUniqueInput.schema';
import { dictArticlesUpdateWithoutDictLanguagesInputObjectSchema as dictArticlesUpdateWithoutDictLanguagesInputObjectSchema } from './dictArticlesUpdateWithoutDictLanguagesInput.schema';
import { dictArticlesUncheckedUpdateWithoutDictLanguagesInputObjectSchema as dictArticlesUncheckedUpdateWithoutDictLanguagesInputObjectSchema } from './dictArticlesUncheckedUpdateWithoutDictLanguagesInput.schema';
import { dictArticlesCreateWithoutDictLanguagesInputObjectSchema as dictArticlesCreateWithoutDictLanguagesInputObjectSchema } from './dictArticlesCreateWithoutDictLanguagesInput.schema';
import { dictArticlesUncheckedCreateWithoutDictLanguagesInputObjectSchema as dictArticlesUncheckedCreateWithoutDictLanguagesInputObjectSchema } from './dictArticlesUncheckedCreateWithoutDictLanguagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictArticlesWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => dictArticlesUpdateWithoutDictLanguagesInputObjectSchema), z.lazy(() => dictArticlesUncheckedUpdateWithoutDictLanguagesInputObjectSchema)]),
  create: z.union([z.lazy(() => dictArticlesCreateWithoutDictLanguagesInputObjectSchema), z.lazy(() => dictArticlesUncheckedCreateWithoutDictLanguagesInputObjectSchema)])
}).strict();
export const dictArticlesUpsertWithWhereUniqueWithoutDictLanguagesInputObjectSchema: z.ZodType<Prisma.dictArticlesUpsertWithWhereUniqueWithoutDictLanguagesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictArticlesUpsertWithWhereUniqueWithoutDictLanguagesInput>;
export const dictArticlesUpsertWithWhereUniqueWithoutDictLanguagesInputObjectZodSchema = makeSchema();
