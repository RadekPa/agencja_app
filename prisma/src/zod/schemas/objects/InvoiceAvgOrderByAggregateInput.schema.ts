import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional(),
  graalPerc: SortOrderSchema.optional(),
  vatPerc: SortOrderSchema.optional(),
  netAmt: SortOrderSchema.optional(),
  netAmtCurr: SortOrderSchema.optional(),
  vatAmt: SortOrderSchema.optional(),
  xrate: SortOrderSchema.optional(),
  vatAmtCurr: SortOrderSchema.optional(),
  grossAmt: SortOrderSchema.optional(),
  invNr: SortOrderSchema.optional(),
  invAmt: SortOrderSchema.optional(),
  bilNr: SortOrderSchema.optional(),
  origFVNr: SortOrderSchema.optional(),
  correctFVNr: SortOrderSchema.optional(),
  creditId: SortOrderSchema.optional(),
  applyId: SortOrderSchema.optional()
}).strict();
export const InvoiceAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.InvoiceAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.InvoiceAvgOrderByAggregateInput>;
export const InvoiceAvgOrderByAggregateInputObjectZodSchema = makeSchema();
