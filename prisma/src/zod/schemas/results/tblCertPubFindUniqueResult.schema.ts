import * as z from 'zod';
export const tblCertPubFindUniqueResultSchema = z.nullable(z.object({
  ClientID: z.number().int(),
  Year: z.number().int(),
  PubID: z.number().int(),
  DateSent: z.date().optional(),
  Original: z.boolean().optional()
}));