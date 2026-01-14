import * as z from 'zod';
// prettier-ignore
export const tblSubmEventsResultSchema = z.object({
    SubmEventID: z.number(),
    SubmID: z.number().int().nullable(),
    EventCode: z.number().int().nullable(),
    EventDate: z.date(),
    NoOfCopies: z.number().int().nullable(),
    EndDate: z.date().nullable(),
    tblSubmissions: z.unknown().nullable(),
    dictEvents: z.unknown().nullable()
}).strict();

export type tblSubmEventsResultType = z.infer<typeof tblSubmEventsResultSchema>;
