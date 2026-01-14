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
export const tblSubmissionsAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblSubmissionsAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmissionsAvgOrderByAggregateInput>;
export const tblSubmissionsAvgOrderByAggregateInputObjectZodSchema = makeSchema();
