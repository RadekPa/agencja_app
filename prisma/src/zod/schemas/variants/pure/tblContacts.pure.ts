import * as z from 'zod';
// prettier-ignore
export const tblContactsModelSchema = z.object({
    ContactID: z.number().int(),
    PhoneNumber: z.string().nullable(),
    FirstName: z.string().nullable(),
    MiddleName: z.string().nullable(),
    LastName: z.string().nullable(),
    Informal: z.number().int(),
    Fax: z.string().nullable(),
    Email: z.string().nullable(),
    UserMod: z.string(),
    DateMod: z.date(),
    ContactPosition: z.string().nullable(),
    Accountant: z.number().int().nullable(),
    tblCustContacts: z.array(z.unknown())
}).strict();

export type tblContactsPureType = z.infer<typeof tblContactsModelSchema>;
