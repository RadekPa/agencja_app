import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  AccountID: SortOrderSchema.optional()
}).strict();
export const ArAccountSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ArAccountSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ArAccountSumOrderByAggregateInput>;
export const ArAccountSumOrderByAggregateInputObjectZodSchema = makeSchema();
