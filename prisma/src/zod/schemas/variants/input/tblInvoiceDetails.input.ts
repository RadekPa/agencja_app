import * as z from 'zod';
// prettier-ignore
export const tblInvoiceDetailsInputSchema = z.object({
    InvNum: z.number().int(),
    InvDetKey: z.number().int(),
    InvType: z.string(),
    AgID: z.number().int().optional().nullable(),
    OrdNr: z.number().int().optional().nullable(),
    NrItems: z.number().int().optional().nullable(),
    Amount: z.number().optional().nullable(),
    RptTitle: z.string().optional().nullable(),
    RptISBN: z.string().optional().nullable(),
    RptAuthor: z.string().optional().nullable(),
    RoyDate: z.date().optional().nullable(),
    RoyRight: z.string().optional().nullable(),
    RoyCopies: z.number().int().optional().nullable(),
    RoyPrice: z.number().optional().nullable(),
    RoyRate: z.number().optional().nullable(),
    RoyXRate: z.number().optional().nullable(),
    RoyThisRoy: z.number().optional().nullable(),
    RoyAdvLeft: z.number().optional().nullable(),
    RoyRoyDue: z.number().optional().nullable()
}).strict();

export type tblInvoiceDetailsInputType = z.infer<typeof tblInvoiceDetailsInputSchema>;
