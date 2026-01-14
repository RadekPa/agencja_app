import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const tbluserparamsscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => tblUserParamsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblUserParamsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblUserParamsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblUserParamsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblUserParamsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  Login: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(30)]).optional(),
  Name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(30)]).optional(),
  Value: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(300)]).optional()
}).strict();
export const tblUserParamsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.tblUserParamsScalarWhereWithAggregatesInput> = tbluserparamsscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.tblUserParamsScalarWhereWithAggregatesInput>;
export const tblUserParamsScalarWhereWithAggregatesInputObjectZodSchema = tbluserparamsscalarwherewithaggregatesinputSchema;
