import * as z from 'zod';
// prettier-ignore
export const dictCountries_oldInputSchema = z.object({
    CountryID: z.number().int(),
    CountryDesc: z.string(),
    CountryPL: z.string().optional().nullable(),
    Tax: z.number().optional().nullable(),
    Code: z.string().optional().nullable(),
    EU: z.string().optional().nullable(),
    dictStates: z.array(z.unknown()),
    tblAgreements: z.array(z.unknown())
}).strict();

export type dictCountries_oldInputType = z.infer<typeof dictCountries_oldInputSchema>;
