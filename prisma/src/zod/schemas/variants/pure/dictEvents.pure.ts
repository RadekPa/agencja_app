import * as z from 'zod';
// prettier-ignore
export const dictEventsModelSchema = z.object({
    EventCode: z.number().int(),
    EventDesc: z.string(),
    tblSubmEvents: z.array(z.unknown()),
    tblTitEvents: z.array(z.unknown())
}).strict();

export type dictEventsPureType = z.infer<typeof dictEventsModelSchema>;
