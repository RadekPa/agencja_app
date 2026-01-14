import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  SubmSentTypeID: z.number().int().optional().nullable(),
  TitleID: z.number().int().optional().nullable(),
  CustID: z.number().int().optional().nullable(),
  Exclusive: z.number().int().optional().nullable(),
  SubmDate: z.coerce.date(),
  SentDate: z.coerce.date().optional().nullable(),
  EndDate: z.coerce.date().optional().nullable(),
  ReturnDate: z.coerce.date().optional().nullable(),
  NoOfCopies: z.number().int().optional().nullable(),
  TrackingNo: z.string().max(30).optional().nullable(),
  UserMod: z.string().max(30).optional(),
  DateMod: z.coerce.date().optional(),
  Status: z.string().max(1).optional().nullable(),
  SubmNr: z.number().int().optional().nullable(),
  Remarks: z.string().max(1000).optional().nullable(),
  ContactID: z.number().int().optional().nullable()
}).strict();
export const tblSubmissionsCreateManyDictCopyTypeInputObjectSchema: z.ZodType<Prisma.tblSubmissionsCreateManyDictCopyTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmissionsCreateManyDictCopyTypeInput>;
export const tblSubmissionsCreateManyDictCopyTypeInputObjectZodSchema = makeSchema();
