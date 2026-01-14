import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { FloatNullableWithAggregatesFilterObjectSchema as FloatNullableWithAggregatesFilterObjectSchema } from './FloatNullableWithAggregatesFilter.schema'

const dictcountriesscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => dictCountriesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictCountriesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictCountriesScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictCountriesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictCountriesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  CountryID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  CountryDesc: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  CountryPL: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  Tax: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  Code: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  EU: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(10)]).optional().nullable()
}).strict();
export const dictCountriesScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.dictCountriesScalarWhereWithAggregatesInput> = dictcountriesscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.dictCountriesScalarWhereWithAggregatesInput>;
export const dictCountriesScalarWhereWithAggregatesInputObjectZodSchema = dictcountriesscalarwherewithaggregatesinputSchema;
