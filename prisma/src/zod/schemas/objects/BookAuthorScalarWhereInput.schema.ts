import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const bookauthorscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => BookAuthorScalarWhereInputObjectSchema), z.lazy(() => BookAuthorScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BookAuthorScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BookAuthorScalarWhereInputObjectSchema), z.lazy(() => BookAuthorScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  firstName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  middleName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  lastName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  workEmail: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  personalEmail: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  photos: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  clientId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const BookAuthorScalarWhereInputObjectSchema: z.ZodType<Prisma.BookAuthorScalarWhereInput> = bookauthorscalarwhereinputSchema as unknown as z.ZodType<Prisma.BookAuthorScalarWhereInput>;
export const BookAuthorScalarWhereInputObjectZodSchema = bookauthorscalarwhereinputSchema;
