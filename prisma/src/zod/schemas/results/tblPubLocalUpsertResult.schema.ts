import * as z from 'zod';
export const tblPubLocalUpsertResultSchema = z.object({
  PubLocalID: z.number().int(),
  AgrID: z.number().int().optional(),
  LocalTitle: z.string().optional(),
  PubDate: z.date().optional(),
  LocalISBN: z.string().optional(),
  Printrun: z.number().int().optional(),
  LocalEdition: z.number().int().optional(),
  tblAgreements: z.unknown().optional()
});