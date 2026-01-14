import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  SubmEventID: SortOrderSchema.optional(),
  SubmID: SortOrderSchema.optional(),
  EventCode: SortOrderSchema.optional(),
  EventDate: SortOrderSchema.optional(),
  NoOfCopies: SortOrderSchema.optional(),
  EndDate: SortOrderSchema.optional()
}).strict();
export const tblSubmEventsMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblSubmEventsMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmEventsMaxOrderByAggregateInput>;
export const tblSubmEventsMaxOrderByAggregateInputObjectZodSchema = makeSchema();
