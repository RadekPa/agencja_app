import * as z from 'zod';

export const LocalUserScalarFieldEnumSchema = z.enum(['id', 'name', 'email', 'passwordHash', 'role', 'permissions', 'createdAt', 'updatedAt', 'locale'])

export type LocalUserScalarFieldEnum = z.infer<typeof LocalUserScalarFieldEnumSchema>;