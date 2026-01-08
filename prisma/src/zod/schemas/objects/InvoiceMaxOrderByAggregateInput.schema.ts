import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  date: SortOrderSchema.optional(),
  dateIssued: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional(),
  origCurrency: SortOrderSchema.optional(),
  fvCurrency: SortOrderSchema.optional(),
  graalPerc: SortOrderSchema.optional(),
  vatCode: SortOrderSchema.optional(),
  vatPerc: SortOrderSchema.optional(),
  netAmt: SortOrderSchema.optional(),
  netAmtCurr: SortOrderSchema.optional(),
  vatAmt: SortOrderSchema.optional(),
  xrate: SortOrderSchema.optional(),
  vatAmtCurr: SortOrderSchema.optional(),
  grossAmt: SortOrderSchema.optional(),
  invNr: SortOrderSchema.optional(),
  invAmt: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  isbnNr: SortOrderSchema.optional(),
  payType: SortOrderSchema.optional(),
  invType: SortOrderSchema.optional(),
  fvDescription: SortOrderSchema.optional(),
  bilNr: SortOrderSchema.optional(),
  origFVNr: SortOrderSchema.optional(),
  correctFVNr: SortOrderSchema.optional(),
  creditId: SortOrderSchema.optional(),
  applyId: SortOrderSchema.optional(),
  payDate: SortOrderSchema.optional(),
  enterDate: SortOrderSchema.optional(),
  enterEmployee: SortOrderSchema.optional(),
  status: SortOrderSchema.optional()
}).strict();
export const InvoiceMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.InvoiceMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.InvoiceMaxOrderByAggregateInput>;
export const InvoiceMaxOrderByAggregateInputObjectZodSchema = makeSchema();
