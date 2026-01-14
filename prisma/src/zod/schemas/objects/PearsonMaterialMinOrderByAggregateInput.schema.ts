import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  MyNumber: SortOrderSchema.optional(),
  ContractID: SortOrderSchema.optional(),
  InvoiceNumber: SortOrderSchema.optional(),
  InvoiceDate: SortOrderSchema.optional(),
  Publisher: SortOrderSchema.optional(),
  Title: SortOrderSchema.optional(),
  ISBN: SortOrderSchema.optional(),
  Amount: SortOrderSchema.optional()
}).strict();
export const PearsonMaterialMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PearsonMaterialMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PearsonMaterialMinOrderByAggregateInput>;
export const PearsonMaterialMinOrderByAggregateInputObjectZodSchema = makeSchema();
