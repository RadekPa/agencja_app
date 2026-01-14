import * as z from 'zod';
// prettier-ignore
export const dictAgrEventsModelSchema = z.object({
    AgrEventCode: z.number().int(),
    AgrEventDesc: z.string(),
    Status: z.string().nullable(),
    tblAgrEvents: z.array(z.unknown())
}).strict();

export type dictAgrEventsPureType = z.infer<typeof dictAgrEventsModelSchema>;
