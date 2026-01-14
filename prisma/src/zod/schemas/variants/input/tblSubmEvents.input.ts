import * as z from 'zod';
// prettier-ignore
export const tblSubmEventsInputSchema = z.object({
    SubmEventID: z.number(),
    SubmID: z.number().int().optional().nullable(),
    EventCode: z.number().int().optional().nullable(),
    EventDate: z.date(),
    NoOfCopies: z.number().int().optional().nullable(),
    EndDate: z.date().optional().nullable(),
    tblSubmissions: z.unknown().optional().nullable(),
    dictEvents: z.unknown().optional().nullable()
}).strict();

export type tblSubmEventsInputType = z.infer<typeof tblSubmEventsInputSchema>;
