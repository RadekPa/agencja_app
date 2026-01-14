import * as z from 'zod';

export const HelionLocalScalarFieldEnumSchema = z.enum(['ISBNORG', 'ISBNHELION', 'TYTULORG', 'TYTULHELION'])

export type HelionLocalScalarFieldEnum = z.infer<typeof HelionLocalScalarFieldEnumSchema>;