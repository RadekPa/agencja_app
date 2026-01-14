import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const dbo_localuserscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => dbo_LocalUserScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dbo_LocalUserScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dbo_LocalUserScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dbo_LocalUserScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dbo_LocalUserScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  email: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  passwordHash: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  role: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(50)]).optional(),
  permissions: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  locale: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const dbo_LocalUserScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.dbo_LocalUserScalarWhereWithAggregatesInput> = dbo_localuserscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.dbo_LocalUserScalarWhereWithAggregatesInput>;
export const dbo_LocalUserScalarWhereWithAggregatesInputObjectZodSchema = dbo_localuserscalarwherewithaggregatesinputSchema;
