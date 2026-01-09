import * as z from 'zod';
// prettier-ignore
export const ContactResultSchema = z.object({
    id: z.number().int(),
    phoneNumber: z.string().nullable(),
    firstName: z.string(),
    middleName: z.string().nullable(),
    lastName: z.string(),
    informal: z.number().int(),
    fax: z.string().nullable(),
    email: z.string().nullable(),
    userMod: z.string(),
    dateMod: z.date(),
    contactPosition: z.string().nullable(),
    accountant: z.number().int().nullable()
}).strict();

export type ContactResultType = z.infer<typeof ContactResultSchema>;
