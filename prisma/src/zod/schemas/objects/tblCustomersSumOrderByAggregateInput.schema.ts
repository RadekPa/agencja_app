import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  CustID: SortOrderSchema.optional(),
  Account: SortOrderSchema.optional(),
  CountryID: SortOrderSchema.optional(),
  ParentCustID: SortOrderSchema.optional(),
  RepModeID: SortOrderSchema.optional(),
  GraalID: SortOrderSchema.optional(),
  Commission: SortOrderSchema.optional(),
  CommissionForeign: SortOrderSchema.optional(),
  CommissionMaterials: SortOrderSchema.optional()
}).strict();
export const tblCustomersSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblCustomersSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersSumOrderByAggregateInput>;
export const tblCustomersSumOrderByAggregateInputObjectZodSchema = makeSchema();
