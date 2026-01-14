import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  ContractID: SortOrderSchema.optional(),
  ISBN: SortOrderSchema.optional(),
  ContractDate: SortOrderSchema.optional(),
  PublisherName: SortOrderSchema.optional(),
  TermDate: SortOrderSchema.optional(),
  Status: SortOrderSchema.optional(),
  Title: SortOrderSchema.optional(),
  AuthorNames: SortOrderSchema.optional(),
  Edition: SortOrderSchema.optional(),
  BBD: SortOrderSchema.optional(),
  CopyrightYear: SortOrderSchema.optional(),
  SeriesName: SortOrderSchema.optional(),
  FISBN: SortOrderSchema.optional(),
  IsPublished: SortOrderSchema.optional(),
  SamplesReceivedDate: SortOrderSchema.optional(),
  PubDate: SortOrderSchema.optional(),
  RequiredToPublish: SortOrderSchema.optional(),
  IsPaid: SortOrderSchema.optional(),
  TotalAdvances: SortOrderSchema.optional(),
  TotalRoyalties: SortOrderSchema.optional(),
  Last_Royalty_Period_Reported: SortOrderSchema.optional(),
  Date_Royalty_Paid: SortOrderSchema.optional()
}).strict();
export const PearsonAdvAndRoyMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PearsonAdvAndRoyMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PearsonAdvAndRoyMaxOrderByAggregateInput>;
export const PearsonAdvAndRoyMaxOrderByAggregateInputObjectZodSchema = makeSchema();
