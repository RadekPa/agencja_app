import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const dictstatesscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => dictStatesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictStatesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictStatesScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictStatesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictStatesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  StateID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  CountryID: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  StateAbb: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(2)]).optional(),
  StateName: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(30)]).optional()
}).strict();
export const dictStatesScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.dictStatesScalarWhereWithAggregatesInput> = dictstatesscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.dictStatesScalarWhereWithAggregatesInput>;
export const dictStatesScalarWhereWithAggregatesInputObjectZodSchema = dictstatesscalarwherewithaggregatesinputSchema;
