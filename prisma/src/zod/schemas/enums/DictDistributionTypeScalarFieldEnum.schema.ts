import * as z from 'zod';

export const DictDistributionTypeScalarFieldEnumSchema = z.enum(['DistID', 'DistDesc'])

export type DictDistributionTypeScalarFieldEnum = z.infer<typeof DictDistributionTypeScalarFieldEnumSchema>;