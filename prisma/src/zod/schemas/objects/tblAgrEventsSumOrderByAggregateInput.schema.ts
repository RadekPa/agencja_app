import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  AgrEventID: SortOrderSchema.optional(),
  AgrID: SortOrderSchema.optional(),
  AgrEventCode: SortOrderSchema.optional(),
  NoOfCopies: SortOrderSchema.optional()
}).strict();
export const tblAgrEventsSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblAgrEventsSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrEventsSumOrderByAggregateInput>;
export const tblAgrEventsSumOrderByAggregateInputObjectZodSchema = makeSchema();
