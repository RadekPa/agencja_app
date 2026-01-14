import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema'

const tbltitauthorsscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => tblTitAuthorsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblTitAuthorsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblTitAuthorsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblTitAuthorsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblTitAuthorsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  AuthorID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  TitleID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  Main: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  Lp: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const tblTitAuthorsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.tblTitAuthorsScalarWhereWithAggregatesInput> = tbltitauthorsscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.tblTitAuthorsScalarWhereWithAggregatesInput>;
export const tblTitAuthorsScalarWhereWithAggregatesInputObjectZodSchema = tbltitauthorsscalarwherewithaggregatesinputSchema;
