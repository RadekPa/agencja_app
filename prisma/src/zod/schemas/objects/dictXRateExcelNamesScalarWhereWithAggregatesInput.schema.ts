import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const dictxrateexcelnamesscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => dictXRateExcelNamesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictXRateExcelNamesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictXRateExcelNamesScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictXRateExcelNamesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictXRateExcelNamesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  CurrID: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(3)]).optional(),
  Name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(50)]).optional()
}).strict();
export const dictXRateExcelNamesScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.dictXRateExcelNamesScalarWhereWithAggregatesInput> = dictxrateexcelnamesscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.dictXRateExcelNamesScalarWhereWithAggregatesInput>;
export const dictXRateExcelNamesScalarWhereWithAggregatesInputObjectZodSchema = dictxrateexcelnamesscalarwherewithaggregatesinputSchema;
