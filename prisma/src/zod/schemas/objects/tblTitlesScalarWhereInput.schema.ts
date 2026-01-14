import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { BoolNullableFilterObjectSchema as BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const tbltitlesscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblTitlesScalarWhereInputObjectSchema), z.lazy(() => tblTitlesScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblTitlesScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblTitlesScalarWhereInputObjectSchema), z.lazy(() => tblTitlesScalarWhereInputObjectSchema).array()]).optional(),
  TitleID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  CustID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  PropID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  Proprietor: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  LangAbb: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  ClassCode: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  CoverFormatID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  Title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  ISBN1: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  ISBN2: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  ISBN3: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  ISBN4: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  SeriesIID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  Edition: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  DateOfReceipt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  NoOfPages: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  CopyrightYear: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  CopyrightOwner: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  CopyrightOwnerDesc: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  KeyWords: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  TitleVolume: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  NoOfTitleVolumes: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  Hit: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  Junk: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  CD: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  Collection: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  Remarks: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  UserMod: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  DateMod: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  ISBN: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  PubID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  ProprietorDesc: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  ISBN0: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const tblTitlesScalarWhereInputObjectSchema: z.ZodType<Prisma.tblTitlesScalarWhereInput> = tbltitlesscalarwhereinputSchema as unknown as z.ZodType<Prisma.tblTitlesScalarWhereInput>;
export const tblTitlesScalarWhereInputObjectZodSchema = tbltitlesscalarwhereinputSchema;
