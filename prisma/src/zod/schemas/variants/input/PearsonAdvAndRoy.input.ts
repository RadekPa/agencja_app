import * as z from 'zod';
// prettier-ignore
export const PearsonAdvAndRoyInputSchema = z.object({
    ContractID: z.number(),
    ISBN: z.string(),
    ContractDate: z.date().optional().nullable(),
    PublisherName: z.string().optional().nullable(),
    TermDate: z.date().optional().nullable(),
    Status: z.string().optional().nullable(),
    Title: z.string().optional().nullable(),
    AuthorNames: z.string().optional().nullable(),
    Edition: z.number().optional().nullable(),
    BBD: z.date().optional().nullable(),
    CopyrightYear: z.number().optional().nullable(),
    SeriesName: z.string().optional().nullable(),
    FISBN: z.number().optional().nullable(),
    IsPublished: z.string().optional().nullable(),
    SamplesReceivedDate: z.date().optional().nullable(),
    PubDate: z.string().optional().nullable(),
    RequiredToPublish: z.date().optional().nullable(),
    IsPaid: z.string().optional().nullable(),
    TotalAdvances: z.number().optional().nullable(),
    TotalRoyalties: z.number().optional().nullable(),
    Last_Royalty_Period_Reported: z.string().optional().nullable(),
    Date_Royalty_Paid: z.date().optional().nullable()
}).strict();

export type PearsonAdvAndRoyInputType = z.infer<typeof PearsonAdvAndRoyInputSchema>;
