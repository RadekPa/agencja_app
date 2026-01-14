import * as z from 'zod';
export const tblTitEventsFindManyResultSchema = z.object({
  data: z.array(z.object({
  TitEventID: z.number(),
  CopyTypeID: z.number().int().optional(),
  EventCode: z.number().int().optional(),
  TitleID: z.number().int().optional(),
  EventDate: z.date().optional(),
  NoOfCopies: z.number().int().optional(),
  EndDate: z.date().optional(),
  tblTitles: z.unknown().optional(),
  dictEvents: z.unknown().optional(),
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