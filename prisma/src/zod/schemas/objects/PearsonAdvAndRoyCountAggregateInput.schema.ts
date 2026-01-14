import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ContractID: z.literal(true).optional(),
  ISBN: z.literal(true).optional(),
  ContractDate: z.literal(true).optional(),
  PublisherName: z.literal(true).optional(),
  TermDate: z.literal(true).optional(),
  Status: z.literal(true).optional(),
  Title: z.literal(true).optional(),
  AuthorNames: z.literal(true).optional(),
  Edition: z.literal(true).optional(),
  BBD: z.literal(true).optional(),
  CopyrightYear: z.literal(true).optional(),
  SeriesName: z.literal(true).optional(),
  FISBN: z.literal(true).optional(),
  IsPublished: z.literal(true).optional(),
  SamplesReceivedDate: z.literal(true).optional(),
  PubDate: z.literal(true).optional(),
  RequiredToPublish: z.literal(true).optional(),
  IsPaid: z.literal(true).optional(),
  TotalAdvances: z.literal(true).optional(),
  TotalRoyalties: z.literal(true).optional(),
  Last_Royalty_Period_Reported: z.literal(true).optional(),
  Date_Royalty_Paid: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const PearsonAdvAndRoyCountAggregateInputObjectSchema: z.ZodType<Prisma.PearsonAdvAndRoyCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PearsonAdvAndRoyCountAggregateInputType>;
export const PearsonAdvAndRoyCountAggregateInputObjectZodSchema = makeSchema();
