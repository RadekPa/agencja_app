import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const dictarticlesscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => dictArticlesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictArticlesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictArticlesScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictArticlesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictArticlesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  Article: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(10)]).optional(),
  LangAbb: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(3)]).optional().nullable()
}).strict();
export const dictArticlesScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.dictArticlesScalarWhereWithAggregatesInput> = dictarticlesscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.dictArticlesScalarWhereWithAggregatesInput>;
export const dictArticlesScalarWhereWithAggregatesInputObjectZodSchema = dictarticlesscalarwherewithaggregatesinputSchema;
