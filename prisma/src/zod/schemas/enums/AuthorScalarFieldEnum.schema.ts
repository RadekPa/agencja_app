import * as z from 'zod';

export const AuthorScalarFieldEnumSchema = z.enum(['id', 'phoneNumber', 'firstName', 'middleName', 'lastName', 'informal', 'fax', 'email', 'userMod', 'dateMod', 'contactPosition', 'accountant'])

export type AuthorScalarFieldEnum = z.infer<typeof AuthorScalarFieldEnumSchema>;