import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const dictarticlesscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => dictArticlesScalarWhereInputObjectSchema), z.lazy(() => dictArticlesScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictArticlesScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictArticlesScalarWhereInputObjectSchema), z.lazy(() => dictArticlesScalarWhereInputObjectSchema).array()]).optional(),
  Article: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  LangAbb: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const dictArticlesScalarWhereInputObjectSchema: z.ZodType<Prisma.dictArticlesScalarWhereInput> = dictarticlesscalarwhereinputSchema as unknown as z.ZodType<Prisma.dictArticlesScalarWhereInput>;
export const dictArticlesScalarWhereInputObjectZodSchema = dictarticlesscalarwhereinputSchema;
