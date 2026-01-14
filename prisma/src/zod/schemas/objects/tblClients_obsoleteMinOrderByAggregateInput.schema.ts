import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  CustID: SortOrderSchema.optional(),
  RepModeID: SortOrderSchema.optional(),
  GraalID: SortOrderSchema.optional(),
  Commission: SortOrderSchema.optional(),
  DefAgrDoc: SortOrderSchema.optional(),
  Jurisdiction: SortOrderSchema.optional()
}).strict();
export const tblClients_obsoleteMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblClients_obsoleteMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblClients_obsoleteMinOrderByAggregateInput>;
export const tblClients_obsoleteMinOrderByAggregateInputObjectZodSchema = makeSchema();
