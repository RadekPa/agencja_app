import * as z from 'zod';
// prettier-ignore
export const dictRoyAccountIntervalInputSchema = z.object({
    RoyAccountIntervalID: z.number().int(),
    RoyAccountIntervalDesc: z.string(),
    IntervalAbb: z.string().optional().nullable(),
    tblAgrRights: z.array(z.unknown())
}).strict();

export type dictRoyAccountIntervalInputType = z.infer<typeof dictRoyAccountIntervalInputSchema>;
