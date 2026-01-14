import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const dictmattypescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => dictMatTypeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictMatTypeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictMatTypeScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictMatTypeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictMatTypeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  MatTypeID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  MatTypeDesc: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(50)]).optional(),
  MatTypeDescPL: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(50)]).optional().nullable()
}).strict();
export const dictMatTypeScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.dictMatTypeScalarWhereWithAggregatesInput> = dictmattypescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.dictMatTypeScalarWhereWithAggregatesInput>;
export const dictMatTypeScalarWhereWithAggregatesInputObjectZodSchema = dictmattypescalarwherewithaggregatesinputSchema;
