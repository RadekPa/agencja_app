import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  MatID: SortOrderSchema.optional(),
  AgrID: SortOrderSchema.optional(),
  MatTypeID: SortOrderSchema.optional(),
  Amount: SortOrderSchema.optional(),
  Currency: SortOrderSchema.optional(),
  Remarks: SortOrderSchema.optional(),
  RequestDate: SortOrderSchema.optional(),
  ReceiveDate: SortOrderSchema.optional()
}).strict();
export const tblMaterialMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblMaterialMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMaterialMaxOrderByAggregateInput>;
export const tblMaterialMaxOrderByAggregateInputObjectZodSchema = makeSchema();
