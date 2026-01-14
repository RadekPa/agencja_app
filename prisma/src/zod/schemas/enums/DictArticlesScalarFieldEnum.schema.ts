import * as z from 'zod';

export const DictArticlesScalarFieldEnumSchema = z.enum(['Article', 'LangAbb'])

export type DictArticlesScalarFieldEnum = z.infer<typeof DictArticlesScalarFieldEnumSchema>;