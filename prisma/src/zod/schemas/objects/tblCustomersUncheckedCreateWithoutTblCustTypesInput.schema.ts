import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { tblAgreementsUncheckedCreateNestedManyWithoutTblCustomersInputObjectSchema as tblAgreementsUncheckedCreateNestedManyWithoutTblCustomersInputObjectSchema } from './tblAgreementsUncheckedCreateNestedManyWithoutTblCustomersInput.schema';
import { tblClients_obsoleteUncheckedCreateNestedOneWithoutTblCustomersInputObjectSchema as tblClients_obsoleteUncheckedCreateNestedOneWithoutTblCustomersInputObjectSchema } from './tblClients_obsoleteUncheckedCreateNestedOneWithoutTblCustomersInput.schema';
import { tblCustBankUncheckedCreateNestedOneWithoutTblCustomersInputObjectSchema as tblCustBankUncheckedCreateNestedOneWithoutTblCustomersInputObjectSchema } from './tblCustBankUncheckedCreateNestedOneWithoutTblCustomersInput.schema';
import { tblCustContactsUncheckedCreateNestedManyWithoutTblCustomersInputObjectSchema as tblCustContactsUncheckedCreateNestedManyWithoutTblCustomersInputObjectSchema } from './tblCustContactsUncheckedCreateNestedManyWithoutTblCustomersInput.schema';
import { tblCustUsersUncheckedCreateNestedManyWithoutTblCustomersInputObjectSchema as tblCustUsersUncheckedCreateNestedManyWithoutTblCustomersInputObjectSchema } from './tblCustUsersUncheckedCreateNestedManyWithoutTblCustomersInput.schema';
import { tblMailingListsUncheckedCreateNestedManyWithoutTblCustomersInputObjectSchema as tblMailingListsUncheckedCreateNestedManyWithoutTblCustomersInputObjectSchema } from './tblMailingListsUncheckedCreateNestedManyWithoutTblCustomersInput.schema';
import { tblSeriesUncheckedCreateNestedManyWithoutTblCustomersInputObjectSchema as tblSeriesUncheckedCreateNestedManyWithoutTblCustomersInputObjectSchema } from './tblSeriesUncheckedCreateNestedManyWithoutTblCustomersInput.schema';
import { tblSubmissionsUncheckedCreateNestedManyWithoutTblCustomersInputObjectSchema as tblSubmissionsUncheckedCreateNestedManyWithoutTblCustomersInputObjectSchema } from './tblSubmissionsUncheckedCreateNestedManyWithoutTblCustomersInput.schema';
import { tblTitlesUncheckedCreateNestedManyWithoutTblCustomersInputObjectSchema as tblTitlesUncheckedCreateNestedManyWithoutTblCustomersInputObjectSchema } from './tblTitlesUncheckedCreateNestedManyWithoutTblCustomersInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  CustID: z.number().int().optional(),
  CustAbb: z.string().optional().nullable(),
  Account: z.number().int().optional().nullable(),
  CountryID: z.number().int().optional().nullable(),
  Name: z.string().optional().nullable(),
  Address1: z.string().optional().nullable(),
  Address2: z.string().optional().nullable(),
  City: z.string().optional().nullable(),
  Zip: z.string().optional().nullable(),
  StateAbb: z.string().optional().nullable(),
  DefaultPhone: z.string().optional().nullable(),
  DefaultFax: z.string().optional().nullable(),
  DefaultEmail: z.string().optional().nullable(),
  DefaultWWW: z.string().optional().nullable(),
  ParentCustID: z.number().int().optional().nullable(),
  LangAbb: z.string().optional().nullable(),
  Remarks: z.string().optional().nullable(),
  DateMod: z.coerce.date().optional().nullable(),
  UserMod: z.string().optional().nullable(),
  TaxID: z.string().optional().nullable(),
  VATID: z.string().optional().nullable(),
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
  DefAgrDoc: z.string().optional().nullable(),
  Jurisdiction: z.string().optional().nullable(),
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
  Status: z.string().optional().nullable(),
  tblAgreements: z.lazy(() => tblAgreementsUncheckedCreateNestedManyWithoutTblCustomersInputObjectSchema).optional(),
  tblClients_obsolete: z.lazy(() => tblClients_obsoleteUncheckedCreateNestedOneWithoutTblCustomersInputObjectSchema).optional(),
  tblCustBank: z.lazy(() => tblCustBankUncheckedCreateNestedOneWithoutTblCustomersInputObjectSchema).optional(),
  tblCustContacts: z.lazy(() => tblCustContactsUncheckedCreateNestedManyWithoutTblCustomersInputObjectSchema).optional(),
  tblCustUsers: z.lazy(() => tblCustUsersUncheckedCreateNestedManyWithoutTblCustomersInputObjectSchema).optional(),
  tblMailingLists: z.lazy(() => tblMailingListsUncheckedCreateNestedManyWithoutTblCustomersInputObjectSchema).optional(),
  tblSeries: z.lazy(() => tblSeriesUncheckedCreateNestedManyWithoutTblCustomersInputObjectSchema).optional(),
  tblSubmissions: z.lazy(() => tblSubmissionsUncheckedCreateNestedManyWithoutTblCustomersInputObjectSchema).optional(),
  tblTitles: z.lazy(() => tblTitlesUncheckedCreateNestedManyWithoutTblCustomersInputObjectSchema).optional()
}).strict();
export const tblCustomersUncheckedCreateWithoutTblCustTypesInputObjectSchema: z.ZodType<Prisma.tblCustomersUncheckedCreateWithoutTblCustTypesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersUncheckedCreateWithoutTblCustTypesInput>;
export const tblCustomersUncheckedCreateWithoutTblCustTypesInputObjectZodSchema = makeSchema();
