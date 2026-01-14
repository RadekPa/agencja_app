import * as z from 'zod';
// prettier-ignore
export const dictStatesResultSchema = z.object({
    StateID: z.number().int(),
    CountryID: z.number().int().nullable(),
    StateAbb: z.string(),
    StateName: z.string(),
    dictCountries_old: z.unknown().nullable(),
    tblCustomers: z.array(z.unknown())
}).strict();

export type dictStatesResultType = z.infer<typeof dictStatesResultSchema>;
