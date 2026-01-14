import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const tblpersonwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblPersonWhereInputObjectSchema), z.lazy(() => tblPersonWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblPersonWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblPersonWhereInputObjectSchema), z.lazy(() => tblPersonWhereInputObjectSchema).array()]).optional(),
  PersonID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  LastName: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(50)]).optional(),
  FirstName: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(50)]).optional(),
  MiddleName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  BirthDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  PESEL: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(11)]).optional().nullable(),
  Status: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(1)]).optional().nullable(),
  Address1: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  Address2: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  Zip: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(20)]).optional().nullable(),
  City: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  Country: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  MobileGRAAL: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  MobilePrivate: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  ExtGRAAL: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(2)]).optional().nullable(),
  emailGraal: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  emailPriv: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable()
}).strict();
export const tblPersonWhereInputObjectSchema: z.ZodType<Prisma.tblPersonWhereInput> = tblpersonwhereinputSchema as unknown as z.ZodType<Prisma.tblPersonWhereInput>;
export const tblPersonWhereInputObjectZodSchema = tblpersonwhereinputSchema;
