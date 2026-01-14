import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DecimalNullableFilterObjectSchema as DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { BoolNullableFilterObjectSchema as BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { TblAdvanceListRelationFilterObjectSchema as TblAdvanceListRelationFilterObjectSchema } from './TblAdvanceListRelationFilter.schema';
import { DictCurrenciesNullableScalarRelationFilterObjectSchema as DictCurrenciesNullableScalarRelationFilterObjectSchema } from './DictCurrenciesNullableScalarRelationFilter.schema';
import { dictCurrenciesWhereInputObjectSchema as dictCurrenciesWhereInputObjectSchema } from './dictCurrenciesWhereInput.schema';
import { TblTitlesNullableScalarRelationFilterObjectSchema as TblTitlesNullableScalarRelationFilterObjectSchema } from './TblTitlesNullableScalarRelationFilter.schema';
import { tblTitlesWhereInputObjectSchema as tblTitlesWhereInputObjectSchema } from './tblTitlesWhereInput.schema';
import { DictLanguagesNullableScalarRelationFilterObjectSchema as DictLanguagesNullableScalarRelationFilterObjectSchema } from './DictLanguagesNullableScalarRelationFilter.schema';
import { dictLanguagesWhereInputObjectSchema as dictLanguagesWhereInputObjectSchema } from './dictLanguagesWhereInput.schema';
import { TblCustomersNullableScalarRelationFilterObjectSchema as TblCustomersNullableScalarRelationFilterObjectSchema } from './TblCustomersNullableScalarRelationFilter.schema';
import { tblCustomersWhereInputObjectSchema as tblCustomersWhereInputObjectSchema } from './tblCustomersWhereInput.schema';
import { DictCountries_oldNullableScalarRelationFilterObjectSchema as DictCountries_oldNullableScalarRelationFilterObjectSchema } from './DictCountries_oldNullableScalarRelationFilter.schema';
import { dictCountries_oldWhereInputObjectSchema as dictCountries_oldWhereInputObjectSchema } from './dictCountries_oldWhereInput.schema';
import { TblAgrEventsListRelationFilterObjectSchema as TblAgrEventsListRelationFilterObjectSchema } from './TblAgrEventsListRelationFilter.schema';
import { TblAgrRightsListRelationFilterObjectSchema as TblAgrRightsListRelationFilterObjectSchema } from './TblAgrRightsListRelationFilter.schema';
import { TblPubLocalListRelationFilterObjectSchema as TblPubLocalListRelationFilterObjectSchema } from './TblPubLocalListRelationFilter.schema';
import { TblRoyaltyListRelationFilterObjectSchema as TblRoyaltyListRelationFilterObjectSchema } from './TblRoyaltyListRelationFilter.schema';
import { TblRoyRatesListRelationFilterObjectSchema as TblRoyRatesListRelationFilterObjectSchema } from './TblRoyRatesListRelationFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const tblagreementswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblAgreementsWhereInputObjectSchema), z.lazy(() => tblAgreementsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblAgreementsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblAgreementsWhereInputObjectSchema), z.lazy(() => tblAgreementsWhereInputObjectSchema).array()]).optional(),
  AgrID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  CustID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  CountryID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  LangAbbr: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(3)]).optional().nullable(),
  TitleID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  CurrID: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(3)]).optional().nullable(),
  AgrDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  ValidYY: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  PubTermMM: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  MaxNoOfCopies: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  MinNoOfCopies: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  Commission: z.union([z.lazy(() => DecimalNullableFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'Commission' must be a Decimal",
})]).optional().nullable(),
  ClientReference: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  DateMod: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  UserMod: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(30)]).optional().nullable(),
  GraalAgentID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  GraalShare: z.union([z.lazy(() => DecimalNullableFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'GraalShare' must be a Decimal",
})]).optional().nullable(),
  EstimatedCopyPrice: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  GraalRepresent: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  Remarks: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(1000)]).optional().nullable(),
  AgrDoc: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(250)]).optional().nullable(),
  Status: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(1)]).optional().nullable(),
  CopiesToOwner: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  CopiesToGraal: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  LocalTitle: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(150)]).optional().nullable(),
  LocalISBN: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(16)]).optional().nullable(),
  LocalPubDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  ClientID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  CommissionMaterials: z.union([z.lazy(() => DecimalNullableFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'CommissionMaterials' must be a Decimal",
})]).optional().nullable(),
  AgentID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  PropID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  tblAdvance: z.lazy(() => TblAdvanceListRelationFilterObjectSchema).optional(),
  dictCurrencies: z.union([z.lazy(() => DictCurrenciesNullableScalarRelationFilterObjectSchema), z.lazy(() => dictCurrenciesWhereInputObjectSchema)]).optional(),
  tblTitles: z.union([z.lazy(() => TblTitlesNullableScalarRelationFilterObjectSchema), z.lazy(() => tblTitlesWhereInputObjectSchema)]).optional(),
  dictLanguages: z.union([z.lazy(() => DictLanguagesNullableScalarRelationFilterObjectSchema), z.lazy(() => dictLanguagesWhereInputObjectSchema)]).optional(),
  tblCustomers: z.union([z.lazy(() => TblCustomersNullableScalarRelationFilterObjectSchema), z.lazy(() => tblCustomersWhereInputObjectSchema)]).optional(),
  dictCountries_old: z.union([z.lazy(() => DictCountries_oldNullableScalarRelationFilterObjectSchema), z.lazy(() => dictCountries_oldWhereInputObjectSchema)]).optional(),
  tblAgrEvents: z.lazy(() => TblAgrEventsListRelationFilterObjectSchema).optional(),
  tblAgrRights: z.lazy(() => TblAgrRightsListRelationFilterObjectSchema).optional(),
  tblPubLocal: z.lazy(() => TblPubLocalListRelationFilterObjectSchema).optional(),
  tblRoyalty: z.lazy(() => TblRoyaltyListRelationFilterObjectSchema).optional(),
  tblRoyRates: z.lazy(() => TblRoyRatesListRelationFilterObjectSchema).optional()
}).strict();
export const tblAgreementsWhereInputObjectSchema: z.ZodType<Prisma.tblAgreementsWhereInput> = tblagreementswhereinputSchema as unknown as z.ZodType<Prisma.tblAgreementsWhereInput>;
export const tblAgreementsWhereInputObjectZodSchema = tblagreementswhereinputSchema;
