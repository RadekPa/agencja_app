import * as z from 'zod';
// prettier-ignore
export const dictAgrEventsResultSchema = z.object({
    AgrEventCode: z.number().int(),
    AgrEventDesc: z.string(),
    Status: z.string().nullable(),
    tblAgrEvents: z.array(z.unknown())
}).strict();

export type dictAgrEventsResultType = z.infer<typeof dictAgrEventsResultSchema>;
