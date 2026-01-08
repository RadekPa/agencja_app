import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  date: z.literal(true).optional(),
  dateIssued: z.literal(true).optional(),
  type: z.literal(true).optional(),
  clientId: z.literal(true).optional(),
  origCurrency: z.literal(true).optional(),
  fvCurrency: z.literal(true).optional(),
  graalPerc: z.literal(true).optional(),
  vatCode: z.literal(true).optional(),
  vatPerc: z.literal(true).optional(),
  netAmt: z.literal(true).optional(),
  netAmtCurr: z.literal(true).optional(),
  vatAmt: z.literal(true).optional(),
  xrate: z.literal(true).optional(),
  vatAmtCurr: z.literal(true).optional(),
  grossAmt: z.literal(true).optional(),
  invNr: z.literal(true).optional(),
  invAmt: z.literal(true).optional(),
  title: z.literal(true).optional(),
  isbnNr: z.literal(true).optional(),
  payType: z.literal(true).optional(),
  invType: z.literal(true).optional(),
  fvDescription: z.literal(true).optional(),
  bilNr: z.literal(true).optional(),
  origFVNr: z.literal(true).optional(),
  correctFVNr: z.literal(true).optional(),
  creditId: z.literal(true).optional(),
  applyId: z.literal(true).optional(),
  payDate: z.literal(true).optional(),
  enterDate: z.literal(true).optional(),
  enterEmployee: z.literal(true).optional(),
  status: z.literal(true).optional()
}).strict();
export const InvoiceMaxAggregateInputObjectSchema: z.ZodType<Prisma.InvoiceMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.InvoiceMaxAggregateInputType>;
export const InvoiceMaxAggregateInputObjectZodSchema = makeSchema();
