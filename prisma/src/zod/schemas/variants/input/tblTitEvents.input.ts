import * as z from 'zod';
// prettier-ignore
export const tblTitEventsInputSchema = z.object({
    TitEventID: z.number(),
    CopyTypeID: z.number().int().optional().nullable(),
    EventCode: z.number().int().optional().nullable(),
    TitleID: z.number().int().optional().nullable(),
    EventDate: z.date().optional().nullable(),
    NoOfCopies: z.number().int().optional().nullable(),
    EndDate: z.date().optional().nullable(),
    tblTitles: z.unknown().optional().nullable(),
    dictEvents: z.unknown().optional().nullable(),
    dictCopyType: z.unknown().optional().nullable()
}).strict();

export type tblTitEventsInputType = z.infer<typeof tblTitEventsInputSchema>;
