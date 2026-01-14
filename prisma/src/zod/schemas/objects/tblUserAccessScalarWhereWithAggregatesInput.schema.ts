import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'

const tbluseraccessscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => tblUserAccessScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblUserAccessScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblUserAccessScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblUserAccessScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblUserAccessScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  Login: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(30)]).optional(),
  PlaceID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const tblUserAccessScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.tblUserAccessScalarWhereWithAggregatesInput> = tbluseraccessscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.tblUserAccessScalarWhereWithAggregatesInput>;
export const tblUserAccessScalarWhereWithAggregatesInputObjectZodSchema = tbluseraccessscalarwherewithaggregatesinputSchema;
