import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema as NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { tblAgreementsUncheckedUpdateManyWithoutTblCustomersNestedInputObjectSchema as tblAgreementsUncheckedUpdateManyWithoutTblCustomersNestedInputObjectSchema } from './tblAgreementsUncheckedUpdateManyWithoutTblCustomersNestedInput.schema';
import { tblClients_obsoleteUncheckedUpdateOneWithoutTblCustomersNestedInputObjectSchema as tblClients_obsoleteUncheckedUpdateOneWithoutTblCustomersNestedInputObjectSchema } from './tblClients_obsoleteUncheckedUpdateOneWithoutTblCustomersNestedInput.schema';
import { tblCustBankUncheckedUpdateOneWithoutTblCustomersNestedInputObjectSchema as tblCustBankUncheckedUpdateOneWithoutTblCustomersNestedInputObjectSchema } from './tblCustBankUncheckedUpdateOneWithoutTblCustomersNestedInput.schema';
import { tblCustTypesUncheckedUpdateManyWithoutTblCustomersNestedInputObjectSchema as tblCustTypesUncheckedUpdateManyWithoutTblCustomersNestedInputObjectSchema } from './tblCustTypesUncheckedUpdateManyWithoutTblCustomersNestedInput.schema';
import { tblCustUsersUncheckedUpdateManyWithoutTblCustomersNestedInputObjectSchema as tblCustUsersUncheckedUpdateManyWithoutTblCustomersNestedInputObjectSchema } from './tblCustUsersUncheckedUpdateManyWithoutTblCustomersNestedInput.schema';
import { tblMailingListsUncheckedUpdateManyWithoutTblCustomersNestedInputObjectSchema as tblMailingListsUncheckedUpdateManyWithoutTblCustomersNestedInputObjectSchema } from './tblMailingListsUncheckedUpdateManyWithoutTblCustomersNestedInput.schema';
import { tblSeriesUncheckedUpdateManyWithoutTblCustomersNestedInputObjectSchema as tblSeriesUncheckedUpdateManyWithoutTblCustomersNestedInputObjectSchema } from './tblSeriesUncheckedUpdateManyWithoutTblCustomersNestedInput.schema';
import { tblSubmissionsUncheckedUpdateManyWithoutTblCustomersNestedInputObjectSchema as tblSubmissionsUncheckedUpdateManyWithoutTblCustomersNestedInputObjectSchema } from './tblSubmissionsUncheckedUpdateManyWithoutTblCustomersNestedInput.schema';
import { tblTitlesUncheckedUpdateManyWithoutTblCustomersNestedInputObjectSchema as tblTitlesUncheckedUpdateManyWithoutTblCustomersNestedInputObjectSchema } from './tblTitlesUncheckedUpdateManyWithoutTblCustomersNestedInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  CustID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  CustAbb: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Account: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  CountryID: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Address1: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Address2: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  City: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Zip: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  StateAbb: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  DefaultPhone: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  DefaultFax: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  DefaultEmail: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  DefaultWWW: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  ParentCustID: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  LangAbb: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Remarks: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  DateMod: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  UserMod: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  TaxID: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  VATID: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
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
  DefAgrDoc: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Jurisdiction: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
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
  Status: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tblAgreements: z.lazy(() => tblAgreementsUncheckedUpdateManyWithoutTblCustomersNestedInputObjectSchema).optional(),
  tblClients_obsolete: z.lazy(() => tblClients_obsoleteUncheckedUpdateOneWithoutTblCustomersNestedInputObjectSchema).optional(),
  tblCustBank: z.lazy(() => tblCustBankUncheckedUpdateOneWithoutTblCustomersNestedInputObjectSchema).optional(),
  tblCustTypes: z.lazy(() => tblCustTypesUncheckedUpdateManyWithoutTblCustomersNestedInputObjectSchema).optional(),
  tblCustUsers: z.lazy(() => tblCustUsersUncheckedUpdateManyWithoutTblCustomersNestedInputObjectSchema).optional(),
  tblMailingLists: z.lazy(() => tblMailingListsUncheckedUpdateManyWithoutTblCustomersNestedInputObjectSchema).optional(),
  tblSeries: z.lazy(() => tblSeriesUncheckedUpdateManyWithoutTblCustomersNestedInputObjectSchema).optional(),
  tblSubmissions: z.lazy(() => tblSubmissionsUncheckedUpdateManyWithoutTblCustomersNestedInputObjectSchema).optional(),
  tblTitles: z.lazy(() => tblTitlesUncheckedUpdateManyWithoutTblCustomersNestedInputObjectSchema).optional()
}).strict();
export const tblCustomersUncheckedUpdateWithoutTblCustContactsInputObjectSchema: z.ZodType<Prisma.tblCustomersUncheckedUpdateWithoutTblCustContactsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersUncheckedUpdateWithoutTblCustContactsInput>;
export const tblCustomersUncheckedUpdateWithoutTblCustContactsInputObjectZodSchema = makeSchema();
