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
export const tblCustomersAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblCustomersAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersAvgOrderByAggregateInput>;
export const tblCustomersAvgOrderByAggregateInputObjectZodSchema = makeSchema();
