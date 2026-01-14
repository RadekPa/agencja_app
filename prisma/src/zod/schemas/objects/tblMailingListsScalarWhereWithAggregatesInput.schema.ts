import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'

const tblmailinglistsscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => tblMailingListsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblMailingListsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblMailingListsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblMailingListsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblMailingListsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  ClassCode: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(10)]).optional(),
  SubClassCode: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(5)]).optional(),
  CustID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const tblMailingListsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.tblMailingListsScalarWhereWithAggregatesInput> = tblmailinglistsscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.tblMailingListsScalarWhereWithAggregatesInput>;
export const tblMailingListsScalarWhereWithAggregatesInputObjectZodSchema = tblmailinglistsscalarwherewithaggregatesinputSchema;
