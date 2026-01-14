import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const tblplacesscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => tblPlacesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblPlacesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblPlacesScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblPlacesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblPlacesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  PlaceID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  PlaceDesc: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(50)]).optional()
}).strict();
export const tblPlacesScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.tblPlacesScalarWhereWithAggregatesInput> = tblplacesscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.tblPlacesScalarWhereWithAggregatesInput>;
export const tblPlacesScalarWhereWithAggregatesInputObjectZodSchema = tblplacesscalarwherewithaggregatesinputSchema;
