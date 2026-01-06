import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema'

const authorwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AuthorWhereInputObjectSchema), z.lazy(() => AuthorWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AuthorWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AuthorWhereInputObjectSchema), z.lazy(() => AuthorWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  phoneNumber: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(20)]).optional().nullable(),
  firstName: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(30)]).optional(),
  middleName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(30)]).optional().nullable(),
  lastName: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(50)]).optional(),
  informal: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  fax: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(20)]).optional().nullable(),
  email: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  userMod: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(30)]).optional(),
  dateMod: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  contactPosition: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  accountant: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable()
}).strict();
export const AuthorWhereInputObjectSchema: z.ZodType<Prisma.AuthorWhereInput> = authorwhereinputSchema as unknown as z.ZodType<Prisma.AuthorWhereInput>;
export const AuthorWhereInputObjectZodSchema = authorwhereinputSchema;
