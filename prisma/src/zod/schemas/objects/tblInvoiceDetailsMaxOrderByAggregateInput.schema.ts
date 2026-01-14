import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  InvNum: SortOrderSchema.optional(),
  InvDetKey: SortOrderSchema.optional(),
  InvType: SortOrderSchema.optional(),
  AgID: SortOrderSchema.optional(),
  OrdNr: SortOrderSchema.optional(),
  NrItems: SortOrderSchema.optional(),
  Amount: SortOrderSchema.optional(),
  RptTitle: SortOrderSchema.optional(),
  RptISBN: SortOrderSchema.optional(),
  RptAuthor: SortOrderSchema.optional(),
  RoyDate: SortOrderSchema.optional(),
  RoyRight: SortOrderSchema.optional(),
  RoyCopies: SortOrderSchema.optional(),
  RoyPrice: SortOrderSchema.optional(),
  RoyRate: SortOrderSchema.optional(),
  RoyXRate: SortOrderSchema.optional(),
  RoyThisRoy: SortOrderSchema.optional(),
  RoyAdvLeft: SortOrderSchema.optional(),
  RoyRoyDue: SortOrderSchema.optional()
}).strict();
export const tblInvoiceDetailsMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblInvoiceDetailsMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblInvoiceDetailsMaxOrderByAggregateInput>;
export const tblInvoiceDetailsMaxOrderByAggregateInputObjectZodSchema = makeSchema();
