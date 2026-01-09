import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const authorwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AuthorWhereInputObjectSchema), z.lazy(() => AuthorWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AuthorWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AuthorWhereInputObjectSchema), z.lazy(() => AuthorWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  fullName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(150)]).optional().nullable(),
  firstName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(150)]).optional().nullable(),
  middleName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(100)]).optional().nullable(),
  lastName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(150)]).optional().nullable(),
  suffix: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  penName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(150)]).optional().nullable(),
  userMod: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(30)]).optional(),
  dateMod: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  remarks: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(1000)]).optional().nullable()
}).strict();
export const AuthorWhereInputObjectSchema: z.ZodType<Prisma.AuthorWhereInput> = authorwhereinputSchema as unknown as z.ZodType<Prisma.AuthorWhereInput>;
export const AuthorWhereInputObjectZodSchema = authorwhereinputSchema;
