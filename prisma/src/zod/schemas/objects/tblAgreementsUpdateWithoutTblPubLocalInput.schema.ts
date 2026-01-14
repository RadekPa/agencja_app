import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema as NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema as NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema as NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { tblAdvanceUpdateManyWithoutTblAgreementsNestedInputObjectSchema as tblAdvanceUpdateManyWithoutTblAgreementsNestedInputObjectSchema } from './tblAdvanceUpdateManyWithoutTblAgreementsNestedInput.schema';
import { dictCurrenciesUpdateOneWithoutTblAgreementsNestedInputObjectSchema as dictCurrenciesUpdateOneWithoutTblAgreementsNestedInputObjectSchema } from './dictCurrenciesUpdateOneWithoutTblAgreementsNestedInput.schema';
import { tblTitlesUpdateOneWithoutTblAgreementsNestedInputObjectSchema as tblTitlesUpdateOneWithoutTblAgreementsNestedInputObjectSchema } from './tblTitlesUpdateOneWithoutTblAgreementsNestedInput.schema';
import { dictLanguagesUpdateOneWithoutTblAgreementsNestedInputObjectSchema as dictLanguagesUpdateOneWithoutTblAgreementsNestedInputObjectSchema } from './dictLanguagesUpdateOneWithoutTblAgreementsNestedInput.schema';
import { tblCustomersUpdateOneWithoutTblAgreementsNestedInputObjectSchema as tblCustomersUpdateOneWithoutTblAgreementsNestedInputObjectSchema } from './tblCustomersUpdateOneWithoutTblAgreementsNestedInput.schema';
import { dictCountries_oldUpdateOneWithoutTblAgreementsNestedInputObjectSchema as dictCountries_oldUpdateOneWithoutTblAgreementsNestedInputObjectSchema } from './dictCountries_oldUpdateOneWithoutTblAgreementsNestedInput.schema';
import { tblAgrEventsUpdateManyWithoutTblAgreementsNestedInputObjectSchema as tblAgrEventsUpdateManyWithoutTblAgreementsNestedInputObjectSchema } from './tblAgrEventsUpdateManyWithoutTblAgreementsNestedInput.schema';
import { tblAgrRightsUpdateManyWithoutTblAgreementsNestedInputObjectSchema as tblAgrRightsUpdateManyWithoutTblAgreementsNestedInputObjectSchema } from './tblAgrRightsUpdateManyWithoutTblAgreementsNestedInput.schema';
import { tblRoyaltyUpdateManyWithoutTblAgreementsNestedInputObjectSchema as tblRoyaltyUpdateManyWithoutTblAgreementsNestedInputObjectSchema } from './tblRoyaltyUpdateManyWithoutTblAgreementsNestedInput.schema';
import { tblRoyRatesUpdateManyWithoutTblAgreementsNestedInputObjectSchema as tblRoyRatesUpdateManyWithoutTblAgreementsNestedInputObjectSchema } from './tblRoyRatesUpdateManyWithoutTblAgreementsNestedInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
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
  ClientReference: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  DateMod: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  UserMod: z.union([z.string().max(30), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
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
  Remarks: z.union([z.string().max(1000), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  AgrDoc: z.union([z.string().max(250), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Status: z.union([z.string().max(1), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  CopiesToOwner: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  CopiesToGraal: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  LocalTitle: z.union([z.string().max(150), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  LocalISBN: z.union([z.string().max(16), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
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
  tblAdvance: z.lazy(() => tblAdvanceUpdateManyWithoutTblAgreementsNestedInputObjectSchema).optional(),
  dictCurrencies: z.lazy(() => dictCurrenciesUpdateOneWithoutTblAgreementsNestedInputObjectSchema).optional(),
  tblTitles: z.lazy(() => tblTitlesUpdateOneWithoutTblAgreementsNestedInputObjectSchema).optional(),
  dictLanguages: z.lazy(() => dictLanguagesUpdateOneWithoutTblAgreementsNestedInputObjectSchema).optional(),
  tblCustomers: z.lazy(() => tblCustomersUpdateOneWithoutTblAgreementsNestedInputObjectSchema).optional(),
  dictCountries_old: z.lazy(() => dictCountries_oldUpdateOneWithoutTblAgreementsNestedInputObjectSchema).optional(),
  tblAgrEvents: z.lazy(() => tblAgrEventsUpdateManyWithoutTblAgreementsNestedInputObjectSchema).optional(),
  tblAgrRights: z.lazy(() => tblAgrRightsUpdateManyWithoutTblAgreementsNestedInputObjectSchema).optional(),
  tblRoyalty: z.lazy(() => tblRoyaltyUpdateManyWithoutTblAgreementsNestedInputObjectSchema).optional(),
  tblRoyRates: z.lazy(() => tblRoyRatesUpdateManyWithoutTblAgreementsNestedInputObjectSchema).optional()
}).strict();
export const tblAgreementsUpdateWithoutTblPubLocalInputObjectSchema: z.ZodType<Prisma.tblAgreementsUpdateWithoutTblPubLocalInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsUpdateWithoutTblPubLocalInput>;
export const tblAgreementsUpdateWithoutTblPubLocalInputObjectZodSchema = makeSchema();
