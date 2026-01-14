import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  CustTypeID: SortOrderSchema.optional(),
  CustTypeName: SortOrderSchema.optional(),
  CustTypeDesc: SortOrderSchema.optional()
}).strict();
export const dictCustTypesMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictCustTypesMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCustTypesMinOrderByAggregateInput>;
export const dictCustTypesMinOrderByAggregateInputObjectZodSchema = makeSchema();
