import * as z from 'zod';
export const tblCertPubUpsertResultSchema = z.object({
  ClientID: z.number().int(),
  Year: z.number().int(),
  PubID: z.number().int(),
  DateSent: z.date().optional(),
  Original: z.boolean().optional()
});