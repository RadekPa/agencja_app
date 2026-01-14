import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  PersonID: SortOrderSchema.optional()
}).strict();
export const tblPersonLoginAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblPersonLoginAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPersonLoginAvgOrderByAggregateInput>;
export const tblPersonLoginAvgOrderByAggregateInputObjectZodSchema = makeSchema();
