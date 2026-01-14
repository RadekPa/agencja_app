import * as z from 'zod';

export const TmpKursyXMLScalarFieldEnumSchema = z.enum(['Id', 'XMLData', 'LoadedDateTime'])

export type TmpKursyXMLScalarFieldEnum = z.infer<typeof TmpKursyXMLScalarFieldEnumSchema>;