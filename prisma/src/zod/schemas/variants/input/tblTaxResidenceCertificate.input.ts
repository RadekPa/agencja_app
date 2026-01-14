import * as z from 'zod';
// prettier-ignore
export const tblTaxResidenceCertificateInputSchema = z.object({
    CertID: z.number().int(),
    ClientID: z.number().int(),
    ValidDate: z.date(),
    RequestDate: z.date().optional().nullable(),
    ReceiveDate: z.date().optional().nullable(),
    UpdateDate: z.date(),
    HasCert: z.string(),
    CountryID: z.number().int().optional().nullable(),
    CertFile: z.instanceof(Uint8Array).optional().nullable(),
    Remarks: z.string().optional().nullable()
}).strict();

export type tblTaxResidenceCertificateInputType = z.infer<typeof tblTaxResidenceCertificateInputSchema>;
