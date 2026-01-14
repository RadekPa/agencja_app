import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  PersonID: SortOrderSchema.optional(),
  Login: SortOrderSchema.optional(),
  DateBegin: SortOrderSchema.optional(),
  DateEnd: SortOrderSchema.optional()
}).strict();
export const tblPersonLoginCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblPersonLoginCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPersonLoginCountOrderByAggregateInput>;
export const tblPersonLoginCountOrderByAggregateInputObjectZodSchema = makeSchema();
