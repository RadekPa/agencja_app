import * as z from 'zod';

export const TblInvoiceDetailsScalarFieldEnumSchema = z.enum(['InvNum', 'InvDetKey', 'InvType', 'AgID', 'OrdNr', 'NrItems', 'Amount', 'RptTitle', 'RptISBN', 'RptAuthor', 'RoyDate', 'RoyRight', 'RoyCopies', 'RoyPrice', 'RoyRate', 'RoyXRate', 'RoyThisRoy', 'RoyAdvLeft', 'RoyRoyDue'])

export type TblInvoiceDetailsScalarFieldEnum = z.infer<typeof TblInvoiceDetailsScalarFieldEnumSchema>;