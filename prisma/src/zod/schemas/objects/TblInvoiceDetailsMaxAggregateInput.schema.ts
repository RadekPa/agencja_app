import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  InvNum: z.literal(true).optional(),
  InvDetKey: z.literal(true).optional(),
  InvType: z.literal(true).optional(),
  AgID: z.literal(true).optional(),
  OrdNr: z.literal(true).optional(),
  NrItems: z.literal(true).optional(),
  Amount: z.literal(true).optional(),
  RptTitle: z.literal(true).optional(),
  RptISBN: z.literal(true).optional(),
  RptAuthor: z.literal(true).optional(),
  RoyDate: z.literal(true).optional(),
  RoyRight: z.literal(true).optional(),
  RoyCopies: z.literal(true).optional(),
  RoyPrice: z.literal(true).optional(),
  RoyRate: z.literal(true).optional(),
  RoyXRate: z.literal(true).optional(),
  RoyThisRoy: z.literal(true).optional(),
  RoyAdvLeft: z.literal(true).optional(),
  RoyRoyDue: z.literal(true).optional()
}).strict();
export const TblInvoiceDetailsMaxAggregateInputObjectSchema: z.ZodType<Prisma.TblInvoiceDetailsMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblInvoiceDetailsMaxAggregateInputType>;
export const TblInvoiceDetailsMaxAggregateInputObjectZodSchema = makeSchema();
