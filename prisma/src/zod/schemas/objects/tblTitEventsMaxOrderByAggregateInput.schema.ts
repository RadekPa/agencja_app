import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  TitEventID: SortOrderSchema.optional(),
  CopyTypeID: SortOrderSchema.optional(),
  EventCode: SortOrderSchema.optional(),
  TitleID: SortOrderSchema.optional(),
  EventDate: SortOrderSchema.optional(),
  NoOfCopies: SortOrderSchema.optional(),
  EndDate: SortOrderSchema.optional()
}).strict();
export const tblTitEventsMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblTitEventsMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitEventsMaxOrderByAggregateInput>;
export const tblTitEventsMaxOrderByAggregateInputObjectZodSchema = makeSchema();
