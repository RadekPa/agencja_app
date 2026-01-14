import * as z from 'zod';
// prettier-ignore
export const dictCountriesInputSchema = z.object({
    CountryID: z.number().int(),
    CountryDesc: z.string().optional().nullable(),
    CountryPL: z.string().optional().nullable(),
    Tax: z.number().optional().nullable(),
    Code: z.string().optional().nullable(),
    EU: z.string().optional().nullable()
}).strict();

export type dictCountriesInputType = z.infer<typeof dictCountriesInputSchema>;
