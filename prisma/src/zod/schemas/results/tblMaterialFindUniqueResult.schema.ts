import * as z from 'zod';
export const tblMaterialFindUniqueResultSchema = z.nullable(z.object({
  MatID: z.number().int(),
  AgrID: z.number().int(),
  MatTypeID: z.number().int(),
  Amount: z.number(),
  Currency: z.string().optional(),
  Remarks: z.string().optional(),
  RequestDate: z.date().optional(),
  ReceiveDate: z.date().optional()
}));