import * as z from 'zod';

export const SimpleInvoiceScalarFieldEnumSchema = z.enum(['id', 'invType', 'invDate', 'billToId', 'clientId', 'shipToId', 'currId', 'totalInvNET', 'vatPerc', 'termDD', 'remarks', 'status', 'sumInWords', 'balance', 'cliRef', 'descr', 'dateDue', 'userName', 'agentID', 'taxCode', 'taxValue', 'taxInfo', 'propID'])

export type SimpleInvoiceScalarFieldEnum = z.infer<typeof SimpleInvoiceScalarFieldEnumSchema>;