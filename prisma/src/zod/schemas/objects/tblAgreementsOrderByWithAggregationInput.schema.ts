import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblAgreementsCountOrderByAggregateInputObjectSchema as tblAgreementsCountOrderByAggregateInputObjectSchema } from './tblAgreementsCountOrderByAggregateInput.schema';
import { tblAgreementsAvgOrderByAggregateInputObjectSchema as tblAgreementsAvgOrderByAggregateInputObjectSchema } from './tblAgreementsAvgOrderByAggregateInput.schema';
import { tblAgreementsMaxOrderByAggregateInputObjectSchema as tblAgreementsMaxOrderByAggregateInputObjectSchema } from './tblAgreementsMaxOrderByAggregateInput.schema';
import { tblAgreementsMinOrderByAggregateInputObjectSchema as tblAgreementsMinOrderByAggregateInputObjectSchema } from './tblAgreementsMinOrderByAggregateInput.schema';
import { tblAgreementsSumOrderByAggregateInputObjectSchema as tblAgreementsSumOrderByAggregateInputObjectSchema } from './tblAgreementsSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  AgrID: SortOrderSchema.optional(),
  CustID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  CountryID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  LangAbbr: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  TitleID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  CurrID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  AgrDate: SortOrderSchema.optional(),
  ValidYY: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  PubTermMM: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  MaxNoOfCopies: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  MinNoOfCopies: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Commission: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ClientReference: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  DateMod: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  UserMod: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  GraalAgentID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  GraalShare: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  EstimatedCopyPrice: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  GraalRepresent: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Remarks: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  AgrDoc: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Status: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  CopiesToOwner: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  CopiesToGraal: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  LocalTitle: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  LocalISBN: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  LocalPubDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ClientID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  CommissionMaterials: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  AgentID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  PropID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => tblAgreementsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => tblAgreementsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => tblAgreementsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => tblAgreementsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => tblAgreementsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const tblAgreementsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.tblAgreementsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsOrderByWithAggregationInput>;
export const tblAgreementsOrderByWithAggregationInputObjectZodSchema = makeSchema();
