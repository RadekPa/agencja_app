import * as z from 'zod';
// prettier-ignore
export const ContactInputSchema = z.object({
    id: z.number().int(),
    phoneNumber: z.string().optional().nullable(),
    firstName: z.string().optional().nullable(),
    middleName: z.string().optional().nullable(),
    lastName: z.string().optional().nullable(),
    informal: z.number().int(),
    fax: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    userMod: z.string(),
    dateMod: z.date(),
    contactPosition: z.string().optional().nullable(),
    accountant: z.number().int().optional().nullable(),
    tblCustContacts: z.array(z.unknown())
}).strict();

export type ContactInputType = z.infer<typeof ContactInputSchema>;
