import * as z from 'zod';
// prettier-ignore
export const tblCustContactsModelSchema = z.object({
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
    tblContacts: z.unknown()
}).strict();

export type tblCustContactsPureType = z.infer<typeof tblCustContactsModelSchema>;
