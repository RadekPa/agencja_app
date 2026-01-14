import * as z from 'zod';

export const PdxBilansScalarFieldEnumSchema = z.enum(['Bil_nr', 'Waluta', 'Wyci_g', 'Data_wyc', 'Nasz_inv', 'Type', 'Kwota_wp_ywu', 'PayType', 'Graal_perc', 'Kwota_wyp_aty', 'Kwota_inv', 'Tax_10_', 'TaxPerc', 'Tax', 'Wyd_Debit', 'Extra_Bank', 'Transfer', 'AGNR', 'RIGHT', 'AUTOR', 'Title', 'WYDAB', 'WYD', 'OWNAB', 'OWNER', 'Sum', 'SumPLN', 'GRAAL_INCOME', 'Kurs', 'GraalPLN', 'Notes'])

export type PdxBilansScalarFieldEnum = z.infer<typeof PdxBilansScalarFieldEnumSchema>;