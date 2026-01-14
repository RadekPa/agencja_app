import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  CustID: SortOrderSchema.optional(),
  CustTypeID: SortOrderSchema.optional()
}).strict();
export const tblCustTypesMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblCustTypesMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustTypesMinOrderByAggregateInput>;
export const tblCustTypesMinOrderByAggregateInputObjectZodSchema = makeSchema();
