import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmEventsFindManySchema as tblSubmEventsFindManySchema } from '../findManytblSubmEvents.schema';
import { tblTitlesArgsObjectSchema as tblTitlesArgsObjectSchema } from './tblTitlesArgs.schema';
import { tblCustomersArgsObjectSchema as tblCustomersArgsObjectSchema } from './tblCustomersArgs.schema';
import { dictSubmSentTypeArgsObjectSchema as dictSubmSentTypeArgsObjectSchema } from './dictSubmSentTypeArgs.schema';
import { dictCopyTypeArgsObjectSchema as dictCopyTypeArgsObjectSchema } from './dictCopyTypeArgs.schema';
import { TblSubmissionsCountOutputTypeArgsObjectSchema as TblSubmissionsCountOutputTypeArgsObjectSchema } from './TblSubmissionsCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  tblSubmEvents: z.union([z.boolean(), z.lazy(() => tblSubmEventsFindManySchema)]).optional(),
  tblTitles: z.union([z.boolean(), z.lazy(() => tblTitlesArgsObjectSchema)]).optional(),
  tblCustomers: z.union([z.boolean(), z.lazy(() => tblCustomersArgsObjectSchema)]).optional(),
  dictSubmSentType: z.union([z.boolean(), z.lazy(() => dictSubmSentTypeArgsObjectSchema)]).optional(),
  dictCopyType: z.union([z.boolean(), z.lazy(() => dictCopyTypeArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TblSubmissionsCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const tblSubmissionsIncludeObjectSchema: z.ZodType<Prisma.tblSubmissionsInclude> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmissionsInclude>;
export const tblSubmissionsIncludeObjectZodSchema = makeSchema();
