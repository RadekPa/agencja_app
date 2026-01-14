import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const tblseriesscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => tblSeriesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblSeriesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblSeriesScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblSeriesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblSeriesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  SeriesID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  CustID: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  SeriesFullName: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(150)]).optional().nullable(),
  SeriesShortName: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(50)]).optional().nullable()
}).strict();
export const tblSeriesScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.tblSeriesScalarWhereWithAggregatesInput> = tblseriesscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.tblSeriesScalarWhereWithAggregatesInput>;
export const tblSeriesScalarWhereWithAggregatesInputObjectZodSchema = tblseriesscalarwherewithaggregatesinputSchema;
