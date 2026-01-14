import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblSubmissionsCountOrderByAggregateInputObjectSchema as tblSubmissionsCountOrderByAggregateInputObjectSchema } from './tblSubmissionsCountOrderByAggregateInput.schema';
import { tblSubmissionsAvgOrderByAggregateInputObjectSchema as tblSubmissionsAvgOrderByAggregateInputObjectSchema } from './tblSubmissionsAvgOrderByAggregateInput.schema';
import { tblSubmissionsMaxOrderByAggregateInputObjectSchema as tblSubmissionsMaxOrderByAggregateInputObjectSchema } from './tblSubmissionsMaxOrderByAggregateInput.schema';
import { tblSubmissionsMinOrderByAggregateInputObjectSchema as tblSubmissionsMinOrderByAggregateInputObjectSchema } from './tblSubmissionsMinOrderByAggregateInput.schema';
import { tblSubmissionsSumOrderByAggregateInputObjectSchema as tblSubmissionsSumOrderByAggregateInputObjectSchema } from './tblSubmissionsSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  SubmID: SortOrderSchema.optional(),
  CopyTypeID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  SubmSentTypeID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  TitleID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  CustID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Exclusive: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  SubmDate: SortOrderSchema.optional(),
  SentDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  EndDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ReturnDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  NoOfCopies: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  TrackingNo: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  UserMod: SortOrderSchema.optional(),
  DateMod: SortOrderSchema.optional(),
  Status: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  SubmNr: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Remarks: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ContactID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => tblSubmissionsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => tblSubmissionsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => tblSubmissionsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => tblSubmissionsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => tblSubmissionsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const tblSubmissionsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.tblSubmissionsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmissionsOrderByWithAggregationInput>;
export const tblSubmissionsOrderByWithAggregationInputObjectZodSchema = makeSchema();
