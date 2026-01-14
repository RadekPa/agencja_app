import * as z from 'zod';

export const DictRoyAccountIntervalScalarFieldEnumSchema = z.enum(['RoyAccountIntervalID', 'RoyAccountIntervalDesc', 'IntervalAbb'])

export type DictRoyAccountIntervalScalarFieldEnum = z.infer<typeof DictRoyAccountIntervalScalarFieldEnumSchema>;