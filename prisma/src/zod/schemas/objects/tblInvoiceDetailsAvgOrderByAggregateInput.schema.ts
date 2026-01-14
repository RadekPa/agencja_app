import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  InvNum: SortOrderSchema.optional(),
  InvDetKey: SortOrderSchema.optional(),
  AgID: SortOrderSchema.optional(),
  OrdNr: SortOrderSchema.optional(),
  NrItems: SortOrderSchema.optional(),
  Amount: SortOrderSchema.optional(),
  RoyCopies: SortOrderSchema.optional(),
  RoyPrice: SortOrderSchema.optional(),
  RoyRate: SortOrderSchema.optional(),
  RoyXRate: SortOrderSchema.optional(),
  RoyThisRoy: SortOrderSchema.optional(),
  RoyAdvLeft: SortOrderSchema.optional(),
  RoyRoyDue: SortOrderSchema.optional()
}).strict();
export const tblInvoiceDetailsAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblInvoiceDetailsAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblInvoiceDetailsAvgOrderByAggregateInput>;
export const tblInvoiceDetailsAvgOrderByAggregateInputObjectZodSchema = makeSchema();
