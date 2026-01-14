import * as z from 'zod';

export const TblTaxResidenceCertificateScalarFieldEnumSchema = z.enum(['CertID', 'ClientID', 'ValidDate', 'RequestDate', 'ReceiveDate', 'UpdateDate', 'HasCert', 'CountryID', 'CertFile', 'Remarks'])

export type TblTaxResidenceCertificateScalarFieldEnum = z.infer<typeof TblTaxResidenceCertificateScalarFieldEnumSchema>;