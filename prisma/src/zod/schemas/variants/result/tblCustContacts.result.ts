import * as z from 'zod';
// prettier-ignore
export const tblCustContactsResultSchema = z.object({
    ContactID: z.number().int(),
    CustID: z.number().int(),
    DefaultContact: z.number().int(),
    TypeOfContact: z.number().int(),
    Phone: z.string().nullable(),
    CellPhone: z.string().nullable(),
    Fax: z.string().nullable(),
    Email: z.string().nullable(),
    IsSameAsClient: z.boolean().nullable(),
    tblCustomers: z.unknown(),
    contact: z.unknown()
}).strict();

export type tblCustContactsResultType = z.infer<typeof tblCustContactsResultSchema>;
