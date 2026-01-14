import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const dictagreventsscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => dictAgrEventsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictAgrEventsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictAgrEventsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictAgrEventsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictAgrEventsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  AgrEventCode: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  AgrEventDesc: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(255)]).optional(),
  Status: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(1)]).optional().nullable()
}).strict();
export const dictAgrEventsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.dictAgrEventsScalarWhereWithAggregatesInput> = dictagreventsscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.dictAgrEventsScalarWhereWithAggregatesInput>;
export const dictAgrEventsScalarWhereWithAggregatesInputObjectZodSchema = dictagreventsscalarwherewithaggregatesinputSchema;
