import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { tblAdvanceCreateNestedManyWithoutTblAgreementsInputObjectSchema as tblAdvanceCreateNestedManyWithoutTblAgreementsInputObjectSchema } from './tblAdvanceCreateNestedManyWithoutTblAgreementsInput.schema';
import { dictCurrenciesCreateNestedOneWithoutTblAgreementsInputObjectSchema as dictCurrenciesCreateNestedOneWithoutTblAgreementsInputObjectSchema } from './dictCurrenciesCreateNestedOneWithoutTblAgreementsInput.schema';
import { dictLanguagesCreateNestedOneWithoutTblAgreementsInputObjectSchema as dictLanguagesCreateNestedOneWithoutTblAgreementsInputObjectSchema } from './dictLanguagesCreateNestedOneWithoutTblAgreementsInput.schema';
import { tblCustomersCreateNestedOneWithoutTblAgreementsInputObjectSchema as tblCustomersCreateNestedOneWithoutTblAgreementsInputObjectSchema } from './tblCustomersCreateNestedOneWithoutTblAgreementsInput.schema';
import { dictCountries_oldCreateNestedOneWithoutTblAgreementsInputObjectSchema as dictCountries_oldCreateNestedOneWithoutTblAgreementsInputObjectSchema } from './dictCountries_oldCreateNestedOneWithoutTblAgreementsInput.schema';
import { tblAgrEventsCreateNestedManyWithoutTblAgreementsInputObjectSchema as tblAgrEventsCreateNestedManyWithoutTblAgreementsInputObjectSchema } from './tblAgrEventsCreateNestedManyWithoutTblAgreementsInput.schema';
import { tblAgrRightsCreateNestedManyWithoutTblAgreementsInputObjectSchema as tblAgrRightsCreateNestedManyWithoutTblAgreementsInputObjectSchema } from './tblAgrRightsCreateNestedManyWithoutTblAgreementsInput.schema';
import { tblPubLocalCreateNestedManyWithoutTblAgreementsInputObjectSchema as tblPubLocalCreateNestedManyWithoutTblAgreementsInputObjectSchema } from './tblPubLocalCreateNestedManyWithoutTblAgreementsInput.schema';
import { tblRoyaltyCreateNestedManyWithoutTblAgreementsInputObjectSchema as tblRoyaltyCreateNestedManyWithoutTblAgreementsInputObjectSchema } from './tblRoyaltyCreateNestedManyWithoutTblAgreementsInput.schema';
import { tblRoyRatesCreateNestedManyWithoutTblAgreementsInputObjectSchema as tblRoyRatesCreateNestedManyWithoutTblAgreementsInputObjectSchema } from './tblRoyRatesCreateNestedManyWithoutTblAgreementsInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  AgrDate: z.coerce.date(),
  ValidYY: z.number().int().optional().nullable(),
  PubTermMM: z.number().int().optional().nullable(),
  MaxNoOfCopies: z.number().int().optional().nullable(),
  MinNoOfCopies: z.number().int().optional().nullable(),
  Commission: z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'Commission' must be a Decimal",
}).optional().nullable(),
  ClientReference: z.string().max(50).optional().nullable(),
  DateMod: z.coerce.date().optional().nullable(),
  UserMod: z.string().max(30).optional().nullable(),
  GraalAgentID: z.number().int().optional().nullable(),
  GraalShare: z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'GraalShare' must be a Decimal",
}).optional().nullable(),
  EstimatedCopyPrice: z.number().optional().nullable(),
  GraalRepresent: z.boolean().optional().nullable(),
  Remarks: z.string().max(1000).optional().nullable(),
  AgrDoc: z.string().max(250).optional().nullable(),
  Status: z.string().max(1).optional().nullable(),
  CopiesToOwner: z.number().int().optional().nullable(),
  CopiesToGraal: z.number().int().optional().nullable(),
  LocalTitle: z.string().max(150).optional().nullable(),
  LocalISBN: z.string().max(16).optional().nullable(),
  LocalPubDate: z.coerce.date().optional().nullable(),
  ClientID: z.number().int().optional().nullable(),
  CommissionMaterials: z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'CommissionMaterials' must be a Decimal",
}).optional().nullable(),
  AgentID: z.number().int().optional().nullable(),
  PropID: z.number().int().optional().nullable(),
  tblAdvance: z.lazy(() => tblAdvanceCreateNestedManyWithoutTblAgreementsInputObjectSchema).optional(),
  dictCurrencies: z.lazy(() => dictCurrenciesCreateNestedOneWithoutTblAgreementsInputObjectSchema).optional(),
  dictLanguages: z.lazy(() => dictLanguagesCreateNestedOneWithoutTblAgreementsInputObjectSchema).optional(),
  tblCustomers: z.lazy(() => tblCustomersCreateNestedOneWithoutTblAgreementsInputObjectSchema).optional(),
  dictCountries_old: z.lazy(() => dictCountries_oldCreateNestedOneWithoutTblAgreementsInputObjectSchema).optional(),
  tblAgrEvents: z.lazy(() => tblAgrEventsCreateNestedManyWithoutTblAgreementsInputObjectSchema).optional(),
  tblAgrRights: z.lazy(() => tblAgrRightsCreateNestedManyWithoutTblAgreementsInputObjectSchema).optional(),
  tblPubLocal: z.lazy(() => tblPubLocalCreateNestedManyWithoutTblAgreementsInputObjectSchema).optional(),
  tblRoyalty: z.lazy(() => tblRoyaltyCreateNestedManyWithoutTblAgreementsInputObjectSchema).optional(),
  tblRoyRates: z.lazy(() => tblRoyRatesCreateNestedManyWithoutTblAgreementsInputObjectSchema).optional()
}).strict();
export const tblAgreementsCreateWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.tblAgreementsCreateWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsCreateWithoutTblTitlesInput>;
export const tblAgreementsCreateWithoutTblTitlesInputObjectZodSchema = makeSchema();
