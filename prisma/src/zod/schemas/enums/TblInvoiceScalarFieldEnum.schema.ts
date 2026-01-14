import * as z from 'zod';

export const TblInvoiceScalarFieldEnumSchema = z.enum(['InvNum', 'InvType', 'InvDate', 'BillToId', 'ClientId', 'ShipToId', 'CurrId', 'TotalInvNET', 'VATPerc', 'TermDD', 'Remarks', 'Status', 'SumInWords', 'Balance', 'CliRef', 'Descr', 'DateDue', 'UserName', 'AgentID', 'TaxCode', 'TaxValue', 'TaxInfo', 'PropID'])

export type TblInvoiceScalarFieldEnum = z.infer<typeof TblInvoiceScalarFieldEnumSchema>;