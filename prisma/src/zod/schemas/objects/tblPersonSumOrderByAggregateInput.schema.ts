import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  PersonID: SortOrderSchema.optional()
}).strict();
export const tblPersonSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblPersonSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPersonSumOrderByAggregateInput>;
export const tblPersonSumOrderByAggregateInputObjectZodSchema = makeSchema();
