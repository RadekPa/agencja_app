import * as z from 'zod';
// prettier-ignore
export const tblContactsInputSchema = z.object({
    ContactID: z.number().int(),
    PhoneNumber: z.string().optional().nullable(),
    FirstName: z.string().optional().nullable(),
    MiddleName: z.string().optional().nullable(),
    LastName: z.string().optional().nullable(),
    Informal: z.number().int(),
    Fax: z.string().optional().nullable(),
    Email: z.string().optional().nullable(),
    UserMod: z.string(),
    DateMod: z.date(),
    ContactPosition: z.string().optional().nullable(),
    Accountant: z.number().int().optional().nullable(),
    tblCustContacts: z.array(z.unknown())
}).strict();

export type tblContactsInputType = z.infer<typeof tblContactsInputSchema>;
