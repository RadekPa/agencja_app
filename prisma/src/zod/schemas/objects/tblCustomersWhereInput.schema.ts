import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DecimalNullableFilterObjectSchema as DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';
import { TblAgreementsListRelationFilterObjectSchema as TblAgreementsListRelationFilterObjectSchema } from './TblAgreementsListRelationFilter.schema';
import { TblClients_obsoleteNullableScalarRelationFilterObjectSchema as TblClients_obsoleteNullableScalarRelationFilterObjectSchema } from './TblClients_obsoleteNullableScalarRelationFilter.schema';
import { tblClients_obsoleteWhereInputObjectSchema as tblClients_obsoleteWhereInputObjectSchema } from './tblClients_obsoleteWhereInput.schema';
import { TblCustBankNullableScalarRelationFilterObjectSchema as TblCustBankNullableScalarRelationFilterObjectSchema } from './TblCustBankNullableScalarRelationFilter.schema';
import { tblCustBankWhereInputObjectSchema as tblCustBankWhereInputObjectSchema } from './tblCustBankWhereInput.schema';
import { TblCustContactsListRelationFilterObjectSchema as TblCustContactsListRelationFilterObjectSchema } from './TblCustContactsListRelationFilter.schema';
import { DictLanguagesNullableScalarRelationFilterObjectSchema as DictLanguagesNullableScalarRelationFilterObjectSchema } from './DictLanguagesNullableScalarRelationFilter.schema';
import { dictLanguagesWhereInputObjectSchema as dictLanguagesWhereInputObjectSchema } from './dictLanguagesWhereInput.schema';
import { DictStatesNullableScalarRelationFilterObjectSchema as DictStatesNullableScalarRelationFilterObjectSchema } from './DictStatesNullableScalarRelationFilter.schema';
import { dictStatesWhereInputObjectSchema as dictStatesWhereInputObjectSchema } from './dictStatesWhereInput.schema';
import { TblCustTypesListRelationFilterObjectSchema as TblCustTypesListRelationFilterObjectSchema } from './TblCustTypesListRelationFilter.schema';
import { TblCustUsersListRelationFilterObjectSchema as TblCustUsersListRelationFilterObjectSchema } from './TblCustUsersListRelationFilter.schema';
import { TblMailingListsListRelationFilterObjectSchema as TblMailingListsListRelationFilterObjectSchema } from './TblMailingListsListRelationFilter.schema';
import { TblSeriesListRelationFilterObjectSchema as TblSeriesListRelationFilterObjectSchema } from './TblSeriesListRelationFilter.schema';
import { TblSubmissionsListRelationFilterObjectSchema as TblSubmissionsListRelationFilterObjectSchema } from './TblSubmissionsListRelationFilter.schema';
import { TblTitlesListRelationFilterObjectSchema as TblTitlesListRelationFilterObjectSchema } from './TblTitlesListRelationFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const tblcustomerswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblCustomersWhereInputObjectSchema), z.lazy(() => tblCustomersWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblCustomersWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblCustomersWhereInputObjectSchema), z.lazy(() => tblCustomersWhereInputObjectSchema).array()]).optional(),
  CustID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  CustAbb: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(10)]).optional().nullable(),
  Account: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  CountryID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  Name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(250)]).optional().nullable(),
  Address1: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(150)]).optional().nullable(),
  Address2: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(150)]).optional().nullable(),
  City: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  Zip: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  StateAbb: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(2)]).optional().nullable(),
  DefaultPhone: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(20)]).optional().nullable(),
  DefaultFax: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  DefaultEmail: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  DefaultWWW: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(100)]).optional().nullable(),
  ParentCustID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  LangAbb: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(3)]).optional().nullable(),
  Remarks: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(250)]).optional().nullable(),
  DateMod: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  UserMod: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(30)]).optional().nullable(),
  TaxID: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  VATID: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  RepModeID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  GraalID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  Commission: z.union([z.lazy(() => DecimalNullableFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'Commission' must be a Decimal",
})]).optional().nullable(),
  DefAgrDoc: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(30)]).optional().nullable(),
  Jurisdiction: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(200)]).optional().nullable(),
  CommissionForeign: z.union([z.lazy(() => DecimalNullableFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'CommissionForeign' must be a Decimal",
})]).optional().nullable(),
  CommissionMaterials: z.union([z.lazy(() => DecimalNullableFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'CommissionMaterials' must be a Decimal",
})]).optional().nullable(),
  Status: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(1)]).optional().nullable(),
  tblAgreements: z.lazy(() => TblAgreementsListRelationFilterObjectSchema).optional(),
  tblClients_obsolete: z.union([z.lazy(() => TblClients_obsoleteNullableScalarRelationFilterObjectSchema), z.lazy(() => tblClients_obsoleteWhereInputObjectSchema)]).optional(),
  tblCustBank: z.union([z.lazy(() => TblCustBankNullableScalarRelationFilterObjectSchema), z.lazy(() => tblCustBankWhereInputObjectSchema)]).optional(),
  tblCustContacts: z.lazy(() => TblCustContactsListRelationFilterObjectSchema).optional(),
  dictLanguages: z.union([z.lazy(() => DictLanguagesNullableScalarRelationFilterObjectSchema), z.lazy(() => dictLanguagesWhereInputObjectSchema)]).optional(),
  dictStates: z.union([z.lazy(() => DictStatesNullableScalarRelationFilterObjectSchema), z.lazy(() => dictStatesWhereInputObjectSchema)]).optional(),
  tblCustTypes: z.lazy(() => TblCustTypesListRelationFilterObjectSchema).optional(),
  tblCustUsers: z.lazy(() => TblCustUsersListRelationFilterObjectSchema).optional(),
  tblMailingLists: z.lazy(() => TblMailingListsListRelationFilterObjectSchema).optional(),
  tblSeries: z.lazy(() => TblSeriesListRelationFilterObjectSchema).optional(),
  tblSubmissions: z.lazy(() => TblSubmissionsListRelationFilterObjectSchema).optional(),
  tblTitles: z.lazy(() => TblTitlesListRelationFilterObjectSchema).optional()
}).strict();
export const tblCustomersWhereInputObjectSchema: z.ZodType<Prisma.tblCustomersWhereInput> = tblcustomerswhereinputSchema as unknown as z.ZodType<Prisma.tblCustomersWhereInput>;
export const tblCustomersWhereInputObjectZodSchema = tblcustomerswhereinputSchema;
