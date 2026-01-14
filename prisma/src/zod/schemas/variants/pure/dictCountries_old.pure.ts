import * as z from 'zod';
// prettier-ignore
export const dictCountries_oldModelSchema = z.object({
    CountryID: z.number().int(),
    CountryDesc: z.string(),
    CountryPL: z.string().nullable(),
    Tax: z.number().nullable(),
    Code: z.string().nullable(),
    EU: z.string().nullable(),
    dictStates: z.array(z.unknown()),
    tblAgreements: z.array(z.unknown())
}).strict();

export type dictCountries_oldPureType = z.infer<typeof dictCountries_oldModelSchema>;
