import * as z from 'zod';
// prettier-ignore
export const SimpleInvoiceResultSchema = z.object({
    id: z.number().int(),
    invType: z.string(),
    invDate: z.date().nullable(),
    billToId: z.number().int(),
    clientId: z.number().int().nullable(),
    client: z.unknown().nullable(),
    shipToId: z.number().int().nullable(),
    currId: z.string().nullable(),
    totalInvNET: z.number().nullable(),
    vatPerc: z.number().int().nullable(),
    termDD: z.number().int().nullable(),
    remarks: z.string().nullable(),
    status: z.string().nullable(),
    sumInWords: z.string().nullable(),
    balance: z.number().nullable(),
    cliRef: z.string().nullable(),
    descr: z.string().nullable(),
    dateDue: z.date().nullable(),
    userName: z.string().nullable(),
    agentID: z.number().int().nullable(),
    taxCode: z.string().nullable(),
    taxValue: z.number().nullable(),
    taxInfo: z.string().nullable(),
    propID: z.number().int().nullable()
}).strict();

export type SimpleInvoiceResultType = z.infer<typeof SimpleInvoiceResultSchema>;
