import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  MyNumber: SortOrderSchema.optional(),
  ContractID: SortOrderSchema.optional(),
  Amount: SortOrderSchema.optional()
}).strict();
export const PearsonMaterialAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PearsonMaterialAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PearsonMaterialAvgOrderByAggregateInput>;
export const PearsonMaterialAvgOrderByAggregateInputObjectZodSchema = makeSchema();
