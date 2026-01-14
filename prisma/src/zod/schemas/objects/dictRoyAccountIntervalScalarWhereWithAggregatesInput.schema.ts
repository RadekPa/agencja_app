import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const dictroyaccountintervalscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => dictRoyAccountIntervalScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictRoyAccountIntervalScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictRoyAccountIntervalScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictRoyAccountIntervalScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictRoyAccountIntervalScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  RoyAccountIntervalID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  RoyAccountIntervalDesc: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(50)]).optional(),
  IntervalAbb: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(8)]).optional().nullable()
}).strict();
export const dictRoyAccountIntervalScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.dictRoyAccountIntervalScalarWhereWithAggregatesInput> = dictroyaccountintervalscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.dictRoyAccountIntervalScalarWhereWithAggregatesInput>;
export const dictRoyAccountIntervalScalarWhereWithAggregatesInputObjectZodSchema = dictroyaccountintervalscalarwherewithaggregatesinputSchema;
