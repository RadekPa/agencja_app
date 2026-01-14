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
  NoOfCopies: SortOrderSchema.optional(),
  SubmNr: SortOrderSchema.optional(),
  ContactID: SortOrderSchema.optional()
}).strict();
export const tblSubmissionsSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblSubmissionsSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmissionsSumOrderByAggregateInput>;
export const tblSubmissionsSumOrderByAggregateInputObjectZodSchema = makeSchema();
