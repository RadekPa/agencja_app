import * as z from 'zod';
// prettier-ignore
export const tblCustContactsInputSchema = z.object({
    ContactID: z.number().int(),
    CustID: z.number().int(),
    DefaultContact: z.number().int(),
    TypeOfContact: z.number().int(),
    Phone: z.string().optional().nullable(),
    CellPhone: z.string().optional().nullable(),
    Fax: z.string().optional().nullable(),
    Email: z.string().optional().nullable(),
    IsSameAsClient: z.boolean().optional().nullable(),
    tblCustomers: z.unknown(),
    contact: z.unknown()
}).strict();

export type tblCustContactsInputType = z.infer<typeof tblCustContactsInputSchema>;
