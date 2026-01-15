import * as z from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id', 'name', 'email', 'passwordHash', 'role', 'permissions', 'createdAt', 'updatedAt', 'locale'])

export type UserScalarFieldEnum = z.infer<typeof UserScalarFieldEnumSchema>;