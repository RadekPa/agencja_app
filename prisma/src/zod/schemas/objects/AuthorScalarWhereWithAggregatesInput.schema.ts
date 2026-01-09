import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const authorscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => AuthorScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AuthorScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AuthorScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AuthorScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AuthorScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  fullName: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(150)]).optional().nullable(),
  firstName: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(150)]).optional().nullable(),
  middleName: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(100)]).optional().nullable(),
  lastName: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(150)]).optional().nullable(),
  suffix: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  penName: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(150)]).optional().nullable(),
  userMod: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(30)]).optional(),
  dateMod: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  remarks: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(1000)]).optional().nullable()
}).strict();
export const AuthorScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AuthorScalarWhereWithAggregatesInput> = authorscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.AuthorScalarWhereWithAggregatesInput>;
export const AuthorScalarWhereWithAggregatesInputObjectZodSchema = authorscalarwherewithaggregatesinputSchema;
