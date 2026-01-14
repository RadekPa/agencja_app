import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { FloatNullableWithAggregatesFilterObjectSchema as FloatNullableWithAggregatesFilterObjectSchema } from './FloatNullableWithAggregatesFilter.schema'

const tblroyratesscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => tblRoyRatesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblRoyRatesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblRoyRatesScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblRoyRatesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblRoyRatesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  Step: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  AgrRightID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  AgrID: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  CpsMax: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  Rate: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable()
}).strict();
export const tblRoyRatesScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.tblRoyRatesScalarWhereWithAggregatesInput> = tblroyratesscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.tblRoyRatesScalarWhereWithAggregatesInput>;
export const tblRoyRatesScalarWhereWithAggregatesInputObjectZodSchema = tblroyratesscalarwherewithaggregatesinputSchema;
