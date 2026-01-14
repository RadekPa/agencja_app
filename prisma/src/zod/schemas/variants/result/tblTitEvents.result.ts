import * as z from 'zod';
// prettier-ignore
export const tblTitEventsResultSchema = z.object({
    TitEventID: z.number(),
    CopyTypeID: z.number().int().nullable(),
    EventCode: z.number().int().nullable(),
    TitleID: z.number().int().nullable(),
    EventDate: z.date().nullable(),
    NoOfCopies: z.number().int().nullable(),
    EndDate: z.date().nullable(),
    tblTitles: z.unknown().nullable(),
    dictEvents: z.unknown().nullable(),
    dictCopyType: z.unknown().nullable()
}).strict();

export type tblTitEventsResultType = z.infer<typeof tblTitEventsResultSchema>;
