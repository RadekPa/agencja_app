import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  PersonID: SortOrderSchema.optional()
}).strict();
export const tblPersonLoginSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblPersonLoginSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPersonLoginSumOrderByAggregateInput>;
export const tblPersonLoginSumOrderByAggregateInputObjectZodSchema = makeSchema();
