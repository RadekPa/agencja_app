import * as z from 'zod';
// prettier-ignore
export const tblInvoiceResultSchema = z.object({
    InvNum: z.number().int(),
    InvType: z.string(),
    InvDate: z.date().nullable(),
    BillToId: z.number().int(),
    ClientId: z.number().int().nullable(),
    ShipToId: z.number().int().nullable(),
    CurrId: z.string().nullable(),
    TotalInvNET: z.number().nullable(),
    VATPerc: z.number().int().nullable(),
    TermDD: z.number().int().nullable(),
    Remarks: z.string().nullable(),
    Status: z.string().nullable(),
    SumInWords: z.string().nullable(),
    Balance: z.number().nullable(),
    CliRef: z.string().nullable(),
    Descr: z.string().nullable(),
    DateDue: z.date().nullable(),
    UserName: z.string().nullable(),
    AgentID: z.number().int().nullable(),
    TaxCode: z.string().nullable(),
    TaxValue: z.number().nullable(),
    TaxInfo: z.string().nullable(),
    PropID: z.number().int().nullable()
}).strict();

export type tblInvoiceResultType = z.infer<typeof tblInvoiceResultSchema>;
