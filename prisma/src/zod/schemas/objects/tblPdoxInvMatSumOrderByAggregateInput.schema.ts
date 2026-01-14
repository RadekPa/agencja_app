import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  Invoice_Nr: SortOrderSchema.optional()
}).strict();
export const tblPdoxInvMatSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblPdoxInvMatSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPdoxInvMatSumOrderByAggregateInput>;
export const tblPdoxInvMatSumOrderByAggregateInputObjectZodSchema = makeSchema();
