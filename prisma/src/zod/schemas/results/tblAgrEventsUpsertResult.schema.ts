import * as z from 'zod';
export const tblAgrEventsUpsertResultSchema = z.object({
  AgrEventID: z.number(),
  AgrID: z.number().int().optional(),
  AgrEventCode: z.number().int().optional(),
  EventDate: z.date().optional(),
  NoOfCopies: z.number().int().optional(),
  EndDate: z.date().optional(),
  DateMod: z.date().optional(),
  UserMod: z.string().optional(),
  tblAgreements: z.unknown().optional(),
  dictAgrEvents: z.unknown().optional()
});