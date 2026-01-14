import * as z from 'zod';
// prettier-ignore
export const tblPersonModelSchema = z.object({
    PersonID: z.number().int(),
    LastName: z.string(),
    FirstName: z.string(),
    MiddleName: z.string().nullable(),
    BirthDate: z.date().nullable(),
    PESEL: z.string().nullable(),
    Status: z.string().nullable(),
    Address1: z.string().nullable(),
    Address2: z.string().nullable(),
    Zip: z.string().nullable(),
    City: z.string().nullable(),
    Country: z.string().nullable(),
    MobileGRAAL: z.string().nullable(),
    MobilePrivate: z.string().nullable(),
    ExtGRAAL: z.string().nullable(),
    emailGraal: z.string().nullable(),
    emailPriv: z.string().nullable()
}).strict();

export type tblPersonPureType = z.infer<typeof tblPersonModelSchema>;
