import * as z from 'zod';

export const PdxTRANSFERScalarFieldEnumSchema = z.enum(['Bil_nr', 'Date', 'PayType', 'Nasz_inv', 'Waluta', 'Kwota_wp_ywu', 'Kwota_inv', 'Tax_10_', 'Tax', 'AgrID', 'AUTOR', 'Title', 'WYD', 'OWNAB', 'GRAAL_INCOME', 'Transfer'])

export type PdxTRANSFERScalarFieldEnum = z.infer<typeof PdxTRANSFERScalarFieldEnumSchema>;