import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  CustTypeID: SortOrderSchema.optional()
}).strict();
export const dictCustTypesAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictCustTypesAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCustTypesAvgOrderByAggregateInput>;
export const dictCustTypesAvgOrderByAggregateInputObjectZodSchema = makeSchema();
