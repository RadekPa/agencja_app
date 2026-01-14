import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const dicttitsubclassscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => dictTitSubClassScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictTitSubClassScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictTitSubClassScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictTitSubClassScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictTitSubClassScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  SubClassCode: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(5)]).optional(),
  ClassCode: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(10)]).optional().nullable(),
  SubClassDesc: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(50)]).optional().nullable()
}).strict();
export const dictTitSubClassScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.dictTitSubClassScalarWhereWithAggregatesInput> = dicttitsubclassscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.dictTitSubClassScalarWhereWithAggregatesInput>;
export const dictTitSubClassScalarWhereWithAggregatesInputObjectZodSchema = dicttitsubclassscalarwherewithaggregatesinputSchema;
