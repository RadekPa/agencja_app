import * as z from 'zod';

export const DictTargetGroupsScalarFieldEnumSchema = z.enum(['TargetGroupID', 'TargetGroupDesc'])

export type DictTargetGroupsScalarFieldEnum = z.infer<typeof DictTargetGroupsScalarFieldEnumSchema>;