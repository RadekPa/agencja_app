import * as z from 'zod';
// prettier-ignore
export const PearsonAdvAndRoyResultSchema = z.object({
    ContractID: z.number(),
    ISBN: z.string(),
    ContractDate: z.date().nullable(),
    PublisherName: z.string().nullable(),
    TermDate: z.date().nullable(),
    Status: z.string().nullable(),
    Title: z.string().nullable(),
    AuthorNames: z.string().nullable(),
    Edition: z.number().nullable(),
    BBD: z.date().nullable(),
    CopyrightYear: z.number().nullable(),
    SeriesName: z.string().nullable(),
    FISBN: z.number().nullable(),
    IsPublished: z.string().nullable(),
    SamplesReceivedDate: z.date().nullable(),
    PubDate: z.string().nullable(),
    RequiredToPublish: z.date().nullable(),
    IsPaid: z.string().nullable(),
    TotalAdvances: z.number().nullable(),
    TotalRoyalties: z.number().nullable(),
    Last_Royalty_Period_Reported: z.string().nullable(),
    Date_Royalty_Paid: z.date().nullable()
}).strict();

export type PearsonAdvAndRoyResultType = z.infer<typeof PearsonAdvAndRoyResultSchema>;
