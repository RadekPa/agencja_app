import * as z from 'zod';
export const PearsonAdvAndRoyFindManyResultSchema = z.object({
  data: z.array(z.object({
  ContractID: z.number(),
  ISBN: z.string(),
  ContractDate: z.date().optional(),
  PublisherName: z.string().optional(),
  TermDate: z.date().optional(),
  Status: z.string().optional(),
  Title: z.string().optional(),
  AuthorNames: z.string().optional(),
  Edition: z.number().optional(),
  BBD: z.date().optional(),
  CopyrightYear: z.number().optional(),
  SeriesName: z.string().optional(),
  FISBN: z.number().optional(),
  IsPublished: z.string().optional(),
  SamplesReceivedDate: z.date().optional(),
  PubDate: z.string().optional(),
  RequiredToPublish: z.date().optional(),
  IsPaid: z.string().optional(),
  TotalAdvances: z.number().optional(),
  TotalRoyalties: z.number().optional(),
  Last_Royalty_Period_Reported: z.string().optional(),
  Date_Royalty_Paid: z.date().optional()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});