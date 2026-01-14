import * as z from 'zod';
// prettier-ignore
export const tblInvoiceDetailsModelSchema = z.object({
    InvNum: z.number().int(),
    InvDetKey: z.number().int(),
    InvType: z.string(),
    AgID: z.number().int().nullable(),
    OrdNr: z.number().int().nullable(),
    NrItems: z.number().int().nullable(),
    Amount: z.number().nullable(),
    RptTitle: z.string().nullable(),
    RptISBN: z.string().nullable(),
    RptAuthor: z.string().nullable(),
    RoyDate: z.date().nullable(),
    RoyRight: z.string().nullable(),
    RoyCopies: z.number().int().nullable(),
    RoyPrice: z.number().nullable(),
    RoyRate: z.number().nullable(),
    RoyXRate: z.number().nullable(),
    RoyThisRoy: z.number().nullable(),
    RoyAdvLeft: z.number().nullable(),
    RoyRoyDue: z.number().nullable()
}).strict();

export type tblInvoiceDetailsPureType = z.infer<typeof tblInvoiceDetailsModelSchema>;
