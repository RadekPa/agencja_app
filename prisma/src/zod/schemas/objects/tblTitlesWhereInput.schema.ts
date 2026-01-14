import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { BoolNullableFilterObjectSchema as BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { TblAgreementsListRelationFilterObjectSchema as TblAgreementsListRelationFilterObjectSchema } from './TblAgreementsListRelationFilter.schema';
import { TblSubmissionsListRelationFilterObjectSchema as TblSubmissionsListRelationFilterObjectSchema } from './TblSubmissionsListRelationFilter.schema';
import { TblTitAuthorsListRelationFilterObjectSchema as TblTitAuthorsListRelationFilterObjectSchema } from './TblTitAuthorsListRelationFilter.schema';
import { TblTitAuxNullableScalarRelationFilterObjectSchema as TblTitAuxNullableScalarRelationFilterObjectSchema } from './TblTitAuxNullableScalarRelationFilter.schema';
import { tblTitAuxWhereInputObjectSchema as tblTitAuxWhereInputObjectSchema } from './tblTitAuxWhereInput.schema';
import { TblTitEventsListRelationFilterObjectSchema as TblTitEventsListRelationFilterObjectSchema } from './TblTitEventsListRelationFilter.schema';
import { DictLanguagesNullableScalarRelationFilterObjectSchema as DictLanguagesNullableScalarRelationFilterObjectSchema } from './DictLanguagesNullableScalarRelationFilter.schema';
import { dictLanguagesWhereInputObjectSchema as dictLanguagesWhereInputObjectSchema } from './dictLanguagesWhereInput.schema';
import { TblCustomersNullableScalarRelationFilterObjectSchema as TblCustomersNullableScalarRelationFilterObjectSchema } from './TblCustomersNullableScalarRelationFilter.schema';
import { tblCustomersWhereInputObjectSchema as tblCustomersWhereInputObjectSchema } from './tblCustomersWhereInput.schema';
import { DictTitMainClassNullableScalarRelationFilterObjectSchema as DictTitMainClassNullableScalarRelationFilterObjectSchema } from './DictTitMainClassNullableScalarRelationFilter.schema';
import { dictTitMainClassWhereInputObjectSchema as dictTitMainClassWhereInputObjectSchema } from './dictTitMainClassWhereInput.schema';
import { DictCoverFormatNullableScalarRelationFilterObjectSchema as DictCoverFormatNullableScalarRelationFilterObjectSchema } from './DictCoverFormatNullableScalarRelationFilter.schema';
import { dictCoverFormatWhereInputObjectSchema as dictCoverFormatWhereInputObjectSchema } from './dictCoverFormatWhereInput.schema';
import { TblTitSubClassListRelationFilterObjectSchema as TblTitSubClassListRelationFilterObjectSchema } from './TblTitSubClassListRelationFilter.schema'

const tbltitleswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblTitlesWhereInputObjectSchema), z.lazy(() => tblTitlesWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblTitlesWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblTitlesWhereInputObjectSchema), z.lazy(() => tblTitlesWhereInputObjectSchema).array()]).optional(),
  TitleID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  CustID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  PropID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  Proprietor: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(1)]).optional().nullable(),
  LangAbb: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(3)]).optional().nullable(),
  ClassCode: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(10)]).optional().nullable(),
  CoverFormatID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  Title: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(150)]).optional(),
  ISBN1: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(5)]).optional().nullable(),
  ISBN2: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(7)]).optional().nullable(),
  ISBN3: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(6)]).optional().nullable(),
  ISBN4: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(1)]).optional().nullable(),
  SeriesIID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  Edition: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  DateOfReceipt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  NoOfPages: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  CopyrightYear: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(4)]).optional().nullable(),
  CopyrightOwner: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(1)]).optional().nullable(),
  CopyrightOwnerDesc: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(150)]).optional().nullable(),
  KeyWords: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(250)]).optional().nullable(),
  TitleVolume: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  NoOfTitleVolumes: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  Hit: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  Junk: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  CD: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  Collection: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  Remarks: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(1000)]).optional().nullable(),
  UserMod: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(30)]).optional(),
  DateMod: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  ISBN: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(20)]).optional().nullable(),
  PubID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  ProprietorDesc: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(200)]).optional().nullable(),
  ISBN0: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(3)]).optional().nullable(),
  tblAgreements: z.lazy(() => TblAgreementsListRelationFilterObjectSchema).optional(),
  tblSubmissions: z.lazy(() => TblSubmissionsListRelationFilterObjectSchema).optional(),
  tblTitAuthors: z.lazy(() => TblTitAuthorsListRelationFilterObjectSchema).optional(),
  tblTitAux: z.union([z.lazy(() => TblTitAuxNullableScalarRelationFilterObjectSchema), z.lazy(() => tblTitAuxWhereInputObjectSchema)]).optional(),
  tblTitEvents: z.lazy(() => TblTitEventsListRelationFilterObjectSchema).optional(),
  dictLanguages: z.union([z.lazy(() => DictLanguagesNullableScalarRelationFilterObjectSchema), z.lazy(() => dictLanguagesWhereInputObjectSchema)]).optional(),
  tblCustomers: z.union([z.lazy(() => TblCustomersNullableScalarRelationFilterObjectSchema), z.lazy(() => tblCustomersWhereInputObjectSchema)]).optional(),
  dictTitMainClass: z.union([z.lazy(() => DictTitMainClassNullableScalarRelationFilterObjectSchema), z.lazy(() => dictTitMainClassWhereInputObjectSchema)]).optional(),
  dictCoverFormat: z.union([z.lazy(() => DictCoverFormatNullableScalarRelationFilterObjectSchema), z.lazy(() => dictCoverFormatWhereInputObjectSchema)]).optional(),
  tblTitSubClass: z.lazy(() => TblTitSubClassListRelationFilterObjectSchema).optional()
}).strict();
export const tblTitlesWhereInputObjectSchema: z.ZodType<Prisma.tblTitlesWhereInput> = tbltitleswhereinputSchema as unknown as z.ZodType<Prisma.tblTitlesWhereInput>;
export const tblTitlesWhereInputObjectZodSchema = tbltitleswhereinputSchema;
