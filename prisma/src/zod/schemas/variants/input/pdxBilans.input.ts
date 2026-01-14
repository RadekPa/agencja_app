import * as z from 'zod';
// prettier-ignore
export const pdxBilansInputSchema = z.object({
    Bil_nr: z.number().int(),
    Waluta: z.string().optional().nullable(),
    Wyci_g: z.number().int().optional().nullable(),
    Data_wyc: z.date().optional().nullable(),
    Nasz_inv: z.number().int().optional().nullable(),
    Type: z.string().optional().nullable(),
    Kwota_wp_ywu: z.number().optional().nullable(),
    PayType: z.string().optional().nullable(),
    Graal_perc: z.number().optional().nullable(),
    Kwota_wyp_aty: z.number().optional().nullable(),
    Kwota_inv: z.number().optional().nullable(),
    Tax_10_: z.boolean().optional().nullable(),
    TaxPerc: z.number().optional().nullable(),
    Tax: z.number().optional().nullable(),
    Wyd_Debit: z.number().optional().nullable(),
    Extra_Bank: z.number().optional().nullable(),
    Transfer: z.number().optional().nullable(),
    AGNR: z.number().int().optional().nullable(),
    RIGHT: z.number().int().optional().nullable(),
    AUTOR: z.string().optional().nullable(),
    Title: z.string().optional().nullable(),
    WYDAB: z.string().optional().nullable(),
    WYD: z.string().optional().nullable(),
    OWNAB: z.string().optional().nullable(),
    OWNER: z.string().optional().nullable(),
    Sum: z.number().optional().nullable(),
    SumPLN: z.number().optional().nullable(),
    GRAAL_INCOME: z.number().optional().nullable(),
    Kurs: z.number().optional().nullable(),
    GraalPLN: z.number().optional().nullable(),
    Notes: z.string().optional().nullable()
}).strict();

export type pdxBilansInputType = z.infer<typeof pdxBilansInputSchema>;
