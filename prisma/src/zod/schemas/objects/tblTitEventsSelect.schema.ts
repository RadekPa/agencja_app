import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesArgsObjectSchema as tblTitlesArgsObjectSchema } from './tblTitlesArgs.schema';
import { dictEventsArgsObjectSchema as dictEventsArgsObjectSchema } from './dictEventsArgs.schema';
import { dictCopyTypeArgsObjectSchema as dictCopyTypeArgsObjectSchema } from './dictCopyTypeArgs.schema'

const makeSchema = () => z.object({
  TitEventID: z.boolean().optional(),
  CopyTypeID: z.boolean().optional(),
  EventCode: z.boolean().optional(),
  TitleID: z.boolean().optional(),
  EventDate: z.boolean().optional(),
  NoOfCopies: z.boolean().optional(),
  EndDate: z.boolean().optional(),
  tblTitles: z.union([z.boolean(), z.lazy(() => tblTitlesArgsObjectSchema)]).optional(),
  dictEvents: z.union([z.boolean(), z.lazy(() => dictEventsArgsObjectSchema)]).optional(),
  dictCopyType: z.union([z.boolean(), z.lazy(() => dictCopyTypeArgsObjectSchema)]).optional()
}).strict();
export const tblTitEventsSelectObjectSchema: z.ZodType<Prisma.tblTitEventsSelect> = makeSchema() as unknown as z.ZodType<Prisma.tblTitEventsSelect>;
export const tblTitEventsSelectObjectZodSchema = makeSchema();
