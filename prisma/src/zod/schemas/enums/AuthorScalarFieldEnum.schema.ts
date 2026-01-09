import * as z from 'zod';

export const AuthorScalarFieldEnumSchema = z.enum(['id', 'fullName', 'firstName', 'middleName', 'lastName', 'suffix', 'penName', 'userMod', 'dateMod', 'remarks'])

export type AuthorScalarFieldEnum = z.infer<typeof AuthorScalarFieldEnumSchema>;