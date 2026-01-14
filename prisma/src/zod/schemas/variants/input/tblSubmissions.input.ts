import * as z from 'zod';
// prettier-ignore
export const tblSubmissionsInputSchema = z.object({
    SubmID: z.number().int(),
    CopyTypeID: z.number().int().optional().nullable(),
    SubmSentTypeID: z.number().int().optional().nullable(),
    TitleID: z.number().int().optional().nullable(),
    CustID: z.number().int().optional().nullable(),
    Exclusive: z.number().int().optional().nullable(),
    SubmDate: z.date(),
    SentDate: z.date().optional().nullable(),
    EndDate: z.date().optional().nullable(),
    ReturnDate: z.date().optional().nullable(),
    NoOfCopies: z.number().int().optional().nullable(),
    TrackingNo: z.string().optional().nullable(),
    UserMod: z.string(),
    DateMod: z.date(),
    Status: z.string().optional().nullable(),
    SubmNr: z.number().int().optional().nullable(),
    Remarks: z.string().optional().nullable(),
    ContactID: z.number().int().optional().nullable(),
    tblSubmEvents: z.array(z.unknown()),
    tblTitles: z.unknown().optional().nullable(),
    tblCustomers: z.unknown().optional().nullable(),
    dictSubmSentType: z.unknown().optional().nullable(),
    dictCopyType: z.unknown().optional().nullable()
}).strict();

export type tblSubmissionsInputType = z.infer<typeof tblSubmissionsInputSchema>;
