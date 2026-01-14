import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const dbo_localuserwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => dbo_LocalUserWhereInputObjectSchema), z.lazy(() => dbo_LocalUserWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dbo_LocalUserWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dbo_LocalUserWhereInputObjectSchema), z.lazy(() => dbo_LocalUserWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  passwordHash: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  role: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(50)]).optional(),
  permissions: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  locale: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const dbo_LocalUserWhereInputObjectSchema: z.ZodType<Prisma.dbo_LocalUserWhereInput> = dbo_localuserwhereinputSchema as unknown as z.ZodType<Prisma.dbo_LocalUserWhereInput>;
export const dbo_LocalUserWhereInputObjectZodSchema = dbo_localuserwhereinputSchema;
