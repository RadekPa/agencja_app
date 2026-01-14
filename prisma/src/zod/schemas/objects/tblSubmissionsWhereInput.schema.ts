import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { TblSubmEventsListRelationFilterObjectSchema as TblSubmEventsListRelationFilterObjectSchema } from './TblSubmEventsListRelationFilter.schema';
import { TblTitlesNullableScalarRelationFilterObjectSchema as TblTitlesNullableScalarRelationFilterObjectSchema } from './TblTitlesNullableScalarRelationFilter.schema';
import { tblTitlesWhereInputObjectSchema as tblTitlesWhereInputObjectSchema } from './tblTitlesWhereInput.schema';
import { TblCustomersNullableScalarRelationFilterObjectSchema as TblCustomersNullableScalarRelationFilterObjectSchema } from './TblCustomersNullableScalarRelationFilter.schema';
import { tblCustomersWhereInputObjectSchema as tblCustomersWhereInputObjectSchema } from './tblCustomersWhereInput.schema';
import { DictSubmSentTypeNullableScalarRelationFilterObjectSchema as DictSubmSentTypeNullableScalarRelationFilterObjectSchema } from './DictSubmSentTypeNullableScalarRelationFilter.schema';
import { dictSubmSentTypeWhereInputObjectSchema as dictSubmSentTypeWhereInputObjectSchema } from './dictSubmSentTypeWhereInput.schema';
import { DictCopyTypeNullableScalarRelationFilterObjectSchema as DictCopyTypeNullableScalarRelationFilterObjectSchema } from './DictCopyTypeNullableScalarRelationFilter.schema';
import { dictCopyTypeWhereInputObjectSchema as dictCopyTypeWhereInputObjectSchema } from './dictCopyTypeWhereInput.schema'

const tblsubmissionswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblSubmissionsWhereInputObjectSchema), z.lazy(() => tblSubmissionsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblSubmissionsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblSubmissionsWhereInputObjectSchema), z.lazy(() => tblSubmissionsWhereInputObjectSchema).array()]).optional(),
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
  TrackingNo: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(30)]).optional().nullable(),
  UserMod: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(30)]).optional(),
  DateMod: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  Status: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(1)]).optional().nullable(),
  SubmNr: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  Remarks: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(1000)]).optional().nullable(),
  ContactID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  tblSubmEvents: z.lazy(() => TblSubmEventsListRelationFilterObjectSchema).optional(),
  tblTitles: z.union([z.lazy(() => TblTitlesNullableScalarRelationFilterObjectSchema), z.lazy(() => tblTitlesWhereInputObjectSchema)]).optional(),
  tblCustomers: z.union([z.lazy(() => TblCustomersNullableScalarRelationFilterObjectSchema), z.lazy(() => tblCustomersWhereInputObjectSchema)]).optional(),
  dictSubmSentType: z.union([z.lazy(() => DictSubmSentTypeNullableScalarRelationFilterObjectSchema), z.lazy(() => dictSubmSentTypeWhereInputObjectSchema)]).optional(),
  dictCopyType: z.union([z.lazy(() => DictCopyTypeNullableScalarRelationFilterObjectSchema), z.lazy(() => dictCopyTypeWhereInputObjectSchema)]).optional()
}).strict();
export const tblSubmissionsWhereInputObjectSchema: z.ZodType<Prisma.tblSubmissionsWhereInput> = tblsubmissionswhereinputSchema as unknown as z.ZodType<Prisma.tblSubmissionsWhereInput>;
export const tblSubmissionsWhereInputObjectZodSchema = tblsubmissionswhereinputSchema;
