import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  PersonID: SortOrderSchema.optional(),
  Login: SortOrderSchema.optional(),
  DateBegin: SortOrderSchema.optional(),
  DateEnd: SortOrderSchema.optional()
}).strict();
export const tblPersonLoginMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblPersonLoginMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPersonLoginMinOrderByAggregateInput>;
export const tblPersonLoginMinOrderByAggregateInputObjectZodSchema = makeSchema();
