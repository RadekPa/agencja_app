import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  Login: SortOrderSchema.optional(),
  Name: SortOrderSchema.optional(),
  Value: SortOrderSchema.optional()
}).strict();
export const tblUserParamsCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblUserParamsCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserParamsCountOrderByAggregateInput>;
export const tblUserParamsCountOrderByAggregateInputObjectZodSchema = makeSchema();
