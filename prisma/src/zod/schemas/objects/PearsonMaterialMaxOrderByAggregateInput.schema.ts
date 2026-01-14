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
export const PearsonMaterialMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PearsonMaterialMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PearsonMaterialMaxOrderByAggregateInput>;
export const PearsonMaterialMaxOrderByAggregateInputObjectZodSchema = makeSchema();
