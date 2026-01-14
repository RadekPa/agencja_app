import * as z from 'zod';

export const TblMailingTemplatesScalarFieldEnumSchema = z.enum(['TempID', 'TempName', 'TempPath', 'TempSubject'])

export type TblMailingTemplatesScalarFieldEnum = z.infer<typeof TblMailingTemplatesScalarFieldEnumSchema>;