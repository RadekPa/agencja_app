import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblTitlesCountOrderByAggregateInputObjectSchema as tblTitlesCountOrderByAggregateInputObjectSchema } from './tblTitlesCountOrderByAggregateInput.schema';
import { tblTitlesAvgOrderByAggregateInputObjectSchema as tblTitlesAvgOrderByAggregateInputObjectSchema } from './tblTitlesAvgOrderByAggregateInput.schema';
import { tblTitlesMaxOrderByAggregateInputObjectSchema as tblTitlesMaxOrderByAggregateInputObjectSchema } from './tblTitlesMaxOrderByAggregateInput.schema';
import { tblTitlesMinOrderByAggregateInputObjectSchema as tblTitlesMinOrderByAggregateInputObjectSchema } from './tblTitlesMinOrderByAggregateInput.schema';
import { tblTitlesSumOrderByAggregateInputObjectSchema as tblTitlesSumOrderByAggregateInputObjectSchema } from './tblTitlesSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  TitleID: SortOrderSchema.optional(),
  CustID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  PropID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Proprietor: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  LangAbb: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ClassCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  CoverFormatID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Title: SortOrderSchema.optional(),
  ISBN1: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ISBN2: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ISBN3: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ISBN4: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  SeriesIID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Edition: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  DateOfReceipt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  NoOfPages: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  CopyrightYear: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  CopyrightOwner: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  CopyrightOwnerDesc: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  KeyWords: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  TitleVolume: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  NoOfTitleVolumes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Hit: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Junk: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  CD: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Collection: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Remarks: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  UserMod: SortOrderSchema.optional(),
  DateMod: SortOrderSchema.optional(),
  ISBN: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  PubID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ProprietorDesc: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ISBN0: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => tblTitlesCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => tblTitlesAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => tblTitlesMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => tblTitlesMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => tblTitlesSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const tblTitlesOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.tblTitlesOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesOrderByWithAggregationInput>;
export const tblTitlesOrderByWithAggregationInputObjectZodSchema = makeSchema();
