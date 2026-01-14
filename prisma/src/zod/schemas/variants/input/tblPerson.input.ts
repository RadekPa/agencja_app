import * as z from 'zod';
// prettier-ignore
export const tblPersonInputSchema = z.object({
    PersonID: z.number().int(),
    LastName: z.string(),
    FirstName: z.string(),
    MiddleName: z.string().optional().nullable(),
    BirthDate: z.date().optional().nullable(),
    PESEL: z.string().optional().nullable(),
    Status: z.string().optional().nullable(),
    Address1: z.string().optional().nullable(),
    Address2: z.string().optional().nullable(),
    Zip: z.string().optional().nullable(),
    City: z.string().optional().nullable(),
    Country: z.string().optional().nullable(),
    MobileGRAAL: z.string().optional().nullable(),
    MobilePrivate: z.string().optional().nullable(),
    ExtGRAAL: z.string().optional().nullable(),
    emailGraal: z.string().optional().nullable(),
    emailPriv: z.string().optional().nullable()
}).strict();

export type tblPersonInputType = z.infer<typeof tblPersonInputSchema>;
