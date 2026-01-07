import * as z from 'zod';

export const CustomerScalarFieldEnumSchema = z.enum(['id', 'name', 'email', 'phone', 'address', 'city', 'postalCode', 'country', 'nip', 'regon', 'notes', 'createdAt'])

export type CustomerScalarFieldEnum = z.infer<typeof CustomerScalarFieldEnumSchema>;