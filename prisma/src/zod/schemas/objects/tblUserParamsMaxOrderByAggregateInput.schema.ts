import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  Login: SortOrderSchema.optional(),
  Name: SortOrderSchema.optional(),
  Value: SortOrderSchema.optional()
}).strict();
export const tblUserParamsMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblUserParamsMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserParamsMaxOrderByAggregateInput>;
export const tblUserParamsMaxOrderByAggregateInputObjectZodSchema = makeSchema();
