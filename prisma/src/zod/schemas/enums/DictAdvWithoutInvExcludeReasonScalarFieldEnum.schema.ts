import * as z from 'zod';

export const DictAdvWithoutInvExcludeReasonScalarFieldEnumSchema = z.enum(['ExcludeReasonID', 'ExcludeReasonCode', 'ExcludeReasonDesc'])

export type DictAdvWithoutInvExcludeReasonScalarFieldEnum = z.infer<typeof DictAdvWithoutInvExcludeReasonScalarFieldEnumSchema>;