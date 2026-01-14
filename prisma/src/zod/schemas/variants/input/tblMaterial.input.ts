import * as z from 'zod';
// prettier-ignore
export const tblMaterialInputSchema = z.object({
    MatID: z.number().int(),
    AgrID: z.number().int(),
    MatTypeID: z.number().int(),
    Amount: z.number(),
    Currency: z.string().optional().nullable(),
    Remarks: z.string().optional().nullable(),
    RequestDate: z.date().optional().nullable(),
    ReceiveDate: z.date().optional().nullable()
}).strict();

export type tblMaterialInputType = z.infer<typeof tblMaterialInputSchema>;
