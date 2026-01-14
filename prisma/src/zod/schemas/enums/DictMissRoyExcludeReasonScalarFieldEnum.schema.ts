import * as z from 'zod';

export const DictMissRoyExcludeReasonScalarFieldEnumSchema = z.enum(['ExcludeReasonID', 'ExcludeReasonCode', 'ExcludeReasonDesc'])

export type DictMissRoyExcludeReasonScalarFieldEnum = z.infer<typeof DictMissRoyExcludeReasonScalarFieldEnumSchema>;