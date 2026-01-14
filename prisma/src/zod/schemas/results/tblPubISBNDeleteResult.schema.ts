import * as z from 'zod';
export const tblPubISBNDeleteResultSchema = z.nullable(z.object({
  PubID: z.number(),
  PubISBN1: z.string(),
  PubISBN2: z.string(),
  tblPublishers: z.unknown()
}));