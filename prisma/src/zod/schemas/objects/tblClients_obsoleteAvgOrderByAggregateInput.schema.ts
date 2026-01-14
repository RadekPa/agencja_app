import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  CustID: SortOrderSchema.optional(),
  RepModeID: SortOrderSchema.optional(),
  GraalID: SortOrderSchema.optional(),
  Commission: SortOrderSchema.optional()
}).strict();
export const tblClients_obsoleteAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblClients_obsoleteAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblClients_obsoleteAvgOrderByAggregateInput>;
export const tblClients_obsoleteAvgOrderByAggregateInputObjectZodSchema = makeSchema();
