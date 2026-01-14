import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const dictagrtemplatesscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => dictAgrTemplatesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictAgrTemplatesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictAgrTemplatesScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictAgrTemplatesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictAgrTemplatesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  Name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(30)]).optional(),
  FileName: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(255)]).optional()
}).strict();
export const dictAgrTemplatesScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.dictAgrTemplatesScalarWhereWithAggregatesInput> = dictagrtemplatesscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.dictAgrTemplatesScalarWhereWithAggregatesInput>;
export const dictAgrTemplatesScalarWhereWithAggregatesInputObjectZodSchema = dictagrtemplatesscalarwherewithaggregatesinputSchema;
