import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  SubmID: SortOrderSchema.optional(),
  CopyTypeID: SortOrderSchema.optional(),
  SubmSentTypeID: SortOrderSchema.optional(),
  TitleID: SortOrderSchema.optional(),
  CustID: SortOrderSchema.optional(),
  Exclusive: SortOrderSchema.optional(),
  SubmDate: SortOrderSchema.optional(),
  SentDate: SortOrderSchema.optional(),
  EndDate: SortOrderSchema.optional(),
  ReturnDate: SortOrderSchema.optional(),
  NoOfCopies: SortOrderSchema.optional(),
  TrackingNo: SortOrderSchema.optional(),
  UserMod: SortOrderSchema.optional(),
  DateMod: SortOrderSchema.optional(),
  Status: SortOrderSchema.optional(),
  SubmNr: SortOrderSchema.optional(),
  Remarks: SortOrderSchema.optional(),
  ContactID: SortOrderSchema.optional()
}).strict();
export const tblSubmissionsMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblSubmissionsMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmissionsMaxOrderByAggregateInput>;
export const tblSubmissionsMaxOrderByAggregateInputObjectZodSchema = makeSchema();
