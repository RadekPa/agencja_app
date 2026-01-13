import * as z from 'zod';
// prettier-ignore
export const SimpleInvoiceInputSchema = z.object({
    id: z.number().int(),
    invType: z.string(),
    invDate: z.date().optional().nullable(),
    billToId: z.number().int(),
    billTo: z.unknown(),
    clientId: z.number().int().optional().nullable(),
    client: z.unknown().optional().nullable(),
    shipToId: z.number().int().optional().nullable(),
    currId: z.string().optional().nullable(),
    totalInvNET: z.number().optional().nullable(),
    vatPerc: z.number().int().optional().nullable(),
    termDD: z.number().int().optional().nullable(),
    remarks: z.string().optional().nullable(),
    status: z.string().optional().nullable(),
    sumInWords: z.string().optional().nullable(),
    balance: z.number().optional().nullable(),
    cliRef: z.string().optional().nullable(),
    descr: z.string().optional().nullable(),
    dateDue: z.date().optional().nullable(),
    userName: z.string().optional().nullable(),
    agentID: z.number().int().optional().nullable(),
    taxCode: z.string().optional().nullable(),
    taxValue: z.number().optional().nullable(),
    taxInfo: z.string().optional().nullable(),
    propID: z.number().int().optional().nullable()
}).strict();

export type SimpleInvoiceInputType = z.infer<typeof SimpleInvoiceInputSchema>;
