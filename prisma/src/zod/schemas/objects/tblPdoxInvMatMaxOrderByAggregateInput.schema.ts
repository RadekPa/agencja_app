import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  Invoice_Nr: SortOrderSchema.optional(),
  Title: SortOrderSchema.optional(),
  ISBN: SortOrderSchema.optional()
}).strict();
export const tblPdoxInvMatMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblPdoxInvMatMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPdoxInvMatMaxOrderByAggregateInput>;
export const tblPdoxInvMatMaxOrderByAggregateInputObjectZodSchema = makeSchema();
