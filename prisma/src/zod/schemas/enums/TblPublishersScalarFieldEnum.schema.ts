import * as z from 'zod';

export const TblPublishersScalarFieldEnumSchema = z.enum(['PubID', 'PubName', 'PubAbb', 'ParentPubID'])

export type TblPublishersScalarFieldEnum = z.infer<typeof TblPublishersScalarFieldEnumSchema>;