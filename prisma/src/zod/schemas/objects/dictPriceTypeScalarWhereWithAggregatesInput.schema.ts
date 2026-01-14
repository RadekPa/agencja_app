import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const dictpricetypescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => dictPriceTypeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictPriceTypeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictPriceTypeScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictPriceTypeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictPriceTypeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  PriceTypeID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  PriceTypeDesc: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  PriceTypePL: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(50)]).optional().nullable()
}).strict();
export const dictPriceTypeScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.dictPriceTypeScalarWhereWithAggregatesInput> = dictpricetypescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.dictPriceTypeScalarWhereWithAggregatesInput>;
export const dictPriceTypeScalarWhereWithAggregatesInputObjectZodSchema = dictpricetypescalarwherewithaggregatesinputSchema;
