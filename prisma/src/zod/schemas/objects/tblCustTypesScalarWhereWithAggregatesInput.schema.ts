import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'

const tblcusttypesscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => tblCustTypesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblCustTypesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblCustTypesScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblCustTypesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblCustTypesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  CustID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  CustTypeID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const tblCustTypesScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.tblCustTypesScalarWhereWithAggregatesInput> = tblcusttypesscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.tblCustTypesScalarWhereWithAggregatesInput>;
export const tblCustTypesScalarWhereWithAggregatesInputObjectZodSchema = tblcusttypesscalarwherewithaggregatesinputSchema;
