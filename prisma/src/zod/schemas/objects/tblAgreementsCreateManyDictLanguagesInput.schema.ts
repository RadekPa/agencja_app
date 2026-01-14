import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';


import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  CustID: z.number().int().optional().nullable(),
  CountryID: z.number().int().optional().nullable(),
  TitleID: z.number().int().optional().nullable(),
  CurrID: z.string().max(3).optional().nullable(),
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
  PropID: z.number().int().optional().nullable()
}).strict();
export const tblAgreementsCreateManyDictLanguagesInputObjectSchema: z.ZodType<Prisma.tblAgreementsCreateManyDictLanguagesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsCreateManyDictLanguagesInput>;
export const tblAgreementsCreateManyDictLanguagesInputObjectZodSchema = makeSchema();
