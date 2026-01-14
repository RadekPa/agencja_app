import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictArticlesWhereUniqueInputObjectSchema as dictArticlesWhereUniqueInputObjectSchema } from './dictArticlesWhereUniqueInput.schema';
import { dictArticlesCreateWithoutDictLanguagesInputObjectSchema as dictArticlesCreateWithoutDictLanguagesInputObjectSchema } from './dictArticlesCreateWithoutDictLanguagesInput.schema';
import { dictArticlesUncheckedCreateWithoutDictLanguagesInputObjectSchema as dictArticlesUncheckedCreateWithoutDictLanguagesInputObjectSchema } from './dictArticlesUncheckedCreateWithoutDictLanguagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictArticlesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => dictArticlesCreateWithoutDictLanguagesInputObjectSchema), z.lazy(() => dictArticlesUncheckedCreateWithoutDictLanguagesInputObjectSchema)])
}).strict();
export const dictArticlesCreateOrConnectWithoutDictLanguagesInputObjectSchema: z.ZodType<Prisma.dictArticlesCreateOrConnectWithoutDictLanguagesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictArticlesCreateOrConnectWithoutDictLanguagesInput>;
export const dictArticlesCreateOrConnectWithoutDictLanguagesInputObjectZodSchema = makeSchema();
