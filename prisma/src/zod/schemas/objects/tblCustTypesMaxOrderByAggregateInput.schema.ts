import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  CustID: SortOrderSchema.optional(),
  CustTypeID: SortOrderSchema.optional()
}).strict();
export const tblCustTypesMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblCustTypesMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustTypesMaxOrderByAggregateInput>;
export const tblCustTypesMaxOrderByAggregateInputObjectZodSchema = makeSchema();
