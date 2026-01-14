import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { FloatNullableWithAggregatesFilterObjectSchema as FloatNullableWithAggregatesFilterObjectSchema } from './FloatNullableWithAggregatesFilter.schema'

const dictcountries_oldscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => dictCountries_oldScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictCountries_oldScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictCountries_oldScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictCountries_oldScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictCountries_oldScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  CountryID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  CountryDesc: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(150)]).optional(),
  CountryPL: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(150)]).optional().nullable(),
  Tax: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  Code: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(10)]).optional().nullable(),
  EU: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(1)]).optional().nullable()
}).strict();
export const dictCountries_oldScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.dictCountries_oldScalarWhereWithAggregatesInput> = dictcountries_oldscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.dictCountries_oldScalarWhereWithAggregatesInput>;
export const dictCountries_oldScalarWhereWithAggregatesInputObjectZodSchema = dictcountries_oldscalarwherewithaggregatesinputSchema;
