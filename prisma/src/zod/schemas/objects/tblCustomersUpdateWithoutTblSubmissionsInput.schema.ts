import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema as NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { tblAgreementsUpdateManyWithoutTblCustomersNestedInputObjectSchema as tblAgreementsUpdateManyWithoutTblCustomersNestedInputObjectSchema } from './tblAgreementsUpdateManyWithoutTblCustomersNestedInput.schema';
import { tblClients_obsoleteUpdateOneWithoutTblCustomersNestedInputObjectSchema as tblClients_obsoleteUpdateOneWithoutTblCustomersNestedInputObjectSchema } from './tblClients_obsoleteUpdateOneWithoutTblCustomersNestedInput.schema';
import { tblCustBankUpdateOneWithoutTblCustomersNestedInputObjectSchema as tblCustBankUpdateOneWithoutTblCustomersNestedInputObjectSchema } from './tblCustBankUpdateOneWithoutTblCustomersNestedInput.schema';
import { tblCustContactsUpdateManyWithoutTblCustomersNestedInputObjectSchema as tblCustContactsUpdateManyWithoutTblCustomersNestedInputObjectSchema } from './tblCustContactsUpdateManyWithoutTblCustomersNestedInput.schema';
import { dictLanguagesUpdateOneWithoutTblCustomersNestedInputObjectSchema as dictLanguagesUpdateOneWithoutTblCustomersNestedInputObjectSchema } from './dictLanguagesUpdateOneWithoutTblCustomersNestedInput.schema';
import { dictStatesUpdateOneWithoutTblCustomersNestedInputObjectSchema as dictStatesUpdateOneWithoutTblCustomersNestedInputObjectSchema } from './dictStatesUpdateOneWithoutTblCustomersNestedInput.schema';
import { tblCustTypesUpdateManyWithoutTblCustomersNestedInputObjectSchema as tblCustTypesUpdateManyWithoutTblCustomersNestedInputObjectSchema } from './tblCustTypesUpdateManyWithoutTblCustomersNestedInput.schema';
import { tblCustUsersUpdateManyWithoutTblCustomersNestedInputObjectSchema as tblCustUsersUpdateManyWithoutTblCustomersNestedInputObjectSchema } from './tblCustUsersUpdateManyWithoutTblCustomersNestedInput.schema';
import { tblMailingListsUpdateManyWithoutTblCustomersNestedInputObjectSchema as tblMailingListsUpdateManyWithoutTblCustomersNestedInputObjectSchema } from './tblMailingListsUpdateManyWithoutTblCustomersNestedInput.schema';
import { tblSeriesUpdateManyWithoutTblCustomersNestedInputObjectSchema as tblSeriesUpdateManyWithoutTblCustomersNestedInputObjectSchema } from './tblSeriesUpdateManyWithoutTblCustomersNestedInput.schema';
import { tblTitlesUpdateManyWithoutTblCustomersNestedInputObjectSchema as tblTitlesUpdateManyWithoutTblCustomersNestedInputObjectSchema } from './tblTitlesUpdateManyWithoutTblCustomersNestedInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  CustAbb: z.union([z.string().max(10), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Account: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  CountryID: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Name: z.union([z.string().max(250), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Address1: z.union([z.string().max(150), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Address2: z.union([z.string().max(150), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  City: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Zip: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  DefaultPhone: z.union([z.string().max(20), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  DefaultFax: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  DefaultEmail: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  DefaultWWW: z.union([z.string().max(100), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  ParentCustID: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Remarks: z.union([z.string().max(250), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  DateMod: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  UserMod: z.union([z.string().max(30), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  TaxID: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  VATID: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  RepModeID: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  GraalID: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Commission: z.union([z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'Commission' must be a Decimal",
}), z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  DefAgrDoc: z.union([z.string().max(30), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Jurisdiction: z.union([z.string().max(200), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  CommissionForeign: z.union([z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'CommissionForeign' must be a Decimal",
}), z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  CommissionMaterials: z.union([z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'CommissionMaterials' must be a Decimal",
}), z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Status: z.union([z.string().max(1), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tblAgreements: z.lazy(() => tblAgreementsUpdateManyWithoutTblCustomersNestedInputObjectSchema).optional(),
  tblClients_obsolete: z.lazy(() => tblClients_obsoleteUpdateOneWithoutTblCustomersNestedInputObjectSchema).optional(),
  tblCustBank: z.lazy(() => tblCustBankUpdateOneWithoutTblCustomersNestedInputObjectSchema).optional(),
  tblCustContacts: z.lazy(() => tblCustContactsUpdateManyWithoutTblCustomersNestedInputObjectSchema).optional(),
  dictLanguages: z.lazy(() => dictLanguagesUpdateOneWithoutTblCustomersNestedInputObjectSchema).optional(),
  dictStates: z.lazy(() => dictStatesUpdateOneWithoutTblCustomersNestedInputObjectSchema).optional(),
  tblCustTypes: z.lazy(() => tblCustTypesUpdateManyWithoutTblCustomersNestedInputObjectSchema).optional(),
  tblCustUsers: z.lazy(() => tblCustUsersUpdateManyWithoutTblCustomersNestedInputObjectSchema).optional(),
  tblMailingLists: z.lazy(() => tblMailingListsUpdateManyWithoutTblCustomersNestedInputObjectSchema).optional(),
  tblSeries: z.lazy(() => tblSeriesUpdateManyWithoutTblCustomersNestedInputObjectSchema).optional(),
  tblTitles: z.lazy(() => tblTitlesUpdateManyWithoutTblCustomersNestedInputObjectSchema).optional()
}).strict();
export const tblCustomersUpdateWithoutTblSubmissionsInputObjectSchema: z.ZodType<Prisma.tblCustomersUpdateWithoutTblSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersUpdateWithoutTblSubmissionsInput>;
export const tblCustomersUpdateWithoutTblSubmissionsInputObjectZodSchema = makeSchema();
