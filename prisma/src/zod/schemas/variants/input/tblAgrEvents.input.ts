import * as z from 'zod';
// prettier-ignore
export const tblAgrEventsInputSchema = z.object({
    AgrEventID: z.number(),
    AgrID: z.number().int().optional().nullable(),
    AgrEventCode: z.number().int().optional().nullable(),
    EventDate: z.date().optional().nullable(),
    NoOfCopies: z.number().int().optional().nullable(),
    EndDate: z.date().optional().nullable(),
    DateMod: z.date().optional().nullable(),
    UserMod: z.string().optional().nullable(),
    tblAgreements: z.unknown().optional().nullable(),
    dictAgrEvents: z.unknown().optional().nullable()
}).strict();

export type tblAgrEventsInputType = z.infer<typeof tblAgrEventsInputSchema>;
