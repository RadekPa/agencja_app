import * as z from 'zod';
// prettier-ignore
export const tblSubmissionsModelSchema = z.object({
    SubmID: z.number().int(),
    CopyTypeID: z.number().int().nullable(),
    SubmSentTypeID: z.number().int().nullable(),
    TitleID: z.number().int().nullable(),
    CustID: z.number().int().nullable(),
    Exclusive: z.number().int().nullable(),
    SubmDate: z.date(),
    SentDate: z.date().nullable(),
    EndDate: z.date().nullable(),
    ReturnDate: z.date().nullable(),
    NoOfCopies: z.number().int().nullable(),
    TrackingNo: z.string().nullable(),
    UserMod: z.string(),
    DateMod: z.date(),
    Status: z.string().nullable(),
    SubmNr: z.number().int().nullable(),
    Remarks: z.string().nullable(),
    ContactID: z.number().int().nullable(),
    tblSubmEvents: z.array(z.unknown()),
    tblTitles: z.unknown().nullable(),
    tblCustomers: z.unknown().nullable(),
    dictSubmSentType: z.unknown().nullable(),
    dictCopyType: z.unknown().nullable()
}).strict();

export type tblSubmissionsPureType = z.infer<typeof tblSubmissionsModelSchema>;
