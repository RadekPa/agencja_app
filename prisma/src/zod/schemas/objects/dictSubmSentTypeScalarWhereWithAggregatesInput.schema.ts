import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const dictsubmsenttypescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => dictSubmSentTypeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictSubmSentTypeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictSubmSentTypeScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictSubmSentTypeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictSubmSentTypeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  SubmSentTypeID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  SubmSentType: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(30)]).optional()
}).strict();
export const dictSubmSentTypeScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.dictSubmSentTypeScalarWhereWithAggregatesInput> = dictsubmsenttypescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.dictSubmSentTypeScalarWhereWithAggregatesInput>;
export const dictSubmSentTypeScalarWhereWithAggregatesInputObjectZodSchema = dictsubmsenttypescalarwherewithaggregatesinputSchema;
