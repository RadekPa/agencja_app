import * as z from 'zod';
// prettier-ignore
export const pdxTRANSFERInputSchema = z.object({
    Bil_nr: z.number().int(),
    Date: z.date().optional().nullable(),
    PayType: z.string().optional().nullable(),
    Nasz_inv: z.number().int().optional().nullable(),
    Waluta: z.string().optional().nullable(),
    Kwota_wp_ywu: z.number().optional().nullable(),
    Kwota_inv: z.number().optional().nullable(),
    Tax_10_: z.boolean().optional().nullable(),
    Tax: z.number().optional().nullable(),
    AgrID: z.number().int().optional().nullable(),
    AUTOR: z.string().optional().nullable(),
    Title: z.string().optional().nullable(),
    WYD: z.string().optional().nullable(),
    OWNAB: z.string().optional().nullable(),
    GRAAL_INCOME: z.number().optional().nullable(),
    Transfer: z.number().optional().nullable()
}).strict();

export type pdxTRANSFERInputType = z.infer<typeof pdxTRANSFERInputSchema>;
