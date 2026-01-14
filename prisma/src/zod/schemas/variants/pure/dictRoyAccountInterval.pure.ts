import * as z from 'zod';
// prettier-ignore
export const dictRoyAccountIntervalModelSchema = z.object({
    RoyAccountIntervalID: z.number().int(),
    RoyAccountIntervalDesc: z.string(),
    IntervalAbb: z.string().nullable(),
    tblAgrRights: z.array(z.unknown())
}).strict();

export type dictRoyAccountIntervalPureType = z.infer<typeof dictRoyAccountIntervalModelSchema>;
