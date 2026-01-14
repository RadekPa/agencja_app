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
export const tblMaterialCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblMaterialCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMaterialCountOrderByAggregateInput>;
export const tblMaterialCountOrderByAggregateInputObjectZodSchema = makeSchema();
