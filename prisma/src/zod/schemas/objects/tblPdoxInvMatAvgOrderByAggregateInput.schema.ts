import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  Invoice_Nr: SortOrderSchema.optional()
}).strict();
export const tblPdoxInvMatAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblPdoxInvMatAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPdoxInvMatAvgOrderByAggregateInput>;
export const tblPdoxInvMatAvgOrderByAggregateInputObjectZodSchema = makeSchema();
