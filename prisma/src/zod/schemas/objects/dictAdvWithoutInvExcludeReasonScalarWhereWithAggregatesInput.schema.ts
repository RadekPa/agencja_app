import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const dictadvwithoutinvexcludereasonscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => dictAdvWithoutInvExcludeReasonScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictAdvWithoutInvExcludeReasonScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictAdvWithoutInvExcludeReasonScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictAdvWithoutInvExcludeReasonScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictAdvWithoutInvExcludeReasonScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  ExcludeReasonID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  ExcludeReasonCode: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(3)]).optional().nullable(),
  ExcludeReasonDesc: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(50)]).optional().nullable()
}).strict();
export const dictAdvWithoutInvExcludeReasonScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.dictAdvWithoutInvExcludeReasonScalarWhereWithAggregatesInput> = dictadvwithoutinvexcludereasonscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.dictAdvWithoutInvExcludeReasonScalarWhereWithAggregatesInput>;
export const dictAdvWithoutInvExcludeReasonScalarWhereWithAggregatesInputObjectZodSchema = dictadvwithoutinvexcludereasonscalarwherewithaggregatesinputSchema;
