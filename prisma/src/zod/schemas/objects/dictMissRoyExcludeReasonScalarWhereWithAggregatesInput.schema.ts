import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const dictmissroyexcludereasonscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => dictMissRoyExcludeReasonScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictMissRoyExcludeReasonScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictMissRoyExcludeReasonScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictMissRoyExcludeReasonScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictMissRoyExcludeReasonScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  ExcludeReasonID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  ExcludeReasonCode: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(3)]).optional().nullable(),
  ExcludeReasonDesc: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(50)]).optional().nullable()
}).strict();
export const dictMissRoyExcludeReasonScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.dictMissRoyExcludeReasonScalarWhereWithAggregatesInput> = dictmissroyexcludereasonscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.dictMissRoyExcludeReasonScalarWhereWithAggregatesInput>;
export const dictMissRoyExcludeReasonScalarWhereWithAggregatesInputObjectZodSchema = dictmissroyexcludereasonscalarwherewithaggregatesinputSchema;
