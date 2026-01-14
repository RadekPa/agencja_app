import * as z from 'zod';
// prettier-ignore
export const dictStatesInputSchema = z.object({
    StateID: z.number().int(),
    CountryID: z.number().int().optional().nullable(),
    StateAbb: z.string(),
    StateName: z.string(),
    dictCountries_old: z.unknown().optional().nullable(),
    tblCustomers: z.array(z.unknown())
}).strict();

export type dictStatesInputType = z.infer<typeof dictStatesInputSchema>;
