import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  Login: SortOrderSchema.optional(),
  Name: SortOrderSchema.optional(),
  Value: SortOrderSchema.optional()
}).strict();
export const tblUserParamsMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblUserParamsMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserParamsMinOrderByAggregateInput>;
export const tblUserParamsMinOrderByAggregateInputObjectZodSchema = makeSchema();
