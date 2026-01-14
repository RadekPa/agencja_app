import * as z from 'zod';
// prettier-ignore
export const pdxTRANSFERResultSchema = z.object({
    Bil_nr: z.number().int(),
    Date: z.date().nullable(),
    PayType: z.string().nullable(),
    Nasz_inv: z.number().int().nullable(),
    Waluta: z.string().nullable(),
    Kwota_wp_ywu: z.number().nullable(),
    Kwota_inv: z.number().nullable(),
    Tax_10_: z.boolean().nullable(),
    Tax: z.number().nullable(),
    AgrID: z.number().int().nullable(),
    AUTOR: z.string().nullable(),
    Title: z.string().nullable(),
    WYD: z.string().nullable(),
    OWNAB: z.string().nullable(),
    GRAAL_INCOME: z.number().nullable(),
    Transfer: z.number().nullable()
}).strict();

export type pdxTRANSFERResultType = z.infer<typeof pdxTRANSFERResultSchema>;
