import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  ExcludeReasonID: SortOrderSchema.optional()
}).strict();
export const dictAdvWithoutInvExcludeReasonAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictAdvWithoutInvExcludeReasonAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAdvWithoutInvExcludeReasonAvgOrderByAggregateInput>;
export const dictAdvWithoutInvExcludeReasonAvgOrderByAggregateInputObjectZodSchema = makeSchema();
