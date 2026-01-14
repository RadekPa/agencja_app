import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictLanguagesWhereInputObjectSchema as dictLanguagesWhereInputObjectSchema } from './dictLanguagesWhereInput.schema';
import { dictLanguagesUpdateWithoutDictArticlesInputObjectSchema as dictLanguagesUpdateWithoutDictArticlesInputObjectSchema } from './dictLanguagesUpdateWithoutDictArticlesInput.schema';
import { dictLanguagesUncheckedUpdateWithoutDictArticlesInputObjectSchema as dictLanguagesUncheckedUpdateWithoutDictArticlesInputObjectSchema } from './dictLanguagesUncheckedUpdateWithoutDictArticlesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictLanguagesWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => dictLanguagesUpdateWithoutDictArticlesInputObjectSchema), z.lazy(() => dictLanguagesUncheckedUpdateWithoutDictArticlesInputObjectSchema)])
}).strict();
export const dictLanguagesUpdateToOneWithWhereWithoutDictArticlesInputObjectSchema: z.ZodType<Prisma.dictLanguagesUpdateToOneWithWhereWithoutDictArticlesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictLanguagesUpdateToOneWithWhereWithoutDictArticlesInput>;
export const dictLanguagesUpdateToOneWithWhereWithoutDictArticlesInputObjectZodSchema = makeSchema();
