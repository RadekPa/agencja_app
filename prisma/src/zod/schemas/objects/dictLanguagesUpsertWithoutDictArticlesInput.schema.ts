import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictLanguagesUpdateWithoutDictArticlesInputObjectSchema as dictLanguagesUpdateWithoutDictArticlesInputObjectSchema } from './dictLanguagesUpdateWithoutDictArticlesInput.schema';
import { dictLanguagesUncheckedUpdateWithoutDictArticlesInputObjectSchema as dictLanguagesUncheckedUpdateWithoutDictArticlesInputObjectSchema } from './dictLanguagesUncheckedUpdateWithoutDictArticlesInput.schema';
import { dictLanguagesCreateWithoutDictArticlesInputObjectSchema as dictLanguagesCreateWithoutDictArticlesInputObjectSchema } from './dictLanguagesCreateWithoutDictArticlesInput.schema';
import { dictLanguagesUncheckedCreateWithoutDictArticlesInputObjectSchema as dictLanguagesUncheckedCreateWithoutDictArticlesInputObjectSchema } from './dictLanguagesUncheckedCreateWithoutDictArticlesInput.schema';
import { dictLanguagesWhereInputObjectSchema as dictLanguagesWhereInputObjectSchema } from './dictLanguagesWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => dictLanguagesUpdateWithoutDictArticlesInputObjectSchema), z.lazy(() => dictLanguagesUncheckedUpdateWithoutDictArticlesInputObjectSchema)]),
  create: z.union([z.lazy(() => dictLanguagesCreateWithoutDictArticlesInputObjectSchema), z.lazy(() => dictLanguagesUncheckedCreateWithoutDictArticlesInputObjectSchema)]),
  where: z.lazy(() => dictLanguagesWhereInputObjectSchema).optional()
}).strict();
export const dictLanguagesUpsertWithoutDictArticlesInputObjectSchema: z.ZodType<Prisma.dictLanguagesUpsertWithoutDictArticlesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictLanguagesUpsertWithoutDictArticlesInput>;
export const dictLanguagesUpsertWithoutDictArticlesInputObjectZodSchema = makeSchema();
