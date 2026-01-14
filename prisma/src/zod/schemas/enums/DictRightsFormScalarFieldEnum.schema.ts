import * as z from 'zod';

export const DictRightsFormScalarFieldEnumSchema = z.enum(['RightFormID', 'RightFormDesc', 'RightFormPL', 'RightFormAbbPL', 'RightFormAbbEN'])

export type DictRightsFormScalarFieldEnum = z.infer<typeof DictRightsFormScalarFieldEnumSchema>;