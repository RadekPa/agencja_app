import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const dictroypricetypescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => dictRoyPriceTypeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictRoyPriceTypeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictRoyPriceTypeScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictRoyPriceTypeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictRoyPriceTypeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  RoyPriceTypeID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  RoyPriceTypeDesc: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(50)]).optional(),
  RoyPriceTypePL: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(50)]).optional().nullable()
}).strict();
export const dictRoyPriceTypeScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.dictRoyPriceTypeScalarWhereWithAggregatesInput> = dictroypricetypescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.dictRoyPriceTypeScalarWhereWithAggregatesInput>;
export const dictRoyPriceTypeScalarWhereWithAggregatesInputObjectZodSchema = dictroypricetypescalarwherewithaggregatesinputSchema;
