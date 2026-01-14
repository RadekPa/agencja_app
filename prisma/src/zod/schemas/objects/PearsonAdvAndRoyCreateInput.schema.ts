import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ContractID: z.number(),
  ISBN: z.string().max(13),
  ContractDate: z.coerce.date().optional().nullable(),
  PublisherName: z.string().max(255).optional().nullable(),
  TermDate: z.coerce.date().optional().nullable(),
  Status: z.string().max(255).optional().nullable(),
  Title: z.string().max(255).optional().nullable(),
  AuthorNames: z.string().max(255).optional().nullable(),
  Edition: z.number().optional().nullable(),
  BBD: z.coerce.date().optional().nullable(),
  CopyrightYear: z.number().optional().nullable(),
  SeriesName: z.string().max(255).optional().nullable(),
  FISBN: z.number().optional().nullable(),
  IsPublished: z.string().max(255).optional().nullable(),
  SamplesReceivedDate: z.coerce.date().optional().nullable(),
  PubDate: z.string().max(255).optional().nullable(),
  RequiredToPublish: z.coerce.date().optional().nullable(),
  IsPaid: z.string().max(255).optional().nullable(),
  TotalAdvances: z.number().optional().nullable(),
  TotalRoyalties: z.number().optional().nullable(),
  Last_Royalty_Period_Reported: z.string().max(255).optional().nullable(),
  Date_Royalty_Paid: z.coerce.date().optional().nullable()
}).strict();
export const PearsonAdvAndRoyCreateInputObjectSchema: z.ZodType<Prisma.PearsonAdvAndRoyCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PearsonAdvAndRoyCreateInput>;
export const PearsonAdvAndRoyCreateInputObjectZodSchema = makeSchema();
