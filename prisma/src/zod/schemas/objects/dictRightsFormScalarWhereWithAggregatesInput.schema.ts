import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const dictrightsformscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => dictRightsFormScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictRightsFormScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictRightsFormScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictRightsFormScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictRightsFormScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  RightFormID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  RightFormDesc: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(50)]).optional(),
  RightFormPL: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(100)]).optional().nullable(),
  RightFormAbbPL: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(10)]).optional().nullable(),
  RightFormAbbEN: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(10)]).optional().nullable()
}).strict();
export const dictRightsFormScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.dictRightsFormScalarWhereWithAggregatesInput> = dictrightsformscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.dictRightsFormScalarWhereWithAggregatesInput>;
export const dictRightsFormScalarWhereWithAggregatesInputObjectZodSchema = dictrightsformscalarwherewithaggregatesinputSchema;
