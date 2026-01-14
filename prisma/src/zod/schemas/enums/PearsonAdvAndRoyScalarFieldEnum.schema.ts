import * as z from 'zod';

export const PearsonAdvAndRoyScalarFieldEnumSchema = z.enum(['ContractID', 'ISBN', 'ContractDate', 'PublisherName', 'TermDate', 'Status', 'Title', 'AuthorNames', 'Edition', 'BBD', 'CopyrightYear', 'SeriesName', 'FISBN', 'IsPublished', 'SamplesReceivedDate', 'PubDate', 'RequiredToPublish', 'IsPaid', 'TotalAdvances', 'TotalRoyalties', 'Last_Royalty_Period_Reported', 'Date_Royalty_Paid'])

export type PearsonAdvAndRoyScalarFieldEnum = z.infer<typeof PearsonAdvAndRoyScalarFieldEnumSchema>;