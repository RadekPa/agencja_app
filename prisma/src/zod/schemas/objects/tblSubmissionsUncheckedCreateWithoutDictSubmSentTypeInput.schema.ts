import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmEventsUncheckedCreateNestedManyWithoutTblSubmissionsInputObjectSchema as tblSubmEventsUncheckedCreateNestedManyWithoutTblSubmissionsInputObjectSchema } from './tblSubmEventsUncheckedCreateNestedManyWithoutTblSubmissionsInput.schema'

const makeSchema = () => z.object({
  SubmID: z.number().int().optional(),
  CopyTypeID: z.number().int().optional().nullable(),
  TitleID: z.number().int().optional().nullable(),
  CustID: z.number().int().optional().nullable(),
  Exclusive: z.number().int().optional().nullable(),
  SubmDate: z.coerce.date(),
  SentDate: z.coerce.date().optional().nullable(),
  EndDate: z.coerce.date().optional().nullable(),
  ReturnDate: z.coerce.date().optional().nullable(),
  NoOfCopies: z.number().int().optional().nullable(),
  TrackingNo: z.string().optional().nullable(),
  UserMod: z.string().optional(),
  DateMod: z.coerce.date().optional(),
  Status: z.string().optional().nullable(),
  SubmNr: z.number().int().optional().nullable(),
  Remarks: z.string().optional().nullable(),
  ContactID: z.number().int().optional().nullable(),
  tblSubmEvents: z.lazy(() => tblSubmEventsUncheckedCreateNestedManyWithoutTblSubmissionsInputObjectSchema).optional()
}).strict();
export const tblSubmissionsUncheckedCreateWithoutDictSubmSentTypeInputObjectSchema: z.ZodType<Prisma.tblSubmissionsUncheckedCreateWithoutDictSubmSentTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmissionsUncheckedCreateWithoutDictSubmSentTypeInput>;
export const tblSubmissionsUncheckedCreateWithoutDictSubmSentTypeInputObjectZodSchema = makeSchema();
