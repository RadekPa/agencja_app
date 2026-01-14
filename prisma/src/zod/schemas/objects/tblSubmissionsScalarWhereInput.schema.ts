import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema'

const tblsubmissionsscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblSubmissionsScalarWhereInputObjectSchema), z.lazy(() => tblSubmissionsScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblSubmissionsScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblSubmissionsScalarWhereInputObjectSchema), z.lazy(() => tblSubmissionsScalarWhereInputObjectSchema).array()]).optional(),
  SubmID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  CopyTypeID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  SubmSentTypeID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  TitleID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  CustID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  Exclusive: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  SubmDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  SentDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  EndDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  ReturnDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  NoOfCopies: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  TrackingNo: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  UserMod: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  DateMod: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  Status: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  SubmNr: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  Remarks: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  ContactID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable()
}).strict();
export const tblSubmissionsScalarWhereInputObjectSchema: z.ZodType<Prisma.tblSubmissionsScalarWhereInput> = tblsubmissionsscalarwhereinputSchema as unknown as z.ZodType<Prisma.tblSubmissionsScalarWhereInput>;
export const tblSubmissionsScalarWhereInputObjectZodSchema = tblsubmissionsscalarwhereinputSchema;
