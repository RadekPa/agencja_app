import * as z from 'zod';

export const PearsonMaterialScalarFieldEnumSchema = z.enum(['MyNumber', 'ContractID', 'InvoiceNumber', 'InvoiceDate', 'Publisher', 'Title', 'ISBN', 'Amount'])

export type PearsonMaterialScalarFieldEnum = z.infer<typeof PearsonMaterialScalarFieldEnumSchema>;