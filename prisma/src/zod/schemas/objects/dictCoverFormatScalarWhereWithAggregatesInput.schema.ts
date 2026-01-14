import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const dictcoverformatscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => dictCoverFormatScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictCoverFormatScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictCoverFormatScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictCoverFormatScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictCoverFormatScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  CoverFormatID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  CoverFormatDesc: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(30)]).optional()
}).strict();
export const dictCoverFormatScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.dictCoverFormatScalarWhereWithAggregatesInput> = dictcoverformatscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.dictCoverFormatScalarWhereWithAggregatesInput>;
export const dictCoverFormatScalarWhereWithAggregatesInputObjectZodSchema = dictcoverformatscalarwherewithaggregatesinputSchema;
