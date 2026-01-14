import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  PersonID: SortOrderSchema.optional()
}).strict();
export const tblPersonAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblPersonAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPersonAvgOrderByAggregateInput>;
export const tblPersonAvgOrderByAggregateInputObjectZodSchema = makeSchema();
