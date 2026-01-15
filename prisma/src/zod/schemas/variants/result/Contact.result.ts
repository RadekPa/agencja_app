import * as z from 'zod';
// prettier-ignore
export const ContactResultSchema = z.object({
    id: z.number().int(),
    phoneNumber: z.string().nullable(),
    firstName: z.string().nullable(),
    middleName: z.string().nullable(),
    lastName: z.string().nullable(),
    informal: z.number().int(),
    fax: z.string().nullable(),
    email: z.string().nullable(),
    userMod: z.string(),
    dateMod: z.date(),
    contactPosition: z.string().nullable(),
    accountant: z.number().int().nullable(),
    tblCustContacts: z.array(z.unknown())
}).strict();

export type ContactResultType = z.infer<typeof ContactResultSchema>;
