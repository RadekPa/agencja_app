import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  SubmID: z.literal(true).optional(),
  CopyTypeID: z.literal(true).optional(),
  SubmSentTypeID: z.literal(true).optional(),
  TitleID: z.literal(true).optional(),
  CustID: z.literal(true).optional(),
  Exclusive: z.literal(true).optional(),
  SubmDate: z.literal(true).optional(),
  SentDate: z.literal(true).optional(),
  EndDate: z.literal(true).optional(),
  ReturnDate: z.literal(true).optional(),
  NoOfCopies: z.literal(true).optional(),
  TrackingNo: z.literal(true).optional(),
  UserMod: z.literal(true).optional(),
  DateMod: z.literal(true).optional(),
  Status: z.literal(true).optional(),
  SubmNr: z.literal(true).optional(),
  Remarks: z.literal(true).optional(),
  ContactID: z.literal(true).optional()
}).strict();
export const TblSubmissionsMaxAggregateInputObjectSchema: z.ZodType<Prisma.TblSubmissionsMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblSubmissionsMaxAggregateInputType>;
export const TblSubmissionsMaxAggregateInputObjectZodSchema = makeSchema();
