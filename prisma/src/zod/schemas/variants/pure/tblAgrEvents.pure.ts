import * as z from 'zod';
// prettier-ignore
export const tblAgrEventsModelSchema = z.object({
    AgrEventID: z.number(),
    AgrID: z.number().int().nullable(),
    AgrEventCode: z.number().int().nullable(),
    EventDate: z.date().nullable(),
    NoOfCopies: z.number().int().nullable(),
    EndDate: z.date().nullable(),
    DateMod: z.date().nullable(),
    UserMod: z.string().nullable(),
    tblAgreements: z.unknown().nullable(),
    dictAgrEvents: z.unknown().nullable()
}).strict();

export type tblAgrEventsPureType = z.infer<typeof tblAgrEventsModelSchema>;
