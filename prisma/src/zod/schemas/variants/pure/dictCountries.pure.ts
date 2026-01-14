import * as z from 'zod';
// prettier-ignore
export const dictCountriesModelSchema = z.object({
    CountryID: z.number().int(),
    CountryDesc: z.string().nullable(),
    CountryPL: z.string().nullable(),
    Tax: z.number().nullable(),
    Code: z.string().nullable(),
    EU: z.string().nullable()
}).strict();

export type dictCountriesPureType = z.infer<typeof dictCountriesModelSchema>;
