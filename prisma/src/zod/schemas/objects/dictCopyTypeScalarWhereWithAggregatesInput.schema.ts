import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const dictcopytypescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => dictCopyTypeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictCopyTypeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictCopyTypeScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictCopyTypeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictCopyTypeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  CopyTypeID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  CopyType: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(30)]).optional().nullable()
}).strict();
export const dictCopyTypeScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.dictCopyTypeScalarWhereWithAggregatesInput> = dictcopytypescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.dictCopyTypeScalarWhereWithAggregatesInput>;
export const dictCopyTypeScalarWhereWithAggregatesInputObjectZodSchema = dictcopytypescalarwherewithaggregatesinputSchema;
