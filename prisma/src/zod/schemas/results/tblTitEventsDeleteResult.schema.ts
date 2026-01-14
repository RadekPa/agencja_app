import * as z from 'zod';
export const tblTitEventsDeleteResultSchema = z.nullable(z.object({
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
}));