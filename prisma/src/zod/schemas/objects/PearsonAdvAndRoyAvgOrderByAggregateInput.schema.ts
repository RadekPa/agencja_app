import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  ContractID: SortOrderSchema.optional(),
  Edition: SortOrderSchema.optional(),
  CopyrightYear: SortOrderSchema.optional(),
  FISBN: SortOrderSchema.optional(),
  TotalAdvances: SortOrderSchema.optional(),
  TotalRoyalties: SortOrderSchema.optional()
}).strict();
export const PearsonAdvAndRoyAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PearsonAdvAndRoyAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PearsonAdvAndRoyAvgOrderByAggregateInput>;
export const PearsonAdvAndRoyAvgOrderByAggregateInputObjectZodSchema = makeSchema();
