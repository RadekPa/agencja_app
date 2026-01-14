import * as z from 'zod';
export const PearsonMaterialDeleteResultSchema = z.nullable(z.object({
  MyNumber: z.number().int(),
  ContractID: z.number().int(),
  InvoiceNumber: z.string().optional(),
  InvoiceDate: z.date().optional(),
  Publisher: z.string().optional(),
  Title: z.string().optional(),
  ISBN: z.string().optional(),
  Amount: z.number().optional()
}));