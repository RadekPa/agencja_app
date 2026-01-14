import * as z from 'zod';

export const DboLocalUserScalarFieldEnumSchema = z.enum(['id', 'name', 'email', 'passwordHash', 'role', 'permissions', 'createdAt', 'updatedAt', 'locale'])

export type DboLocalUserScalarFieldEnum = z.infer<typeof DboLocalUserScalarFieldEnumSchema>;