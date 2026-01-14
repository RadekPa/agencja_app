import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CustID: z.literal(true).optional(),
  CustAbb: z.literal(true).optional(),
  Account: z.literal(true).optional(),
  CountryID: z.literal(true).optional(),
  Name: z.literal(true).optional(),
  Address1: z.literal(true).optional(),
  Address2: z.literal(true).optional(),
  City: z.literal(true).optional(),
  Zip: z.literal(true).optional(),
  StateAbb: z.literal(true).optional(),
  DefaultPhone: z.literal(true).optional(),
  DefaultFax: z.literal(true).optional(),
  DefaultEmail: z.literal(true).optional(),
  DefaultWWW: z.literal(true).optional(),
  ParentCustID: z.literal(true).optional(),
  LangAbb: z.literal(true).optional(),
  Remarks: z.literal(true).optional(),
  DateMod: z.literal(true).optional(),
  UserMod: z.literal(true).optional(),
  TaxID: z.literal(true).optional(),
  VATID: z.literal(true).optional(),
  RepModeID: z.literal(true).optional(),
  GraalID: z.literal(true).optional(),
  Commission: z.literal(true).optional(),
  DefAgrDoc: z.literal(true).optional(),
  Jurisdiction: z.literal(true).optional(),
  CommissionForeign: z.literal(true).optional(),
  CommissionMaterials: z.literal(true).optional(),
  Status: z.literal(true).optional()
}).strict();
export const TblCustomersMinAggregateInputObjectSchema: z.ZodType<Prisma.TblCustomersMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblCustomersMinAggregateInputType>;
export const TblCustomersMinAggregateInputObjectZodSchema = makeSchema();
