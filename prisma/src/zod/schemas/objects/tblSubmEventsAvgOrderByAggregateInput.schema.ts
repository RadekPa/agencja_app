import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  SubmEventID: SortOrderSchema.optional(),
  SubmID: SortOrderSchema.optional(),
  EventCode: SortOrderSchema.optional(),
  NoOfCopies: SortOrderSchema.optional()
}).strict();
export const tblSubmEventsAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblSubmEventsAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmEventsAvgOrderByAggregateInput>;
export const tblSubmEventsAvgOrderByAggregateInputObjectZodSchema = makeSchema();
