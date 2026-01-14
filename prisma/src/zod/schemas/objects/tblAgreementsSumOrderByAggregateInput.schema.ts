import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  AgrID: SortOrderSchema.optional(),
  CustID: SortOrderSchema.optional(),
  CountryID: SortOrderSchema.optional(),
  TitleID: SortOrderSchema.optional(),
  ValidYY: SortOrderSchema.optional(),
  PubTermMM: SortOrderSchema.optional(),
  MaxNoOfCopies: SortOrderSchema.optional(),
  MinNoOfCopies: SortOrderSchema.optional(),
  Commission: SortOrderSchema.optional(),
  GraalAgentID: SortOrderSchema.optional(),
  GraalShare: SortOrderSchema.optional(),
  EstimatedCopyPrice: SortOrderSchema.optional(),
  CopiesToOwner: SortOrderSchema.optional(),
  CopiesToGraal: SortOrderSchema.optional(),
  ClientID: SortOrderSchema.optional(),
  CommissionMaterials: SortOrderSchema.optional(),
  AgentID: SortOrderSchema.optional(),
  PropID: SortOrderSchema.optional()
}).strict();
export const tblAgreementsSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblAgreementsSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsSumOrderByAggregateInput>;
export const tblAgreementsSumOrderByAggregateInputObjectZodSchema = makeSchema();
