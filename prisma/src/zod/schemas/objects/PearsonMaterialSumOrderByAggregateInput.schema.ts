import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  MyNumber: SortOrderSchema.optional(),
  ContractID: SortOrderSchema.optional(),
  Amount: SortOrderSchema.optional()
}).strict();
export const PearsonMaterialSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PearsonMaterialSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PearsonMaterialSumOrderByAggregateInput>;
export const PearsonMaterialSumOrderByAggregateInputObjectZodSchema = makeSchema();
