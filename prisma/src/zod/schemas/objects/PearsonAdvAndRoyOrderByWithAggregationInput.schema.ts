import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PearsonAdvAndRoyCountOrderByAggregateInputObjectSchema as PearsonAdvAndRoyCountOrderByAggregateInputObjectSchema } from './PearsonAdvAndRoyCountOrderByAggregateInput.schema';
import { PearsonAdvAndRoyAvgOrderByAggregateInputObjectSchema as PearsonAdvAndRoyAvgOrderByAggregateInputObjectSchema } from './PearsonAdvAndRoyAvgOrderByAggregateInput.schema';
import { PearsonAdvAndRoyMaxOrderByAggregateInputObjectSchema as PearsonAdvAndRoyMaxOrderByAggregateInputObjectSchema } from './PearsonAdvAndRoyMaxOrderByAggregateInput.schema';
import { PearsonAdvAndRoyMinOrderByAggregateInputObjectSchema as PearsonAdvAndRoyMinOrderByAggregateInputObjectSchema } from './PearsonAdvAndRoyMinOrderByAggregateInput.schema';
import { PearsonAdvAndRoySumOrderByAggregateInputObjectSchema as PearsonAdvAndRoySumOrderByAggregateInputObjectSchema } from './PearsonAdvAndRoySumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  ContractID: SortOrderSchema.optional(),
  ISBN: SortOrderSchema.optional(),
  ContractDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  PublisherName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  TermDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Status: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Title: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  AuthorNames: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Edition: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  BBD: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  CopyrightYear: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  SeriesName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  FISBN: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  IsPublished: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  SamplesReceivedDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  PubDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  RequiredToPublish: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  IsPaid: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  TotalAdvances: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  TotalRoyalties: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Last_Royalty_Period_Reported: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Date_Royalty_Paid: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => PearsonAdvAndRoyCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => PearsonAdvAndRoyAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => PearsonAdvAndRoyMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => PearsonAdvAndRoyMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => PearsonAdvAndRoySumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const PearsonAdvAndRoyOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.PearsonAdvAndRoyOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.PearsonAdvAndRoyOrderByWithAggregationInput>;
export const PearsonAdvAndRoyOrderByWithAggregationInputObjectZodSchema = makeSchema();
