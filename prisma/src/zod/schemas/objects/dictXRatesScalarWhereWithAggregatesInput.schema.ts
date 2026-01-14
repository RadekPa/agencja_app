import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { FloatWithAggregatesFilterObjectSchema as FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema'

const dictxratesscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => dictXRatesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictXRatesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictXRatesScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictXRatesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictXRatesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  CurrDate: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  CurrID: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(3)]).optional(),
  XRate: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional()
}).strict();
export const dictXRatesScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.dictXRatesScalarWhereWithAggregatesInput> = dictxratesscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.dictXRatesScalarWhereWithAggregatesInput>;
export const dictXRatesScalarWhereWithAggregatesInputObjectZodSchema = dictxratesscalarwherewithaggregatesinputSchema;
