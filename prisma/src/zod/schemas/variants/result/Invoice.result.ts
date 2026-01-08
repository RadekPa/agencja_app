import * as z from 'zod';
// prettier-ignore
export const InvoiceResultSchema = z.object({
    id: z.number().int(),
    date: z.date(),
    dateIssued: z.date().nullable(),
    type: z.number().int().nullable(),
    clientId: z.number().int().nullable(),
    client: z.unknown().nullable(),
    origCurrency: z.string().nullable(),
    fvCurrency: z.string().nullable(),
    graalPerc: z.number().nullable(),
    vatCode: z.string().nullable(),
    vatPerc: z.number().nullable(),
    netAmt: z.number().nullable(),
    netAmtCurr: z.number().nullable(),
    vatAmt: z.number().nullable(),
    xrate: z.number().nullable(),
    vatAmtCurr: z.number().nullable(),
    grossAmt: z.number().nullable(),
    invNr: z.number().int().nullable(),
    invAmt: z.number().nullable(),
    title: z.string().nullable(),
    isbnNr: z.string().nullable(),
    payType: z.string().nullable(),
    invType: z.string().nullable(),
    fvDescription: z.string().nullable(),
    bilNr: z.number().int().nullable(),
    origFVNr: z.number().int().nullable(),
    correctFVNr: z.number().int().nullable(),
    creditId: z.number().int().nullable(),
    applyId: z.number().int().nullable(),
    payDate: z.date().nullable(),
    enterDate: z.date().nullable(),
    enterEmployee: z.string().nullable(),
    status: z.string().nullable()
}).strict();

export type InvoiceResultType = z.infer<typeof InvoiceResultSchema>;
