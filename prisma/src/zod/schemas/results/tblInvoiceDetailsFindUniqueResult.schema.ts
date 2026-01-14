import * as z from 'zod';
export const tblInvoiceDetailsFindUniqueResultSchema = z.nullable(z.object({
  InvNum: z.number().int(),
  InvDetKey: z.number().int(),
  InvType: z.string(),
  AgID: z.number().int().optional(),
  OrdNr: z.number().int().optional(),
  NrItems: z.number().int().optional(),
  Amount: z.number().optional(),
  RptTitle: z.string().optional(),
  RptISBN: z.string().optional(),
  RptAuthor: z.string().optional(),
  RoyDate: z.date().optional(),
  RoyRight: z.string().optional(),
  RoyCopies: z.number().int().optional(),
  RoyPrice: z.number().optional(),
  RoyRate: z.number().optional(),
  RoyXRate: z.number().optional(),
  RoyThisRoy: z.number().optional(),
  RoyAdvLeft: z.number().optional(),
  RoyRoyDue: z.number().optional()
}));