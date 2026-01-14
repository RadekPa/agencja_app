import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  Invoice_Nr: SortOrderSchema.optional(),
  Title: SortOrderSchema.optional(),
  ISBN: SortOrderSchema.optional()
}).strict();
export const tblPdoxInvMatMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblPdoxInvMatMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPdoxInvMatMinOrderByAggregateInput>;
export const tblPdoxInvMatMinOrderByAggregateInputObjectZodSchema = makeSchema();
