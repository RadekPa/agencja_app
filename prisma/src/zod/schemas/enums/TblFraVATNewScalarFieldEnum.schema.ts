import * as z from 'zod';

export const TblFraVATNewScalarFieldEnumSchema = z.enum(['FVNr', 'FVDate', 'FVDateIssued', 'FVType', 'CustID', 'OrigCurrency', 'FVCurrency', 'GraalPerc', 'VATCode', 'VatPerc', 'NetAmt', 'NetAmtCurr', 'VatAmt', 'XRate', 'VatAmtCurr', 'GrossAmt', 'InvNr', 'InvAmt', 'Title', 'ISBNNr', 'PayType', 'InvType', 'FVDescription', 'BilNr', 'OrigFVNr', 'CorrectFVNr', 'CreditID', 'ApplyID', 'PayDate', 'EnterDate', 'EnterEmployee', 'Status'])

export type TblFraVATNewScalarFieldEnum = z.infer<typeof TblFraVATNewScalarFieldEnumSchema>;