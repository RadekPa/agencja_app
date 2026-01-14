import * as z from 'zod';
// prettier-ignore
export const tblMaterialResultSchema = z.object({
    MatID: z.number().int(),
    AgrID: z.number().int(),
    MatTypeID: z.number().int(),
    Amount: z.number(),
    Currency: z.string().nullable(),
    Remarks: z.string().nullable(),
    RequestDate: z.date().nullable(),
    ReceiveDate: z.date().nullable()
}).strict();

export type tblMaterialResultType = z.infer<typeof tblMaterialResultSchema>;
