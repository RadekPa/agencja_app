import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const dicttitmainclassscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => dictTitMainClassScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictTitMainClassScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictTitMainClassScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictTitMainClassScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictTitMainClassScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  ClassCode: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(10)]).optional(),
  ClassDesc: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(50)]).optional().nullable()
}).strict();
export const dictTitMainClassScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.dictTitMainClassScalarWhereWithAggregatesInput> = dicttitmainclassscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.dictTitMainClassScalarWhereWithAggregatesInput>;
export const dictTitMainClassScalarWhereWithAggregatesInputObjectZodSchema = dicttitmainclassscalarwherewithaggregatesinputSchema;
