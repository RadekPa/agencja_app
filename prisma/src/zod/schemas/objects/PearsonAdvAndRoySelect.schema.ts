import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ContractID: z.boolean().optional(),
  ISBN: z.boolean().optional(),
  ContractDate: z.boolean().optional(),
  PublisherName: z.boolean().optional(),
  TermDate: z.boolean().optional(),
  Status: z.boolean().optional(),
  Title: z.boolean().optional(),
  AuthorNames: z.boolean().optional(),
  Edition: z.boolean().optional(),
  BBD: z.boolean().optional(),
  CopyrightYear: z.boolean().optional(),
  SeriesName: z.boolean().optional(),
  FISBN: z.boolean().optional(),
  IsPublished: z.boolean().optional(),
  SamplesReceivedDate: z.boolean().optional(),
  PubDate: z.boolean().optional(),
  RequiredToPublish: z.boolean().optional(),
  IsPaid: z.boolean().optional(),
  TotalAdvances: z.boolean().optional(),
  TotalRoyalties: z.boolean().optional(),
  Last_Royalty_Period_Reported: z.boolean().optional(),
  Date_Royalty_Paid: z.boolean().optional()
}).strict();
export const PearsonAdvAndRoySelectObjectSchema: z.ZodType<Prisma.PearsonAdvAndRoySelect> = makeSchema() as unknown as z.ZodType<Prisma.PearsonAdvAndRoySelect>;
export const PearsonAdvAndRoySelectObjectZodSchema = makeSchema();
