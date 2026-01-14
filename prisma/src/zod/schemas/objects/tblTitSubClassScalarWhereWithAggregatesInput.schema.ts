import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'

const tbltitsubclassscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => tblTitSubClassScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblTitSubClassScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblTitSubClassScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblTitSubClassScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblTitSubClassScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  SubClassCode: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(5)]).optional(),
  TitleID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const tblTitSubClassScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.tblTitSubClassScalarWhereWithAggregatesInput> = tbltitsubclassscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.tblTitSubClassScalarWhereWithAggregatesInput>;
export const tblTitSubClassScalarWhereWithAggregatesInputObjectZodSchema = tbltitsubclassscalarwherewithaggregatesinputSchema;
