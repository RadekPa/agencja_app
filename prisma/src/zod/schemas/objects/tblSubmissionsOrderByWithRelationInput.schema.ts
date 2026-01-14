import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblSubmEventsOrderByRelationAggregateInputObjectSchema as tblSubmEventsOrderByRelationAggregateInputObjectSchema } from './tblSubmEventsOrderByRelationAggregateInput.schema';
import { tblTitlesOrderByWithRelationInputObjectSchema as tblTitlesOrderByWithRelationInputObjectSchema } from './tblTitlesOrderByWithRelationInput.schema';
import { tblCustomersOrderByWithRelationInputObjectSchema as tblCustomersOrderByWithRelationInputObjectSchema } from './tblCustomersOrderByWithRelationInput.schema';
import { dictSubmSentTypeOrderByWithRelationInputObjectSchema as dictSubmSentTypeOrderByWithRelationInputObjectSchema } from './dictSubmSentTypeOrderByWithRelationInput.schema';
import { dictCopyTypeOrderByWithRelationInputObjectSchema as dictCopyTypeOrderByWithRelationInputObjectSchema } from './dictCopyTypeOrderByWithRelationInput.schema'

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
  tblSubmEvents: z.lazy(() => tblSubmEventsOrderByRelationAggregateInputObjectSchema).optional(),
  tblTitles: z.lazy(() => tblTitlesOrderByWithRelationInputObjectSchema).optional(),
  tblCustomers: z.lazy(() => tblCustomersOrderByWithRelationInputObjectSchema).optional(),
  dictSubmSentType: z.lazy(() => dictSubmSentTypeOrderByWithRelationInputObjectSchema).optional(),
  dictCopyType: z.lazy(() => dictCopyTypeOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const tblSubmissionsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.tblSubmissionsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmissionsOrderByWithRelationInput>;
export const tblSubmissionsOrderByWithRelationInputObjectZodSchema = makeSchema();
