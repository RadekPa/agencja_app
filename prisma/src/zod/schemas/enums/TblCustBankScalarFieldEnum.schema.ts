import * as z from 'zod';

export const TblCustBankScalarFieldEnumSchema = z.enum(['CustID', 'BankName', 'BankAddress', 'AccountNo', 'RoutingNo', 'AccountName'])

export type TblCustBankScalarFieldEnum = z.infer<typeof TblCustBankScalarFieldEnumSchema>;