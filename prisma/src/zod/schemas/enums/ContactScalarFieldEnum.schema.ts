import * as z from 'zod';

export const ContactScalarFieldEnumSchema = z.enum(['id', 'phoneNumber', 'firstName', 'middleName', 'lastName', 'informal', 'fax', 'email', 'userMod', 'dateMod', 'contactPosition', 'accountant'])

export type ContactScalarFieldEnum = z.infer<typeof ContactScalarFieldEnumSchema>;