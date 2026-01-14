import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const artypescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ArTypeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ArTypeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ArTypeScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ArTypeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ArTypeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  ArType: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(3)]).optional(),
  ArTypeDescription: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(40)]).optional().nullable(),
  ArTypeDescriptionPL: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(50)]).optional().nullable()
}).strict();
export const ArTypeScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ArTypeScalarWhereWithAggregatesInput> = artypescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ArTypeScalarWhereWithAggregatesInput>;
export const ArTypeScalarWhereWithAggregatesInputObjectZodSchema = artypescalarwherewithaggregatesinputSchema;
