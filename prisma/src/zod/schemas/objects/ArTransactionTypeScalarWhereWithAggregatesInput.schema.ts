import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const artransactiontypescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ArTransactionTypeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ArTransactionTypeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ArTransactionTypeScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ArTransactionTypeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ArTransactionTypeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  ArType: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  ArTypeDescription: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(40)]).optional().nullable(),
  ArTypeDescriptionPL: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(50)]).optional().nullable()
}).strict();
export const ArTransactionTypeScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ArTransactionTypeScalarWhereWithAggregatesInput> = artransactiontypescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ArTransactionTypeScalarWhereWithAggregatesInput>;
export const ArTransactionTypeScalarWhereWithAggregatesInputObjectZodSchema = artransactiontypescalarwherewithaggregatesinputSchema;
