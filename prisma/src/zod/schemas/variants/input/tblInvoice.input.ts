import * as z from 'zod';
// prettier-ignore
export const tblInvoiceInputSchema = z.object({
    InvNum: z.number().int(),
    InvType: z.string(),
    InvDate: z.date().optional().nullable(),
    BillToId: z.number().int(),
    ClientId: z.number().int().optional().nullable(),
    ShipToId: z.number().int().optional().nullable(),
    CurrId: z.string().optional().nullable(),
    TotalInvNET: z.number().optional().nullable(),
    VATPerc: z.number().int().optional().nullable(),
    TermDD: z.number().int().optional().nullable(),
    Remarks: z.string().optional().nullable(),
    Status: z.string().optional().nullable(),
    SumInWords: z.string().optional().nullable(),
    Balance: z.number().optional().nullable(),
    CliRef: z.string().optional().nullable(),
    Descr: z.string().optional().nullable(),
    DateDue: z.date().optional().nullable(),
    UserName: z.string().optional().nullable(),
    AgentID: z.number().int().optional().nullable(),
    TaxCode: z.string().optional().nullable(),
    TaxValue: z.number().optional().nullable(),
    TaxInfo: z.string().optional().nullable(),
    PropID: z.number().int().optional().nullable()
}).strict();

export type tblInvoiceInputType = z.infer<typeof tblInvoiceInputSchema>;
