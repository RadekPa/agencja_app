import * as z from 'zod';
// prettier-ignore
export const PearsonMaterialModelSchema = z.object({
    MyNumber: z.number().int(),
    ContractID: z.number().int(),
    InvoiceNumber: z.string().nullable(),
    InvoiceDate: z.date().nullable(),
    Publisher: z.string().nullable(),
    Title: z.string().nullable(),
    ISBN: z.string().nullable(),
    Amount: z.number().nullable()
}).strict();

export type PearsonMaterialPureType = z.infer<typeof PearsonMaterialModelSchema>;
