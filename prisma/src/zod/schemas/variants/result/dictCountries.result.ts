import * as z from 'zod';
// prettier-ignore
export const dictCountriesResultSchema = z.object({
    CountryID: z.number().int(),
    CountryDesc: z.string().nullable(),
    CountryPL: z.string().nullable(),
    Tax: z.number().nullable(),
    Code: z.string().nullable(),
    EU: z.string().nullable()
}).strict();

export type dictCountriesResultType = z.infer<typeof dictCountriesResultSchema>;
