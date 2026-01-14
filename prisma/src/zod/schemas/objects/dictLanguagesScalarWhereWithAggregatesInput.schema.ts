import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const dictlanguagesscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => dictLanguagesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictLanguagesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictLanguagesScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictLanguagesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictLanguagesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  LangAbb: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(3)]).optional(),
  LangDesc: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(30)]).optional(),
  LangPL: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(30)]).optional()
}).strict();
export const dictLanguagesScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.dictLanguagesScalarWhereWithAggregatesInput> = dictlanguagesscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.dictLanguagesScalarWhereWithAggregatesInput>;
export const dictLanguagesScalarWhereWithAggregatesInputObjectZodSchema = dictlanguagesscalarwherewithaggregatesinputSchema;
