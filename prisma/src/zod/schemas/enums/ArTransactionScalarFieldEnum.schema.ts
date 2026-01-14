import * as z from 'zod';

export const ArTransactionScalarFieldEnumSchema = z.enum(['TransactionID', 'DefaultDocRef', 'InvNr', 'TransactionDate', 'TransactionType', 'Currency', 'TransactionAmt', 'RCustID', 'PCustID', 'RBalance', 'PBalance', 'IFTBalance', 'GraalBalance', 'ClientReference', 'OurBankTransRef', 'NetDate', 'IsChargeInterest', 'Notes', 'ReversalTransID', 'OriginTransID', 'EntryDate', 'OriginUserID', 'ErrorID', 'Status', 'CreditID', 'ApplyID', 'TaxCode', 'TaxValue'])

export type ArTransactionScalarFieldEnum = z.infer<typeof ArTransactionScalarFieldEnumSchema>;