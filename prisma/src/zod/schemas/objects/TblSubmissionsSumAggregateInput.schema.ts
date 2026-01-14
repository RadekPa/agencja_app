import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  SubmID: z.literal(true).optional(),
  CopyTypeID: z.literal(true).optional(),
  SubmSentTypeID: z.literal(true).optional(),
  TitleID: z.literal(true).optional(),
  CustID: z.literal(true).optional(),
  Exclusive: z.literal(true).optional(),
  NoOfCopies: z.literal(true).optional(),
  SubmNr: z.literal(true).optional(),
  ContactID: z.literal(true).optional()
}).strict();
export const TblSubmissionsSumAggregateInputObjectSchema: z.ZodType<Prisma.TblSubmissionsSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblSubmissionsSumAggregateInputType>;
export const TblSubmissionsSumAggregateInputObjectZodSchema = makeSchema();
