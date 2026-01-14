import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const tblmailingtemplatesscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => tblMailingTemplatesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblMailingTemplatesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblMailingTemplatesScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblMailingTemplatesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblMailingTemplatesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  TempID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  TempName: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(50)]).optional(),
  TempPath: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(255)]).optional(),
  TempSubject: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(255)]).optional()
}).strict();
export const tblMailingTemplatesScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.tblMailingTemplatesScalarWhereWithAggregatesInput> = tblmailingtemplatesscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.tblMailingTemplatesScalarWhereWithAggregatesInput>;
export const tblMailingTemplatesScalarWhereWithAggregatesInputObjectZodSchema = tblmailingtemplatesscalarwherewithaggregatesinputSchema;
