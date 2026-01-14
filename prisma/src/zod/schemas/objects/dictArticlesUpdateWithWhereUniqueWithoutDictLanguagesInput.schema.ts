import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictArticlesWhereUniqueInputObjectSchema as dictArticlesWhereUniqueInputObjectSchema } from './dictArticlesWhereUniqueInput.schema';
import { dictArticlesUpdateWithoutDictLanguagesInputObjectSchema as dictArticlesUpdateWithoutDictLanguagesInputObjectSchema } from './dictArticlesUpdateWithoutDictLanguagesInput.schema';
import { dictArticlesUncheckedUpdateWithoutDictLanguagesInputObjectSchema as dictArticlesUncheckedUpdateWithoutDictLanguagesInputObjectSchema } from './dictArticlesUncheckedUpdateWithoutDictLanguagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictArticlesWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => dictArticlesUpdateWithoutDictLanguagesInputObjectSchema), z.lazy(() => dictArticlesUncheckedUpdateWithoutDictLanguagesInputObjectSchema)])
}).strict();
export const dictArticlesUpdateWithWhereUniqueWithoutDictLanguagesInputObjectSchema: z.ZodType<Prisma.dictArticlesUpdateWithWhereUniqueWithoutDictLanguagesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictArticlesUpdateWithWhereUniqueWithoutDictLanguagesInput>;
export const dictArticlesUpdateWithWhereUniqueWithoutDictLanguagesInputObjectZodSchema = makeSchema();
