import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  TitEventID: SortOrderSchema.optional(),
  CopyTypeID: SortOrderSchema.optional(),
  EventCode: SortOrderSchema.optional(),
  TitleID: SortOrderSchema.optional(),
  NoOfCopies: SortOrderSchema.optional()
}).strict();
export const tblTitEventsAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblTitEventsAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitEventsAvgOrderByAggregateInput>;
export const tblTitEventsAvgOrderByAggregateInputObjectZodSchema = makeSchema();
