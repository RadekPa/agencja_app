import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  ExcludeReasonID: SortOrderSchema.optional()
}).strict();
export const dictAdvWithoutInvExcludeReasonSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictAdvWithoutInvExcludeReasonSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAdvWithoutInvExcludeReasonSumOrderByAggregateInput>;
export const dictAdvWithoutInvExcludeReasonSumOrderByAggregateInputObjectZodSchema = makeSchema();
