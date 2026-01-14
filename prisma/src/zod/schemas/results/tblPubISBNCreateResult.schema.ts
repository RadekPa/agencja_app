import * as z from 'zod';
export const tblPubISBNCreateResultSchema = z.object({
  PubID: z.number(),
  PubISBN1: z.string(),
  PubISBN2: z.string(),
  tblPublishers: z.unknown()
});