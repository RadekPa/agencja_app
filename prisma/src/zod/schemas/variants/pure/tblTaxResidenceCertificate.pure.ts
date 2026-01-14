import * as z from 'zod';
// prettier-ignore
export const tblTaxResidenceCertificateModelSchema = z.object({
    CertID: z.number().int(),
    ClientID: z.number().int(),
    ValidDate: z.date(),
    RequestDate: z.date().nullable(),
    ReceiveDate: z.date().nullable(),
    UpdateDate: z.date(),
    HasCert: z.string(),
    CountryID: z.number().int().nullable(),
    CertFile: z.instanceof(Uint8Array).nullable(),
    Remarks: z.string().nullable()
}).strict();

export type tblTaxResidenceCertificatePureType = z.infer<typeof tblTaxResidenceCertificateModelSchema>;
