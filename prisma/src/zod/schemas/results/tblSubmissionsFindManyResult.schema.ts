import * as z from 'zod';
export const tblSubmissionsFindManyResultSchema = z.object({
  data: z.array(z.object({
  SubmID: z.number().int(),
  CopyTypeID: z.number().int().optional(),
  SubmSentTypeID: z.number().int().optional(),
  TitleID: z.number().int().optional(),
  CustID: z.number().int().optional(),
  Exclusive: z.number().int().optional(),
  SubmDate: z.date(),
  SentDate: z.date().optional(),
  EndDate: z.date().optional(),
  ReturnDate: z.date().optional(),
  NoOfCopies: z.number().int().optional(),
  TrackingNo: z.string().optional(),
  UserMod: z.string(),
  DateMod: z.date(),
  Status: z.string().optional(),
  SubmNr: z.number().int().optional(),
  Remarks: z.string().optional(),
  ContactID: z.number().int().optional(),
  tblSubmEvents: z.array(z.unknown()),
  tblTitles: z.unknown().optional(),
  tblCustomers: z.unknown().optional(),
  dictSubmSentType: z.unknown().optional(),
  dictCopyType: z.unknown().optional()
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