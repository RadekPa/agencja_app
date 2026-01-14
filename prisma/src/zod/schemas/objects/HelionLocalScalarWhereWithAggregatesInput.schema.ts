import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const helionlocalscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => HelionLocalScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => HelionLocalScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => HelionLocalScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => HelionLocalScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => HelionLocalScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  ISBNORG: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(13)]).optional(),
  ISBNHELION: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(13)]).optional(),
  TYTULORG: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(120)]).optional().nullable(),
  TYTULHELION: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(120)]).optional().nullable()
}).strict();
export const HelionLocalScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.HelionLocalScalarWhereWithAggregatesInput> = helionlocalscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.HelionLocalScalarWhereWithAggregatesInput>;
export const HelionLocalScalarWhereWithAggregatesInputObjectZodSchema = helionlocalscalarwherewithaggregatesinputSchema;
