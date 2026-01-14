import * as z from 'zod';
export const tblPubISBNUpsertResultSchema = z.object({
  PubID: z.number(),
  PubISBN1: z.string(),
  PubISBN2: z.string(),
  tblPublishers: z.unknown()
});