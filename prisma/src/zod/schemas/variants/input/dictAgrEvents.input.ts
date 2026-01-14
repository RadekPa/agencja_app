import * as z from 'zod';
// prettier-ignore
export const dictAgrEventsInputSchema = z.object({
    AgrEventCode: z.number().int(),
    AgrEventDesc: z.string(),
    Status: z.string().optional().nullable(),
    tblAgrEvents: z.array(z.unknown())
}).strict();

export type dictAgrEventsInputType = z.infer<typeof dictAgrEventsInputSchema>;
