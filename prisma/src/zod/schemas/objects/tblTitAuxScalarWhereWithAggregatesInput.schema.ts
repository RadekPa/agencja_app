import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const tbltitauxscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => tblTitAuxScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblTitAuxScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblTitAuxScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblTitAuxScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblTitAuxScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  TitleID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  CopyrightLine: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(200)]).optional().nullable()
}).strict();
export const tblTitAuxScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.tblTitAuxScalarWhereWithAggregatesInput> = tbltitauxscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.tblTitAuxScalarWhereWithAggregatesInput>;
export const tblTitAuxScalarWhereWithAggregatesInputObjectZodSchema = tbltitauxscalarwherewithaggregatesinputSchema;
