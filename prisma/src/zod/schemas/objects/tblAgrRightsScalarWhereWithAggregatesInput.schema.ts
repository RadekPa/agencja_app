import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema'

const tblagrrightsscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => tblAgrRightsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblAgrRightsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblAgrRightsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblAgrRightsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblAgrRightsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  AgrRightID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  AgrID: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  RightID: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  PriceTypeID: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  RoyPriceTypeID: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  RoyAccountIntervalID: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  DistID: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable()
}).strict();
export const tblAgrRightsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.tblAgrRightsScalarWhereWithAggregatesInput> = tblagrrightsscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.tblAgrRightsScalarWhereWithAggregatesInput>;
export const tblAgrRightsScalarWhereWithAggregatesInputObjectZodSchema = tblagrrightsscalarwherewithaggregatesinputSchema;
