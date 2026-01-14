import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { FloatWithAggregatesFilterObjectSchema as FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema'

const arvatscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ArVatScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ArVatScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ArVatScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ArVatScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ArVatScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  VatCode: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(2)]).optional(),
  Description: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(50)]).optional(),
  VatRate: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  DescriptionPL: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(50)]).optional()
}).strict();
export const ArVatScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ArVatScalarWhereWithAggregatesInput> = arvatscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ArVatScalarWhereWithAggregatesInput>;
export const ArVatScalarWhereWithAggregatesInputObjectZodSchema = arvatscalarwherewithaggregatesinputSchema;
