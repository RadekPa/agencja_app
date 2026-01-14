import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  InvNum: z.boolean().optional(),
  InvDetKey: z.boolean().optional(),
  InvType: z.boolean().optional(),
  AgID: z.boolean().optional(),
  OrdNr: z.boolean().optional(),
  NrItems: z.boolean().optional(),
  Amount: z.boolean().optional(),
  RptTitle: z.boolean().optional(),
  RptISBN: z.boolean().optional(),
  RptAuthor: z.boolean().optional(),
  RoyDate: z.boolean().optional(),
  RoyRight: z.boolean().optional(),
  RoyCopies: z.boolean().optional(),
  RoyPrice: z.boolean().optional(),
  RoyRate: z.boolean().optional(),
  RoyXRate: z.boolean().optional(),
  RoyThisRoy: z.boolean().optional(),
  RoyAdvLeft: z.boolean().optional(),
  RoyRoyDue: z.boolean().optional()
}).strict();
export const tblInvoiceDetailsSelectObjectSchema: z.ZodType<Prisma.tblInvoiceDetailsSelect> = makeSchema() as unknown as z.ZodType<Prisma.tblInvoiceDetailsSelect>;
export const tblInvoiceDetailsSelectObjectZodSchema = makeSchema();
