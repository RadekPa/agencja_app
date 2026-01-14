import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmEventsFindManySchema as tblSubmEventsFindManySchema } from '../findManytblSubmEvents.schema';
import { tblTitlesArgsObjectSchema as tblTitlesArgsObjectSchema } from './tblTitlesArgs.schema';
import { tblCustomersArgsObjectSchema as tblCustomersArgsObjectSchema } from './tblCustomersArgs.schema';
import { dictSubmSentTypeArgsObjectSchema as dictSubmSentTypeArgsObjectSchema } from './dictSubmSentTypeArgs.schema';
import { dictCopyTypeArgsObjectSchema as dictCopyTypeArgsObjectSchema } from './dictCopyTypeArgs.schema';
import { TblSubmissionsCountOutputTypeArgsObjectSchema as TblSubmissionsCountOutputTypeArgsObjectSchema } from './TblSubmissionsCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  SubmID: z.boolean().optional(),
  CopyTypeID: z.boolean().optional(),
  SubmSentTypeID: z.boolean().optional(),
  TitleID: z.boolean().optional(),
  CustID: z.boolean().optional(),
  Exclusive: z.boolean().optional(),
  SubmDate: z.boolean().optional(),
  SentDate: z.boolean().optional(),
  EndDate: z.boolean().optional(),
  ReturnDate: z.boolean().optional(),
  NoOfCopies: z.boolean().optional(),
  TrackingNo: z.boolean().optional(),
  UserMod: z.boolean().optional(),
  DateMod: z.boolean().optional(),
  Status: z.boolean().optional(),
  SubmNr: z.boolean().optional(),
  Remarks: z.boolean().optional(),
  ContactID: z.boolean().optional(),
  tblSubmEvents: z.union([z.boolean(), z.lazy(() => tblSubmEventsFindManySchema)]).optional(),
  tblTitles: z.union([z.boolean(), z.lazy(() => tblTitlesArgsObjectSchema)]).optional(),
  tblCustomers: z.union([z.boolean(), z.lazy(() => tblCustomersArgsObjectSchema)]).optional(),
  dictSubmSentType: z.union([z.boolean(), z.lazy(() => dictSubmSentTypeArgsObjectSchema)]).optional(),
  dictCopyType: z.union([z.boolean(), z.lazy(() => dictCopyTypeArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TblSubmissionsCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const tblSubmissionsSelectObjectSchema: z.ZodType<Prisma.tblSubmissionsSelect> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmissionsSelect>;
export const tblSubmissionsSelectObjectZodSchema = makeSchema();
