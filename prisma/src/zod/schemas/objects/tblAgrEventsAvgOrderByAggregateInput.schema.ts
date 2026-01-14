import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  AgrEventID: SortOrderSchema.optional(),
  AgrID: SortOrderSchema.optional(),
  AgrEventCode: SortOrderSchema.optional(),
  NoOfCopies: SortOrderSchema.optional()
}).strict();
export const tblAgrEventsAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblAgrEventsAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrEventsAvgOrderByAggregateInput>;
export const tblAgrEventsAvgOrderByAggregateInputObjectZodSchema = makeSchema();
