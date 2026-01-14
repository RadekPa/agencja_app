import * as z from 'zod';
export const tblPublishersUpsertResultSchema = z.object({
  PubID: z.number(),
  PubName: z.string().optional(),
  PubAbb: z.string().optional(),
  ParentPubID: z.number().optional(),
  tblPubISBN: z.array(z.unknown())
});