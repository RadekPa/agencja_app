import * as z from 'zod';

export const DictLanguagesScalarFieldEnumSchema = z.enum(['LangAbb', 'LangDesc', 'LangPL'])

export type DictLanguagesScalarFieldEnum = z.infer<typeof DictLanguagesScalarFieldEnumSchema>;