import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  AgrEventID: SortOrderSchema.optional(),
  AgrID: SortOrderSchema.optional(),
  AgrEventCode: SortOrderSchema.optional(),
  EventDate: SortOrderSchema.optional(),
  NoOfCopies: SortOrderSchema.optional(),
  EndDate: SortOrderSchema.optional(),
  DateMod: SortOrderSchema.optional(),
  UserMod: SortOrderSchema.optional()
}).strict();
export const tblAgrEventsCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblAgrEventsCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrEventsCountOrderByAggregateInput>;
export const tblAgrEventsCountOrderByAggregateInputObjectZodSchema = makeSchema();
