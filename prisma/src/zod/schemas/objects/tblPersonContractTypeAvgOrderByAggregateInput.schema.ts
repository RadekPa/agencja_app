import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  CTypeID: SortOrderSchema.optional()
}).strict();
export const tblPersonContractTypeAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblPersonContractTypeAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPersonContractTypeAvgOrderByAggregateInput>;
export const tblPersonContractTypeAvgOrderByAggregateInputObjectZodSchema = makeSchema();
