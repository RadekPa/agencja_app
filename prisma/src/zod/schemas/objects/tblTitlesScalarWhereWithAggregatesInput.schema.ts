import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { BoolNullableWithAggregatesFilterObjectSchema as BoolNullableWithAggregatesFilterObjectSchema } from './BoolNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const tbltitlesscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => tblTitlesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblTitlesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblTitlesScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblTitlesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblTitlesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  TitleID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  CustID: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  PropID: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  Proprietor: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(1)]).optional().nullable(),
  LangAbb: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(3)]).optional().nullable(),
  ClassCode: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(10)]).optional().nullable(),
  CoverFormatID: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  Title: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(150)]).optional(),
  ISBN1: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(5)]).optional().nullable(),
  ISBN2: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(7)]).optional().nullable(),
  ISBN3: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(6)]).optional().nullable(),
  ISBN4: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(1)]).optional().nullable(),
  SeriesIID: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  Edition: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  DateOfReceipt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  NoOfPages: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  CopyrightYear: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(4)]).optional().nullable(),
  CopyrightOwner: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(1)]).optional().nullable(),
  CopyrightOwnerDesc: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(150)]).optional().nullable(),
  KeyWords: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(250)]).optional().nullable(),
  TitleVolume: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  NoOfTitleVolumes: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  Hit: z.union([z.lazy(() => BoolNullableWithAggregatesFilterObjectSchema), z.boolean()]).optional().nullable(),
  Junk: z.union([z.lazy(() => BoolNullableWithAggregatesFilterObjectSchema), z.boolean()]).optional().nullable(),
  CD: z.union([z.lazy(() => BoolNullableWithAggregatesFilterObjectSchema), z.boolean()]).optional().nullable(),
  Collection: z.union([z.lazy(() => BoolNullableWithAggregatesFilterObjectSchema), z.boolean()]).optional().nullable(),
  Remarks: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(1000)]).optional().nullable(),
  UserMod: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(30)]).optional(),
  DateMod: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  ISBN: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(20)]).optional().nullable(),
  PubID: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  ProprietorDesc: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(200)]).optional().nullable(),
  ISBN0: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(3)]).optional().nullable()
}).strict();
export const tblTitlesScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.tblTitlesScalarWhereWithAggregatesInput> = tbltitlesscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.tblTitlesScalarWhereWithAggregatesInput>;
export const tblTitlesScalarWhereWithAggregatesInputObjectZodSchema = tbltitlesscalarwherewithaggregatesinputSchema;
