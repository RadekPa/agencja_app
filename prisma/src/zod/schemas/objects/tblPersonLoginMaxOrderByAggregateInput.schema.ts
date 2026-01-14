import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  PersonID: SortOrderSchema.optional(),
  Login: SortOrderSchema.optional(),
  DateBegin: SortOrderSchema.optional(),
  DateEnd: SortOrderSchema.optional()
}).strict();
export const tblPersonLoginMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblPersonLoginMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPersonLoginMaxOrderByAggregateInput>;
export const tblPersonLoginMaxOrderByAggregateInputObjectZodSchema = makeSchema();
