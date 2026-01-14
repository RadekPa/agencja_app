import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const tblpdoxinvmatscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => tblPdoxInvMatScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblPdoxInvMatScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblPdoxInvMatScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblPdoxInvMatScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblPdoxInvMatScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  Invoice_Nr: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  Title: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(150)]).optional().nullable(),
  ISBN: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(16)]).optional().nullable()
}).strict();
export const tblPdoxInvMatScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.tblPdoxInvMatScalarWhereWithAggregatesInput> = tblpdoxinvmatscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.tblPdoxInvMatScalarWhereWithAggregatesInput>;
export const tblPdoxInvMatScalarWhereWithAggregatesInputObjectZodSchema = tblpdoxinvmatscalarwherewithaggregatesinputSchema;
