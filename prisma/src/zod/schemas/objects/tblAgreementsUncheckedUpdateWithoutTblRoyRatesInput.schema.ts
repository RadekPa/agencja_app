import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema as NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema as NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema as NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { tblAdvanceUncheckedUpdateManyWithoutTblAgreementsNestedInputObjectSchema as tblAdvanceUncheckedUpdateManyWithoutTblAgreementsNestedInputObjectSchema } from './tblAdvanceUncheckedUpdateManyWithoutTblAgreementsNestedInput.schema';
import { tblAgrEventsUncheckedUpdateManyWithoutTblAgreementsNestedInputObjectSchema as tblAgrEventsUncheckedUpdateManyWithoutTblAgreementsNestedInputObjectSchema } from './tblAgrEventsUncheckedUpdateManyWithoutTblAgreementsNestedInput.schema';
import { tblAgrRightsUncheckedUpdateManyWithoutTblAgreementsNestedInputObjectSchema as tblAgrRightsUncheckedUpdateManyWithoutTblAgreementsNestedInputObjectSchema } from './tblAgrRightsUncheckedUpdateManyWithoutTblAgreementsNestedInput.schema';
import { tblPubLocalUncheckedUpdateManyWithoutTblAgreementsNestedInputObjectSchema as tblPubLocalUncheckedUpdateManyWithoutTblAgreementsNestedInputObjectSchema } from './tblPubLocalUncheckedUpdateManyWithoutTblAgreementsNestedInput.schema';
import { tblRoyaltyUncheckedUpdateManyWithoutTblAgreementsNestedInputObjectSchema as tblRoyaltyUncheckedUpdateManyWithoutTblAgreementsNestedInputObjectSchema } from './tblRoyaltyUncheckedUpdateManyWithoutTblAgreementsNestedInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  AgrID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  CustID: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  CountryID: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  LangAbbr: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  TitleID: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  CurrID: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  AgrDate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  ValidYY: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  PubTermMM: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  MaxNoOfCopies: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  MinNoOfCopies: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Commission: z.union([z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'Commission' must be a Decimal",
}), z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  ClientReference: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  DateMod: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  UserMod: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  GraalAgentID: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  GraalShare: z.union([z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'GraalShare' must be a Decimal",
}), z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  EstimatedCopyPrice: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  GraalRepresent: z.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Remarks: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  AgrDoc: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Status: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  CopiesToOwner: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  CopiesToGraal: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  LocalTitle: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  LocalISBN: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  LocalPubDate: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  ClientID: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  CommissionMaterials: z.union([z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'CommissionMaterials' must be a Decimal",
}), z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  AgentID: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  PropID: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tblAdvance: z.lazy(() => tblAdvanceUncheckedUpdateManyWithoutTblAgreementsNestedInputObjectSchema).optional(),
  tblAgrEvents: z.lazy(() => tblAgrEventsUncheckedUpdateManyWithoutTblAgreementsNestedInputObjectSchema).optional(),
  tblAgrRights: z.lazy(() => tblAgrRightsUncheckedUpdateManyWithoutTblAgreementsNestedInputObjectSchema).optional(),
  tblPubLocal: z.lazy(() => tblPubLocalUncheckedUpdateManyWithoutTblAgreementsNestedInputObjectSchema).optional(),
  tblRoyalty: z.lazy(() => tblRoyaltyUncheckedUpdateManyWithoutTblAgreementsNestedInputObjectSchema).optional()
}).strict();
export const tblAgreementsUncheckedUpdateWithoutTblRoyRatesInputObjectSchema: z.ZodType<Prisma.tblAgreementsUncheckedUpdateWithoutTblRoyRatesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsUncheckedUpdateWithoutTblRoyRatesInput>;
export const tblAgreementsUncheckedUpdateWithoutTblRoyRatesInputObjectZodSchema = makeSchema();
