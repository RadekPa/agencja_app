import * as z from 'zod';
export const tblPublishersFindUniqueResultSchema = z.nullable(z.object({
  PubID: z.number(),
  PubName: z.string().optional(),
  PubAbb: z.string().optional(),
  ParentPubID: z.number().optional(),
  tblPubISBN: z.array(z.unknown())
}));