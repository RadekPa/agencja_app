import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmEventsCreateNestedManyWithoutTblSubmissionsInputObjectSchema as tblSubmEventsCreateNestedManyWithoutTblSubmissionsInputObjectSchema } from './tblSubmEventsCreateNestedManyWithoutTblSubmissionsInput.schema';
import { tblTitlesCreateNestedOneWithoutTblSubmissionsInputObjectSchema as tblTitlesCreateNestedOneWithoutTblSubmissionsInputObjectSchema } from './tblTitlesCreateNestedOneWithoutTblSubmissionsInput.schema';
import { tblCustomersCreateNestedOneWithoutTblSubmissionsInputObjectSchema as tblCustomersCreateNestedOneWithoutTblSubmissionsInputObjectSchema } from './tblCustomersCreateNestedOneWithoutTblSubmissionsInput.schema';
import { dictCopyTypeCreateNestedOneWithoutTblSubmissionsInputObjectSchema as dictCopyTypeCreateNestedOneWithoutTblSubmissionsInputObjectSchema } from './dictCopyTypeCreateNestedOneWithoutTblSubmissionsInput.schema'

const makeSchema = () => z.object({
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
  ContactID: z.number().int().optional().nullable(),
  tblSubmEvents: z.lazy(() => tblSubmEventsCreateNestedManyWithoutTblSubmissionsInputObjectSchema).optional(),
  tblTitles: z.lazy(() => tblTitlesCreateNestedOneWithoutTblSubmissionsInputObjectSchema).optional(),
  tblCustomers: z.lazy(() => tblCustomersCreateNestedOneWithoutTblSubmissionsInputObjectSchema).optional(),
  dictCopyType: z.lazy(() => dictCopyTypeCreateNestedOneWithoutTblSubmissionsInputObjectSchema).optional()
}).strict();
export const tblSubmissionsCreateWithoutDictSubmSentTypeInputObjectSchema: z.ZodType<Prisma.tblSubmissionsCreateWithoutDictSubmSentTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmissionsCreateWithoutDictSubmSentTypeInput>;
export const tblSubmissionsCreateWithoutDictSubmSentTypeInputObjectZodSchema = makeSchema();
