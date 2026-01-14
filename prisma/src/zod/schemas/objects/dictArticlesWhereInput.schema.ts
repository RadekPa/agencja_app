import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DictLanguagesNullableScalarRelationFilterObjectSchema as DictLanguagesNullableScalarRelationFilterObjectSchema } from './DictLanguagesNullableScalarRelationFilter.schema';
import { dictLanguagesWhereInputObjectSchema as dictLanguagesWhereInputObjectSchema } from './dictLanguagesWhereInput.schema'

const dictarticleswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => dictArticlesWhereInputObjectSchema), z.lazy(() => dictArticlesWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictArticlesWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictArticlesWhereInputObjectSchema), z.lazy(() => dictArticlesWhereInputObjectSchema).array()]).optional(),
  Article: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(10)]).optional(),
  LangAbb: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(3)]).optional().nullable(),
  dictLanguages: z.union([z.lazy(() => DictLanguagesNullableScalarRelationFilterObjectSchema), z.lazy(() => dictLanguagesWhereInputObjectSchema)]).optional()
}).strict();
export const dictArticlesWhereInputObjectSchema: z.ZodType<Prisma.dictArticlesWhereInput> = dictarticleswhereinputSchema as unknown as z.ZodType<Prisma.dictArticlesWhereInput>;
export const dictArticlesWhereInputObjectZodSchema = dictarticleswhereinputSchema;
