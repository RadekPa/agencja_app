import * as z from 'zod';
// prettier-ignore
export const tblMailingListsResultSchema = z.object({
    ClassCode: z.string(),
    SubClassCode: z.string(),
    CustID: z.number().int(),
    dictTitMainClass: z.unknown(),
    dictTitSubClass: z.unknown(),
    tblCustomers: z.unknown()
}).strict();

export type tblMailingListsResultType = z.infer<typeof tblMailingListsResultSchema>;
