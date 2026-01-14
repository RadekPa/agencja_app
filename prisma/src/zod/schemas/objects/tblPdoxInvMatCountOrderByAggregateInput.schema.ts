import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  Invoice_Nr: SortOrderSchema.optional(),
  Title: SortOrderSchema.optional(),
  ISBN: SortOrderSchema.optional()
}).strict();
export const tblPdoxInvMatCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblPdoxInvMatCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPdoxInvMatCountOrderByAggregateInput>;
export const tblPdoxInvMatCountOrderByAggregateInputObjectZodSchema = makeSchema();
