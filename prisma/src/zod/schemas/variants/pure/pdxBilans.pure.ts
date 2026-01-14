import * as z from 'zod';
// prettier-ignore
export const pdxBilansModelSchema = z.object({
    Bil_nr: z.number().int(),
    Waluta: z.string().nullable(),
    Wyci_g: z.number().int().nullable(),
    Data_wyc: z.date().nullable(),
    Nasz_inv: z.number().int().nullable(),
    Type: z.string().nullable(),
    Kwota_wp_ywu: z.number().nullable(),
    PayType: z.string().nullable(),
    Graal_perc: z.number().nullable(),
    Kwota_wyp_aty: z.number().nullable(),
    Kwota_inv: z.number().nullable(),
    Tax_10_: z.boolean().nullable(),
    TaxPerc: z.number().nullable(),
    Tax: z.number().nullable(),
    Wyd_Debit: z.number().nullable(),
    Extra_Bank: z.number().nullable(),
    Transfer: z.number().nullable(),
    AGNR: z.number().int().nullable(),
    RIGHT: z.number().int().nullable(),
    AUTOR: z.string().nullable(),
    Title: z.string().nullable(),
    WYDAB: z.string().nullable(),
    WYD: z.string().nullable(),
    OWNAB: z.string().nullable(),
    OWNER: z.string().nullable(),
    Sum: z.number().nullable(),
    SumPLN: z.number().nullable(),
    GRAAL_INCOME: z.number().nullable(),
    Kurs: z.number().nullable(),
    GraalPLN: z.number().nullable(),
    Notes: z.string().nullable()
}).strict();

export type pdxBilansPureType = z.infer<typeof pdxBilansModelSchema>;
