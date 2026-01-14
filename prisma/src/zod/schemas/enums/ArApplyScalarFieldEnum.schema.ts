import * as z from 'zod';

export const ArApplyScalarFieldEnumSchema = z.enum(['ApplyID', 'DebitID', 'CreditID', 'TaxPerc', 'TaxAmt', 'AmtApplied', 'GraalPerc', 'GraalAmt', 'Notes', 'ApplyDate', 'TaxSet'])

export type ArApplyScalarFieldEnum = z.infer<typeof ArApplyScalarFieldEnumSchema>;