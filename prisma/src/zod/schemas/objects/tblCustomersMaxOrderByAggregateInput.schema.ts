import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  CustID: SortOrderSchema.optional(),
  CustAbb: SortOrderSchema.optional(),
  Account: SortOrderSchema.optional(),
  CountryID: SortOrderSchema.optional(),
  Name: SortOrderSchema.optional(),
  Address1: SortOrderSchema.optional(),
  Address2: SortOrderSchema.optional(),
  City: SortOrderSchema.optional(),
  Zip: SortOrderSchema.optional(),
  StateAbb: SortOrderSchema.optional(),
  DefaultPhone: SortOrderSchema.optional(),
  DefaultFax: SortOrderSchema.optional(),
  DefaultEmail: SortOrderSchema.optional(),
  DefaultWWW: SortOrderSchema.optional(),
  ParentCustID: SortOrderSchema.optional(),
  LangAbb: SortOrderSchema.optional(),
  Remarks: SortOrderSchema.optional(),
  DateMod: SortOrderSchema.optional(),
  UserMod: SortOrderSchema.optional(),
  TaxID: SortOrderSchema.optional(),
  VATID: SortOrderSchema.optional(),
  RepModeID: SortOrderSchema.optional(),
  GraalID: SortOrderSchema.optional(),
  Commission: SortOrderSchema.optional(),
  DefAgrDoc: SortOrderSchema.optional(),
  Jurisdiction: SortOrderSchema.optional(),
  CommissionForeign: SortOrderSchema.optional(),
  CommissionMaterials: SortOrderSchema.optional(),
  Status: SortOrderSchema.optional()
}).strict();
export const tblCustomersMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblCustomersMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersMaxOrderByAggregateInput>;
export const tblCustomersMaxOrderByAggregateInputObjectZodSchema = makeSchema();
