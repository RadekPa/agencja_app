import * as z from 'zod';
// prettier-ignore
export const tblTitEventsModelSchema = z.object({
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

export type tblTitEventsPureType = z.infer<typeof tblTitEventsModelSchema>;
