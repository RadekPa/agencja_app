import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { tblAgreementsCreateNestedManyWithoutTblCustomersInputObjectSchema as tblAgreementsCreateNestedManyWithoutTblCustomersInputObjectSchema } from './tblAgreementsCreateNestedManyWithoutTblCustomersInput.schema';
import { tblClients_obsoleteCreateNestedOneWithoutTblCustomersInputObjectSchema as tblClients_obsoleteCreateNestedOneWithoutTblCustomersInputObjectSchema } from './tblClients_obsoleteCreateNestedOneWithoutTblCustomersInput.schema';
import { tblCustBankCreateNestedOneWithoutTblCustomersInputObjectSchema as tblCustBankCreateNestedOneWithoutTblCustomersInputObjectSchema } from './tblCustBankCreateNestedOneWithoutTblCustomersInput.schema';
import { tblCustContactsCreateNestedManyWithoutTblCustomersInputObjectSchema as tblCustContactsCreateNestedManyWithoutTblCustomersInputObjectSchema } from './tblCustContactsCreateNestedManyWithoutTblCustomersInput.schema';
import { dictLanguagesCreateNestedOneWithoutTblCustomersInputObjectSchema as dictLanguagesCreateNestedOneWithoutTblCustomersInputObjectSchema } from './dictLanguagesCreateNestedOneWithoutTblCustomersInput.schema';
import { dictStatesCreateNestedOneWithoutTblCustomersInputObjectSchema as dictStatesCreateNestedOneWithoutTblCustomersInputObjectSchema } from './dictStatesCreateNestedOneWithoutTblCustomersInput.schema';
import { tblCustTypesCreateNestedManyWithoutTblCustomersInputObjectSchema as tblCustTypesCreateNestedManyWithoutTblCustomersInputObjectSchema } from './tblCustTypesCreateNestedManyWithoutTblCustomersInput.schema';
import { tblCustUsersCreateNestedManyWithoutTblCustomersInputObjectSchema as tblCustUsersCreateNestedManyWithoutTblCustomersInputObjectSchema } from './tblCustUsersCreateNestedManyWithoutTblCustomersInput.schema';
import { tblMailingListsCreateNestedManyWithoutTblCustomersInputObjectSchema as tblMailingListsCreateNestedManyWithoutTblCustomersInputObjectSchema } from './tblMailingListsCreateNestedManyWithoutTblCustomersInput.schema';
import { tblSubmissionsCreateNestedManyWithoutTblCustomersInputObjectSchema as tblSubmissionsCreateNestedManyWithoutTblCustomersInputObjectSchema } from './tblSubmissionsCreateNestedManyWithoutTblCustomersInput.schema';
import { tblTitlesCreateNestedManyWithoutTblCustomersInputObjectSchema as tblTitlesCreateNestedManyWithoutTblCustomersInputObjectSchema } from './tblTitlesCreateNestedManyWithoutTblCustomersInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  CustAbb: z.string().max(10).optional().nullable(),
  Account: z.number().int().optional().nullable(),
  CountryID: z.number().int().optional().nullable(),
  Name: z.string().max(250).optional().nullable(),
  Address1: z.string().max(150).optional().nullable(),
  Address2: z.string().max(150).optional().nullable(),
  City: z.string().max(50).optional().nullable(),
  Zip: z.string().max(50).optional().nullable(),
  DefaultPhone: z.string().max(20).optional().nullable(),
  DefaultFax: z.string().max(50).optional().nullable(),
  DefaultEmail: z.string().max(50).optional().nullable(),
  DefaultWWW: z.string().max(100).optional().nullable(),
  ParentCustID: z.number().int().optional().nullable(),
  Remarks: z.string().max(250).optional().nullable(),
  DateMod: z.coerce.date().optional().nullable(),
  UserMod: z.string().max(30).optional().nullable(),
  TaxID: z.string().max(50).optional().nullable(),
  VATID: z.string().max(50).optional().nullable(),
  RepModeID: z.number().int().optional().nullable(),
  GraalID: z.number().int().optional().nullable(),
  Commission: z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'Commission' must be a Decimal",
}).optional().nullable(),
  DefAgrDoc: z.string().max(30).optional().nullable(),
  Jurisdiction: z.string().max(200).optional().nullable(),
  CommissionForeign: z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'CommissionForeign' must be a Decimal",
}).optional().nullable(),
  CommissionMaterials: z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'CommissionMaterials' must be a Decimal",
}).optional().nullable(),
  Status: z.string().max(1).optional().nullable(),
  tblAgreements: z.lazy(() => tblAgreementsCreateNestedManyWithoutTblCustomersInputObjectSchema).optional(),
  tblClients_obsolete: z.lazy(() => tblClients_obsoleteCreateNestedOneWithoutTblCustomersInputObjectSchema).optional(),
  tblCustBank: z.lazy(() => tblCustBankCreateNestedOneWithoutTblCustomersInputObjectSchema).optional(),
  tblCustContacts: z.lazy(() => tblCustContactsCreateNestedManyWithoutTblCustomersInputObjectSchema).optional(),
  dictLanguages: z.lazy(() => dictLanguagesCreateNestedOneWithoutTblCustomersInputObjectSchema).optional(),
  dictStates: z.lazy(() => dictStatesCreateNestedOneWithoutTblCustomersInputObjectSchema).optional(),
  tblCustTypes: z.lazy(() => tblCustTypesCreateNestedManyWithoutTblCustomersInputObjectSchema).optional(),
  tblCustUsers: z.lazy(() => tblCustUsersCreateNestedManyWithoutTblCustomersInputObjectSchema).optional(),
  tblMailingLists: z.lazy(() => tblMailingListsCreateNestedManyWithoutTblCustomersInputObjectSchema).optional(),
  tblSubmissions: z.lazy(() => tblSubmissionsCreateNestedManyWithoutTblCustomersInputObjectSchema).optional(),
  tblTitles: z.lazy(() => tblTitlesCreateNestedManyWithoutTblCustomersInputObjectSchema).optional()
}).strict();
export const tblCustomersCreateWithoutTblSeriesInputObjectSchema: z.ZodType<Prisma.tblCustomersCreateWithoutTblSeriesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersCreateWithoutTblSeriesInput>;
export const tblCustomersCreateWithoutTblSeriesInputObjectZodSchema = makeSchema();
