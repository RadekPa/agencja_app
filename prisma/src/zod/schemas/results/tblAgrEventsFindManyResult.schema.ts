import * as z from 'zod';
export const tblAgrEventsFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});