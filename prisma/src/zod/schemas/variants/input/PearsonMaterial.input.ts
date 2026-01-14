import * as z from 'zod';
// prettier-ignore
export const PearsonMaterialInputSchema = z.object({
    MyNumber: z.number().int(),
    ContractID: z.number().int(),
    InvoiceNumber: z.string().optional().nullable(),
    InvoiceDate: z.date().optional().nullable(),
    Publisher: z.string().optional().nullable(),
    Title: z.string().optional().nullable(),
    ISBN: z.string().optional().nullable(),
    Amount: z.number().optional().nullable()
}).strict();

export type PearsonMaterialInputType = z.infer<typeof PearsonMaterialInputSchema>;
