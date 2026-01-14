import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const dictcusttypesscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => dictCustTypesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictCustTypesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictCustTypesScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictCustTypesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictCustTypesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  CustTypeID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  CustTypeName: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(50)]).optional(),
  CustTypeDesc: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(250)]).optional().nullable()
}).strict();
export const dictCustTypesScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.dictCustTypesScalarWhereWithAggregatesInput> = dictcusttypesscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.dictCustTypesScalarWhereWithAggregatesInput>;
export const dictCustTypesScalarWhereWithAggregatesInputObjectZodSchema = dictcusttypesscalarwherewithaggregatesinputSchema;
