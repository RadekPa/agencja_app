import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  AgrID: SortOrderSchema.optional(),
  CustID: SortOrderSchema.optional(),
  CountryID: SortOrderSchema.optional(),
  LangAbbr: SortOrderSchema.optional(),
  TitleID: SortOrderSchema.optional(),
  CurrID: SortOrderSchema.optional(),
  AgrDate: SortOrderSchema.optional(),
  ValidYY: SortOrderSchema.optional(),
  PubTermMM: SortOrderSchema.optional(),
  MaxNoOfCopies: SortOrderSchema.optional(),
  MinNoOfCopies: SortOrderSchema.optional(),
  Commission: SortOrderSchema.optional(),
  ClientReference: SortOrderSchema.optional(),
  DateMod: SortOrderSchema.optional(),
  UserMod: SortOrderSchema.optional(),
  GraalAgentID: SortOrderSchema.optional(),
  GraalShare: SortOrderSchema.optional(),
  EstimatedCopyPrice: SortOrderSchema.optional(),
  GraalRepresent: SortOrderSchema.optional(),
  Remarks: SortOrderSchema.optional(),
  AgrDoc: SortOrderSchema.optional(),
  Status: SortOrderSchema.optional(),
  CopiesToOwner: SortOrderSchema.optional(),
  CopiesToGraal: SortOrderSchema.optional(),
  LocalTitle: SortOrderSchema.optional(),
  LocalISBN: SortOrderSchema.optional(),
  LocalPubDate: SortOrderSchema.optional(),
  ClientID: SortOrderSchema.optional(),
  CommissionMaterials: SortOrderSchema.optional(),
  AgentID: SortOrderSchema.optional(),
  PropID: SortOrderSchema.optional()
}).strict();
export const tblAgreementsCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblAgreementsCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsCountOrderByAggregateInput>;
export const tblAgreementsCountOrderByAggregateInputObjectZodSchema = makeSchema();
