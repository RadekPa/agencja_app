import * as z from 'zod';

export const InvoiceScalarFieldEnumSchema = z.enum(['id', 'date', 'dateIssued', 'type', 'clientId', 'origCurrency', 'fvCurrency', 'graalPerc', 'vatCode', 'vatPerc', 'netAmt', 'netAmtCurr', 'vatAmt', 'xrate', 'vatAmtCurr', 'grossAmt', 'invNr', 'invAmt', 'title', 'isbnNr', 'payType', 'invType', 'fvDescription', 'bilNr', 'origFVNr', 'correctFVNr', 'creditId', 'applyId', 'payDate', 'enterDate', 'enterEmployee', 'status'])

export type InvoiceScalarFieldEnum = z.infer<typeof InvoiceScalarFieldEnumSchema>;